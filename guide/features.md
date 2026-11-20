# 功能参考

<!-- 由 pnpm features:docs 从功能目录和实际导航生成，请勿编辑此页。 -->

目录格式版本 1。支持端列出已登记的界面入口；实际能否打开或执行还取决于账号、对象和运行条件。工具列是功能关联，可用工具以当前助手或 MCP 的注册结果为准。

单项设置见[设置项参考](./settings-reference.md)。设置项的功能 ID 由 `setting:` 加原设置 ID 构成。工具发现见 [MCP 服务器](./mcp-server.md)。

## 应用

| 功能 | 稳定 ID | 支持端 | 入口或条件 | 关联工具 |
| --- | --- | --- | --- | --- |
| 官方公告 | `general.announcements` | 桌面、Web、Remote | 手机更多；全局搜索 | — |
| 主页 | `general.home` | 桌面、Web、Remote | 手机更多；全局搜索 | — |
| 应用 | `general.workspace` | 桌面、Web、Remote | 主导航 | — |
| 更多 | `general.more` | 桌面、Web、Remote | 手机标签栏 | — |

## 消息

| 功能 | 稳定 ID | 支持端 | 入口或条件 | 关联工具 |
| --- | --- | --- | --- | --- |
| 消息 · 浏览会话、定位未读并打开聊天记录。 · [说明](./chat-view.md#feature-messages.inbox) | `messages.inbox` | 桌面、Web、Remote | 主导航；手机标签栏；全局搜索 | `list_conversations`、`get_messages` |
| 合成聊天记录 | `messages.composition` | 桌面、Web、Remote | 手机更多；工作区；全局搜索 | — |
| 拉取漫游消息 | `messages.history-backfill` | 桌面、Web、Remote | 全局搜索 | — |
| 定位原消息 · 用当前数据源的会话与消息身份打开原消息。 | `messages.locate` | — | 需要账号与数据源、消息 | `get_message_details` |
| 预览聊天图片 · 打开消息中的图片，可以使用已经缓存的原图。 | `messages.image.preview` | — | 需要账号与数据源、消息 | — |

## 联系人

| 功能 | 稳定 ID | 支持端 | 入口或条件 | 关联工具 |
| --- | --- | --- | --- | --- |
| 联系人 | `contacts.directory` | 桌面、Web、Remote | 主导航；手机标签栏；全局搜索 | — |
| 好友通知 | `contacts.friend-notices` | — | — | — |
| 我的资料 | `contacts.self-profile` | 桌面、Web、Remote | 全局搜索 | — |
| 编辑我的资料 | `contacts.self-profile.edit` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | — |
| 礼物墙 | `contacts.self-gift-wall` | 桌面、Web、Remote | 全局搜索 | — |

## 群聊

| 功能 | 稳定 ID | 支持端 | 入口或条件 | 关联工具 |
| --- | --- | --- | --- | --- |
| 群通知 | `groups.notices` | — | — | — |
| 群交集 | `groups.intersection` | — | — | — |
| 群相册 · 从指定群查看群相册及其媒体。 · [说明](./album-qzone.md#feature-groups.albums) | `groups.albums` | — | 需要账号与数据源、群 | `get_group_albums` |

## 收藏

| 功能 | 稳定 ID | 支持端 | 入口或条件 | 关联工具 |
| --- | --- | --- | --- | --- |
| 收藏 | `collections.inbox` | 桌面、Web、Remote | 主导航；手机更多；全局搜索 | — |

## QQ 空间

| 功能 | 稳定 ID | 支持端 | 入口或条件 | 关联工具 |
| --- | --- | --- | --- | --- |
| QQ 空间 | `qzone.timeline` | 桌面、Web、Remote | 主导航；手机标签栏；全局搜索 | — |

## QQ 邮箱

| 功能 | 稳定 ID | 支持端 | 入口或条件 | 关联工具 |
| --- | --- | --- | --- | --- |
| QQ 邮箱 | `mail.inbox` | 桌面、Web、Remote | 主导航；手机更多；全局搜索 | — |

## QQ 频道

| 功能 | 稳定 ID | 支持端 | 入口或条件 | 关联工具 |
| --- | --- | --- | --- | --- |
| QQ 频道 | `channels.inbox` | 桌面、Web、Remote | 主导航；全局搜索 | — |
| 频道私聊 | `channels.direct-messages` | 桌面、Web、Remote | 全局搜索 | — |

## 个性装扮

| 功能 | 稳定 ID | 支持端 | 入口或条件 | 关联工具 |
| --- | --- | --- | --- | --- |
| 个性装扮 | `appearance.catalog` | 桌面、Web、Remote | 主导航；手机更多；全局搜索；需启用开发装扮入口 | — |
| 气泡商城 | `appearance.bubble` | 桌面、Web、Remote | 全局搜索；需启用开发装扮入口 | — |
| 字体商城 | `appearance.font` | 桌面、Web、Remote | 全局搜索；需启用开发装扮入口 | — |
| 头像挂件 | `appearance.avatar-widget` | 桌面、Web、Remote | 全局搜索；需启用开发装扮入口 | — |
| 通话背景 | `appearance.call-background` | 桌面、Web、Remote | 全局搜索；需启用开发装扮入口 | — |
| QQ 聊天背景 | `appearance.chat-background` | 桌面、Web、Remote | 全局搜索；需启用开发装扮入口 | — |
| 商城表情 | `appearance.emoji-market` | 桌面、Web、Remote | 全局搜索；需启用开发装扮入口 | — |
| 红包封面 | `appearance.red-packet-cover` | 桌面、Web、Remote | 全局搜索；需启用开发装扮入口 | — |

## 导出与任务

| 功能 | 稳定 ID | 支持端 | 入口或条件 | 关联工具 |
| --- | --- | --- | --- | --- |
| 任务 | `export.tasks` | 桌面、Web、Remote | 手机更多；全局搜索 | — |
| 导出 | `export.workspace` | 桌面、Web、Remote | 手机更多；工作区；全局搜索 | — |
| 导出查看器 | `export.viewer` | 桌面、Web、Remote | 手机更多；工作区；全局搜索 | — |
| 聊天消息导出 · 从要导出的会话和范围开始，生成聊天记录文件。 · [说明](./export.md#feature-export.chat-history) | `export.chat-history` | 桌面、Web、Remote | 全局搜索 | — |
| 定时导出 | `export.schedule` | 桌面、Web、Remote | 全局搜索 | — |
| 频道私聊数据 | `export.channel-direct-messages` | 桌面、Web、Remote | 全局搜索 | — |
| 克隆与助手对话 | `export.generated-chats` | 桌面、Web、Remote | 全局搜索 | — |
| QQ 空间导出 | `export.qzone-posts` | 桌面、Web、Remote | 全局搜索 | — |
| 导出联系人 | `export.contacts` | 桌面、Web、Remote | 全局搜索 | — |
| 导出收藏 | `export.collections` | 桌面、Web、Remote | 全局搜索 | — |
| 邮件导出 | `export.mail` | 桌面、Web、Remote | 全局搜索 | — |
| 导出表情包 | `export.emoji-packs` | 桌面、Web、Remote | 全局搜索 | — |
| 群相册导出 | `export.group-albums` | 桌面、Web、Remote | 全局搜索 | — |
| 群文件导出 | `export.group-files` | 桌面、Web、Remote | 全局搜索 | — |
| 明文数据库 | `export.database` | 桌面、Web、Remote | 全局搜索 | — |
| 克隆体机器人 | `export.clone-bot` | 桌面、Web、Remote | 全局搜索 | — |
| 个人空间相册 | `export.qzone-albums` | 桌面、Web、Remote | 全局搜索 | — |

## 分析

| 功能 | 稳定 ID | 支持端 | 入口或条件 | 关联工具 |
| --- | --- | --- | --- | --- |
| 年度报告 | `analysis.annual-report` | 桌面、Web、Remote | 主导航；手机更多；全局搜索 | — |
| 分析 | `analysis.workspace` | 桌面、Web、Remote | 手机更多；工作区；全局搜索 | — |
| 分析报告 | `analysis.saved-reports` | 桌面、Web、Remote | 手机更多；工作区；全局搜索 | — |

## 助手与克隆

| 功能 | 稳定 ID | 支持端 | 入口或条件 | 关联工具 |
| --- | --- | --- | --- | --- |
| WeQ 助手 | `assistant.chat` | 桌面、Web、Remote | 全局搜索 | — |
| 好友克隆 | `assistant.clones` | 桌面、Web、Remote | 全局搜索 | — |
| 新建好友克隆 | `assistant.clones.create` | 桌面、Web、Remote | 全局搜索 | — |
| 新建克隆体群聊 | `assistant.clone-groups.create` | 桌面、Web、Remote | 全局搜索 | — |

## 设置

| 功能 | 稳定 ID | 支持端 | 入口或条件 | 关联工具 |
| --- | --- | --- | --- | --- |
| 设置 · [说明](./settings.md) | `settings.workspace` | 桌面、Web、Remote | 主导航；手机更多 | — |
| 联系人名片 | `settings.page.contact-card` | 桌面、Web、Remote | 设置 / 基础功能 / 联系人名片 | — |
| 外观与布局 | `settings.page.appearance` | 桌面、Web、Remote | 设置 / 常规 / 外观与布局 | — |
| 通知与提醒 | `settings.page.global` | 桌面、Web、Remote | 设置 / 常规 / 通知与提醒 | — |
| 启动与退出 | `settings.page.startup` | 桌面、Web、Remote | 设置 / 常规 / 启动与退出 | — |
| WeQ 存储管理 | `settings.page.weq-storage` | 桌面、Web | 设置 / 关于 WeQ / WeQ 存储管理 | — |
| 会话列表 | `settings.page.chat-messages` | 桌面、Web、Remote | 设置 / 基础功能 / 会话列表 | — |
| 消息阅读 | `settings.page.message-display` | 桌面、Web、Remote | 设置 / 基础功能 / 消息阅读 | — |
| 互动与防撤回 | `settings.page.chat-interaction` | 桌面、Web、Remote | 设置 / 基础功能 / 互动与防撤回 | — |
| 通话与录音 | `settings.page.call-recording` | 桌面、Web、Remote | 设置 / 基础功能 / 通话与录音 | — |
| QQ 空间 | `settings.page.qzone` | 桌面、Web、Remote | 设置 / 基础功能 / QQ 空间 | — |
| QQ 邮箱 | `settings.page.mail` | 桌面、Web、Remote | 设置 / 基础功能 / QQ 邮箱 | — |
| API 配置 | `settings.page.agentlab` | 桌面、Web、Remote | 设置 / 增强功能 / API 配置 | — |
| API 用量 | `settings.page.model-usage` | 桌面、Web、Remote | 设置 / 增强功能 / API 用量 | — |
| 意图感知 | `settings.page.intent-sense` | 桌面、Web、Remote | 设置 / 增强功能 / 意图感知 | — |
| 互动画像 | `settings.page.interaction-profile` | 桌面、Web、Remote | 设置 / 增强功能 / 互动画像 | — |
| WeQ 助手 | `settings.page.weq-assistant` | 桌面、Web、Remote | 设置 / 增强功能 / WeQ 助手 | — |
| 推荐回复 | `settings.page.reply-suggestions` | 桌面、Web、Remote | 设置 / 增强功能 / 推荐回复 | — |
| 增强包 | `settings.page.enhancement-packs` | 桌面、Web、Remote | 设置 / 增强功能 / 增强包 | — |
| 识别与转写 | `settings.page.recognition` | 桌面、Web、Remote | 设置 / 增强功能 / 识别与转写 | — |
| 在线能力与授权 | `settings.page.account` | 桌面、Web、Remote | 设置 / 常规 / 在线能力与授权 | — |
| 凭据管理 | `settings.page.credentials` | 桌面、Web、Remote | 设置 / 凭据与数据 / 凭据管理 | — |
| WeQ 账号管理 | `settings.page.accounts` | 桌面、Web、Remote | 设置 / 关于 WeQ / WeQ 账号管理 | — |
| QQ 高级工具 | `settings.page.diagnostics` | 桌面、Web、Remote | 设置 / 凭据与数据 / QQ 高级工具 | — |
| QQ 数据库管理 | `settings.page.database-management` | 桌面、Web、Remote | 设置 / 凭据与数据 / QQ 数据库管理 | — |
| QQ 资源管理 | `settings.page.qq-storage` | 桌面、Web、Remote | 设置 / 凭据与数据 / QQ 资源管理 | — |
| 资源加载 | `settings.page.resource-loading` | 桌面、Web、Remote | 设置 / 凭据与数据 / 资源加载 | — |
| Web 与 Remote | `settings.page.remote` | 桌面、Web、Remote | 设置 / WeQ 服务 / Web 与 Remote | — |
| MCP 服务器 | `settings.page.mcp` | 桌面、Web、Remote | 设置 / WeQ 服务 / MCP 服务器 | — |
| OneBot | `settings.page.onebot` | 桌面、Web、Remote | 设置 / WeQ 服务 / OneBot | — |
| SSE 推送 | `settings.page.sse` | 桌面、Web、Remote | 设置 / WeQ 服务 / SSE 推送 | — |
| QQ 公众号推送 | `settings.page.assistant` | 桌面、Web、Remote | 设置 / WeQ 服务 / QQ 公众号推送 | — |
| 隐私 | `settings.page.privacy` | 桌面、Web、Remote | 设置 / 常规 / 隐私 | — |
| 配置备份与恢复 | `settings.page.backup` | 桌面、Web、Remote | 设置 / 关于 WeQ / 配置备份与恢复 | — |
| 版本与更新 | `settings.page.version` | 桌面、Web、Remote | 设置 / 关于 WeQ / 版本与更新 | — |
| 常见问题 | `settings.page.faq` | 桌面、Web、Remote | 设置 / 关于 WeQ / 常见问题 | — |
| 日志与性能 | `settings.page.logs` | 桌面、Web、Remote | 设置 / 关于 WeQ / 日志与性能 | — |
| 反馈 | `settings.page.feedback` | 桌面、Web、Remote | 设置 / 关于 WeQ / 反馈 | — |

## 维护与诊断

| 功能 | 稳定 ID | 支持端 | 入口或条件 | 关联工具 |
| --- | --- | --- | --- | --- |
| 消息性能快照 · 读取消息库排队和耗时统计。 · [说明](./mcp-server.md#feature-maintenance.message-performance) | `maintenance.message-performance` | — | 需要账号与数据源 | `get_message_performance` |
