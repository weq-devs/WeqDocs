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
| 会话日历 · 按当前会话视图统计本地消息，选择日期可定位原记录。 · [说明](./chat-view.md#feature-messages.calendar) | `messages.calendar` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | — |
| 全部会话 · 平铺各来源的会话，范围跟随隐藏和删除会话设置。 | `messages.directory.all` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | — |
| 群助手 · 查看 QQ 已归入群助手的群。 | `messages.directory.group-assistant` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | — |
| 公众号 · 打开公众号的具体会话并阅读本地消息。 | `messages.directory.official` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | — |
| 服务号 · 打开服务号的具体会话并阅读本地消息。 | `messages.directory.service` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | — |
| 已隐藏会话 · 在专用视图中查看隐藏的会话。 | `messages.directory.hidden` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | — |
| 已删除会话 · 在专用视图中查看仍可读取的已删除会话。 | `messages.directory.deleted` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | — |
| 搜索聊天记录 · 按关键词检索消息内容，也可限定在指定会话。 · [说明](./chat-view.md#feature-messages.history.search) | `messages.history.search` | — | 需要账号与数据源 | `search_messages`、`search_in_conversation` |
| 预览会话 · 在浮窗查看具体会话的本地记录，保留当前聊天与读状态。 · [说明](./chat-view.md#feature-messages.conversation.preview) | `messages.conversation.preview` | — | 需要账号与数据源、会话 | — |
| 我的设备 · 查看数据线会话，区分本机和其他设备的消息。 · [说明](./chat-view.md#feature-messages.devices) | `messages.devices` | — | 需要账号与数据源 | `list_dataline_conversations`、`get_dataline_messages` |
| 标记已读或未读 · 按会话处理已读状态，手动未读保留提醒。 | `messages.unread` | — | 需要账号与数据源、会话 | — |
| 重要消息 · 在群聊中查看并定位提及、回复、文件等重要消息。 | `messages.important` | — | 需要账号与数据源、群 | — |
| 查看合并转发 · 打开聊天记录卡片并查看其中的消息。 | `messages.forward.inspect` | — | 需要账号与数据源、消息 | `get_forward_messages` |
| 转发消息 · 选择目标后转发，可多选逐条转发或合并转发。 | `messages.forward.send` | — | 需要账号与数据源、消息 | — |
| 撤回消息 · 在 QQ 在线且有相应权限时撤回适用的消息。 | `messages.recall` | — | 需要账号与数据源、消息 | — |
| 查看已撤回消息 · 查看符合当前防撤回设置且已有记录的撤回消息。 | `messages.recall.history` | — | 需要账号与数据源、会话 | `list_recalled_messages`、`get_anti_recall_status` |
| 修改本地记录 · 从消息菜单打开原始元素编辑器。 | `messages.local-edit` | — | 需要账号与数据源、消息 | — |
| 本地删除消息 · 可恢复地删除本地消息，按实际来源处理数据库或缓存。 | `messages.local-delete` | — | 需要账号与数据源、消息 | — |
| 查看本地删除记录 · 从会话查看旧记录，按来源恢复或定位。 | `messages.local-delete.history` | — | 需要账号与数据源、会话 | `list_deleted_messages` |
| 保存消息媒体 · 按所选端的保存方式另存媒体或文件。 | `messages.media.save` | — | 需要账号与数据源、消息 | — |

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
| 频道私聊 · [说明](./album-qzone.md#feature-channels.direct-messages) | `channels.direct-messages` | 桌面、Web、Remote | 全局搜索 | `list_guild_direct_sessions`、`get_guild_direct_messages` |

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
