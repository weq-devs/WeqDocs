# AI 助手（小Q）—— `ai_session_table` / `ai_assistant_msg_table`

QQ 内置的 AI 助手「小Q」（chatType **45**）不在 c2c 家族里：会话与消息各占一张
独立表。本文记录这两张表的列语义、消息元素格式与卡片结构，全部来自实测样本
（2026-11，Windows NTQQ，33 条消息 / 5 个会话）。

对应 WeQ 解析实现：

| 文件 | 职责 |
| ---- | ---- |
| `packages/codec/src/proto/msg/ai_markdown.ts` | 48707 流式元数据与按钮动作码的 wire schema |
| `packages/codec/src/domain/msg/ai_assistant.ts` | 流式片段折叠、卡片表解析、正文按卡片切段 |
| `packages/db/src/contact/ai_assistant.ts` | 两张表的读取（会话列表 / 消息 / 计数） |
| `packages/service/src/account/ai_assistant.ts` | 只读服务：会话摘要 + 可渲染消息 |
| `apps/desktop/src/renderer/src/components/ai-assistant/` | 会话面板、卡片、操作栏、推荐按钮 |

---

## 一、`ai_session_table`

| 列 | 语义 | 置信度 |
| -- | ---- | ------ |
| 40021 | **sessionId**（主键之一）。小Q 主入口固定为 `10000` | 已验证 |
| 40055 | chatType（主键之一），恒 45 | 已验证 |
| 40094 | 会话标题（用户提问的短摘要，如「喵喵喵」「询问模型身份」） | 已验证 |
| 40003 | 会话内消息条数（与消息表行数逐条相等） | 已验证 |
| 40050 | 最后消息时间（unix 秒） | 已验证 |
| 40051 | 预览 BLOB，与 `recent_contact_v3_table.40051` 同构（repeated PreviewElementWire） | 已验证 |
| 41150 | 会话状态 `{41156: 2, 41157: 10 或 20}`，语义未定 | 观测 |

小Q 主入口在 `recent_contact_v3_table` 里也有一行（`40010=45`、`40021='10000'`），
这是会话列表里点进来的那一项；**其余子会话只存在于本表**，只能点进去后再列。

## 二、`ai_assistant_msg_table`

列布局与 `c2c_msg_table` 基本相同（41 列），差异：

| 列 | 差异 |
| -- | ---- |
| 40021 / 40027 | **都等于 sessionId**（不是 uid + sortNo 的组合） |
| 40013 | 1 / 2 = 我发的，0 = AI 发的 |
| 40020 | 我 = 本账号 uid；AI = sessionId 数字（或 10000） |
| 40030 / 40033 | 恒 0 |
| 40012 | 1 = 用户提问，64 = AI 回复（普通 c2c 里 64 是文件消息，这里含义不同） |
| 40725 / 40726 | 本表独有，实测恒 0 |

`group_ai_assistant_msg_table` 是群内 AI 助手用的同构表，多 `40031`（群号）、
少 `40725/40726`；当前样本为空表，未验证。

## 三、AI 回复的元素格式

一条 AI 回复在 40800 里是**多个 MARKDOWN 元素（elementType 14）拼成的流式片段**，
外加推荐消息（43）与操作栏（44）：

```text
40800
├── MARKDOWN × N        每个片段带 48707 嵌套元数据
├── ACTION_BAR (44)     底部操作栏
└── RECOMMENDED_MSG (43) 推荐问题
```

### 48707 流式元数据

与 QQ 闪传共用 tag 48707。AI 助手元数据可通过阶段、卡片表或推送信息识别。小Q 的
欢迎消息和简报可能将 `phase` 留空，这时 48701 仍然存放正文，52962 可带 `push_info`。

| tag | 字段 | 含义 |
| --- | ---- | ---- |
| 52960 | `cardPayload` | 卡片定义表 JSON，键是正文里 qagent:// 占位符的 id |
| 52961 | `phase` | `reasoning_content` / `content` / `agent_end` |
| 52962 | `metaJson` | 小 JSON：`chitChatRoundId` / `auth_denied` / `text_brief` / `push_info` |
| 52963 / 52964 | — | 恒 0 |

**`reasoning_content` 块没有任何正文**：实测 12 个块，48701 / 48705 / 52960 /
52962 全部为空，唯一的实质内容就是类型名本身。它只是个「开始思考」的标记，
渲染时直接丢弃。

正文由 `content` 和空阶段片段的 48701 按顺序拼接。`agent_end` 的 52962
提供整条回复的摘要与权限元数据。

```json
{"isChitChat": false, "text_brief": "完整回复",
 "auth_denied": {"need_auth": true, "code": 102001,
   "items": [{"tool": "get_msg", "scope": "chat_record", "subagent": "subagent_msg",
              "reason": "sub_perm_off", "card_shown": true,
              "card_type": 7, "card_second_type": 2}]}}
```

### 卡片占位符

正文 Markdown 使用 `[标签](qagent://markdown/node?type=…&id=…)` 引用卡片。
标签可以为空，卡片数据在同一条消息的 48707.52960 里，按 `id` 索引。

| type | 结构 | 渲染 |
| ---- | ---- | ---- |
| `qui` | `data` 是一组「段」，每段包含 `full_title`、`full_title_text`、`full_bottom_buttons`、`composite_list_item` 或 `full_feed_card` 等块 | 结构化卡片（好友推荐、授权申请、简报动态） |
| `quser` | `{peerUid, peerUin, peerName, chatType}` | 头像与 Markdown 标签在同一行，标签为空时显示卡片昵称 |
| `qlink` | `{title, url}` | 外链 |

**授权卡片就是 `qui` 卡片**（`card_type: 7`），不是独立 element。它的按钮走
`qqaiapi://internal/exec_command` 协议，静态展示时只读。

好友推荐的 `composite_list_item` 字段：

| 字段 | 含义 |
| ---- | ---- |
| `title` / `iconImageUrl` | 昵称 / 头像 |
| `labelsItems` | JSON 字符串：`[{text: '19岁'}, {text: '跑步'}, …]` |
| `pic1Url`…`pic10Url` | 相册缩略图 |
| `buttonText` / `buttonSchema` | 「去添加」按钮（schema 是 mqqapi:// 深链，非 http） |

## 四、推荐消息（43）与操作栏（44）

两者**复用机器人内联键盘（17）的行/按钮结构**：`48751` 行 → `48753` 按钮
（`48754` id、`48755` 文案）。区别是动作不在 `48761` 的 action 字符串，而在
`48770` → `48780` 的 `actionCode`：

| 元素 | 动作 |
| ---- | ---- |
| 操作栏 44 | 4 = 重新生成、7 = 复制、1 = 喜欢、2 = 不喜欢、6 = 分享 |
| 推荐 43 | `actionCode` 为 0，点击后发送同条按钮的 `label` 文本 |

推荐消息外层还有 `48796`（JSON：`screen_id` / `trigger`），操作栏没有。

## 五、只读边界

AI 助手**不支持发送**：消息只由 QQ 内的 AI 产生，WeQ 侧与公众号 / 服务号
同一套只读语义（`ChatPane` 关输入区）。推荐按钮与操作栏在界面上只读展示，
悬停说明原因；卡片里的 http(s) 外链仍可点击。
