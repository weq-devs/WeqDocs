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
| 群聊在线声线 · 在群聊 AI 声聊面板浏览当前群的声线、试听并发送。 | `messages.ai-voice-catalog` | — | 需要账号与数据源、群 | — |
| 翻译英文消息 · 在消息菜单请求 QQ 翻译，并在原消息下方查看译文。 | `messages.translate-en-zh` | — | 需要账号与数据源、消息 | — |
| 搜索聊天记录 · 在搜索界面组合关键词、发送者、日期和类型，也可限定在当前会话。 · [说明](./chat-view.md#feature-messages.history.search) | `messages.history.search` | — | 需要账号与数据源 | `search_messages`、`search_in_conversation`、`inspect_timeline`、`get_messages_by_date`、`fetch_history_window` |
| 共享媒体 · 从会话标题栏浏览图片、视频和文件，也可定位原消息。 · [说明](./chat-view.md#feature-messages.history.shared-media) | `messages.history.shared-media` | — | 需要账号与数据源、会话 | `search_local_resources` |
| 连续发言分组 · 主聊天按发送者和时间归组，保留每条消息的引用、定位与多选。 · [说明](./chat-view.md#feature-messages.timeline.grouping) | `messages.timeline.grouping` | — | 需要账号与数据源、会话 | — |
| 聊天内未读分界 · 在时间线标出未读起点，浏览历史时显示剩余未读条数。 · [说明](./chat-view.md#feature-messages.timeline.unread-boundary) | `messages.timeline.unread-boundary` | — | 需要账号与数据源、会话 | — |
| 触屏横滑引用 · 向左滑动消息气泡，松手引用并聚焦输入框。 · [说明](./chat-view.md#feature-messages.reply.touch) | `messages.reply.touch` | — | 需要账号与数据源、消息 | — |
| 预览会话 · 在浮窗查看具体会话的本地记录，保留当前聊天与读状态。 · [说明](./chat-view.md#feature-messages.conversation.preview) | `messages.conversation.preview` | — | 需要账号与数据源、会话 | — |
| 我的设备 · 查看数据线会话，区分本机和其他设备的消息。 · [说明](./chat-view.md#feature-messages.devices) | `messages.devices` | — | 需要账号与数据源 | `list_dataline_conversations`、`get_dataline_messages` |
| 标记已读或未读 · 按会话处理已读状态，手动未读保留提醒。 | `messages.unread` | — | 需要账号与数据源、会话 | — |
| 重要消息 · 在群聊中查看并定位提及、回复、文件等重要消息。 | `messages.important` | — | 需要账号与数据源、群 | `find_people_who_mentioned` |
| 发送消息 · 从输入区发送文本、媒体、文件和适用的卡片。 · [说明](./chat-view.md) | `messages.send` | — | 需要账号与数据源、会话 | `send_text_message`、`send_media_message`、`send_file_message`、`send_rich_message`、`send_tuwen_ark` |
| 语音转文字 · 从语音消息查看已有文字或发起转写。 · [说明](./voice-transcribe.md) | `messages.voice.transcribe` | — | 需要账号与数据源、消息 | `transcribe_voice_message` |
| 分享 QQ 闪传 · 在闪传文件列表获取分享链接。 | `messages.flash.share` | — | 需要账号与数据源、消息 | `get_flash_share_link` |
| 发 QQ 红包 · 填写红包信息，生成二维码后在手机 QQ 支付。 | `messages.red-packet.send` | — | 需要账号与数据源、会话 | `get_red_bag_passwords`、`pack_red_bag` |
| QQ 红包详情与领取 · 从红包消息查看领取记录或领取红包。 | `messages.red-packet.detail` | — | 需要账号与数据源、消息 | `get_red_bag_detail`、`grab_red_bag` |
| 表情回应 · 在适用的群消息上添加或取消表情回应。 · [说明](./chat-view.md) | `messages.reaction` | — | 需要账号与数据源、消息 | `set_message_reaction` |
| 戳一戳 · 从会话中的轻互动入口戳指定联系人。 | `messages.poke` | — | 需要账号与数据源、会话、联系人 | `send_poke` |
| 查看合并转发 · 打开聊天记录卡片并查看其中的消息。 | `messages.forward.inspect` | — | 需要账号与数据源、消息 | `get_forward_messages` |
| 转发消息 · 选择目标后转发，可多选逐条转发或合并转发。 | `messages.forward.send` | — | 需要账号与数据源、消息 | `send_forward_message` |
| 撤回消息 · 在 QQ 在线且有相应权限时撤回适用的消息。 | `messages.recall` | — | 需要账号与数据源、消息 | — |
| 查看已撤回消息 · 查看符合当前防撤回设置且已有记录的撤回消息。 | `messages.recall.history` | — | 需要账号与数据源、会话 | `list_recalled_messages`、`get_anti_recall_status` |
| 修改本地记录 · 从消息菜单打开原始元素编辑器。 | `messages.local-edit` | — | 需要账号与数据源、消息 | — |
| 本地删除消息 · 可恢复地删除本地消息，按实际来源处理数据库或缓存。 | `messages.local-delete` | — | 需要账号与数据源、消息 | — |
| 查看本地删除记录 · 从会话查看旧记录，按来源恢复或定位。 | `messages.local-delete.history` | — | 需要账号与数据源、会话 | `list_deleted_messages` |
| 保存消息媒体 · 按所选端的保存方式另存媒体或文件。 | `messages.media.save` | — | 需要账号与数据源、消息 | — |

## 联系人

| 功能 | 稳定 ID | 支持端 | 入口或条件 | 关联工具 |
| --- | --- | --- | --- | --- |
| 联系人 · 从好友和群目录查找已有联系人。 | `contacts.directory` | 桌面、Web、Remote | 主导航；手机标签栏；全局搜索；需要账号与数据源 | `list_buddies`、`list_groups`、`find_contact` |
| 好友通知 | `contacts.friend-notices` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | — |
| 我的资料 | `contacts.self-profile` | 桌面、Web、Remote | 全局搜索 | `get_self_profile`、`get_self_dress` |
| 编辑我的资料 | `contacts.self-profile.edit` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | — |
| 礼物墙 | `contacts.self-gift-wall` | 桌面、Web、Remote | 全局搜索 | — |
| 搜索联系人与群 · 按备注、昵称或号码查找好友和群聊。 · [说明](./contact-directory.md) | `contacts.directory.search` | — | 需要账号与数据源 | `search_buddies`、`search_groups` |
| 联系人排序与分组 · 分别调整好友和群聊列表的分组及排序。 · [说明](./contact-directory.md#feature-contacts.directory.order) | `contacts.directory.order` | — | 需要账号与数据源 | — |
| 好友亲密度排行 · 查看 QQ 资料中的好友亲密度排行；未知分值排在最后。 | `contacts.intimacy-ranking` | — | 需要账号与数据源 | `list_friends_by_intimacy` |
| 联系人名片与资料 · 先显示本地资料，沿用设置中的名片内容及顺序。 · [说明](./contact-card.md#feature-contacts.profile) | `contacts.profile` | — | 需要账号与数据源、联系人 | `get_user_profile`、`get_peer_stats`、`get_friend_mutual_mark`、`get_friend_dress`、`get_qq_show_url` |
| 共同群 · 查看与指定联系人共同加入的群。 | `contacts.shared-groups` | — | 需要账号与数据源、联系人 | `list_user_groups` |
| 联系人资料历史 · 查看已有观察记录的字段历史。 | `contacts.profile-history` | — | 需要账号与数据源、联系人 | — |
| 签名历史 · 从签名值查看既有历史记录。 | `contacts.signatures` | — | 需要账号与数据源、联系人 | — |
| 教育经历 · 从学校字段查看可取得的完整经历。 | `contacts.education` | — | 需要账号与数据源、联系人 | — |
| 联系人筛选 · 联系人可按好友关系与在线状态筛选，群聊可按入群状态筛选。 · [说明](./contact-directory.md#feature-contacts.directory.filter) | `contacts.directory.filter` | — | 需要账号与数据源 | — |
| 删除好友 · 在会话设置或好友列表右键菜单删除好友；本地聊天历史继续可查。 | `contacts.remove-friend` | — | 需要账号与数据源、联系人 | — |
| 编辑联系人备注 · 通过已有备注行编辑好友备注。 | `contacts.remark` | — | 需要账号与数据源、联系人 | — |
| 好友分组 · 将选定好友移到已有分组。 | `contacts.buddy-group` | — | 需要账号与数据源、联系人 | — |

## 群聊

| 功能 | 稳定 ID | 支持端 | 入口或条件 | 关联工具 |
| --- | --- | --- | --- | --- |
| 群通知 | `groups.notices` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | — |
| 群交集 · [说明](./relation-graph.md#feature-groups.intersection) | `groups.intersection` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | — |
| 群相册 · 从指定群查看群相册及其媒体。 · [说明](./album-qzone.md#feature-groups.albums) | `groups.albums` | — | 需要账号与数据源、群 | `get_group_albums`、`get_group_album_photos` |
| 群名片与群资料 · 查看群基本资料、角色和已有群状态。 · [说明](./contact-card.md#feature-groups.profile) | `groups.profile` | — | 需要账号与数据源、群 | `get_group_info` |
| 群成员 · 从群资料或聊天侧栏搜索并分页浏览成员。 | `groups.members` | — | 需要账号与数据源、群 | `list_group_members` |
| 群公告 · 在当前群的公告入口查看公告。 · [说明](./album-qzone.md#feature-groups.announcements) | `groups.announcements` | — | 需要账号与数据源、群 | `get_group_bulletins` |
| 群待办 · 查看指定群的待办项目。 | `groups.todos` | — | 需要账号与数据源、群 | — |
| 群精华 · 查看已设为精华的群消息。 · [说明](./album-qzone.md#feature-groups.essence) | `groups.essence` | — | 需要账号与数据源、群 | `get_group_essence` |
| 群打卡 · 在群聊侧栏打开原有打卡入口。 | `groups.sign` | — | 需要账号与数据源、群 | `send_group_signup` |
| 群文件 · 在绑定当前群的资源窗口浏览文件夹与文件。 · [说明](./album-qzone.md#feature-groups.files) | `groups.files` | 桌面、Web、Remote | 全局搜索；需要账号与数据源、群 | `list_group_files`、`search_local_resources` |
| 群文件管理 · 选定文件后，按当前账号和群权限使用已有文件操作。 · [说明](./qq-actions.md#feature-groups.files.manage) | `groups.files.manage` | — | 需要账号与数据源、群 | — |
| 接收验证消息 · 群主可在管理员权限里为单个管理员开启或关闭接收验证消息。 | `groups.admin-verification` | — | 需要账号与数据源、群 | — |
| 群管理 · 在当前群的会话设置查看适用的管理操作。 | `groups.management` | — | 需要账号与数据源、群 | — |
| 我的群昵称与头衔 · 在当前群资料或会话设置中查看和编辑可操作的字段。 | `groups.nickname` | — | 需要账号与数据源、群 | — |
| 编辑群备注 · 通过群身份区的备注行提交修改。 | `groups.remark` | — | 需要账号与数据源、群 | — |
| 读取群荣誉榜单 · 查询指定群的荣誉类型和榜单。 | `groups.honor` | — | 需要账号与数据源、群 | `get_group_honor` |

## 收藏

| 功能 | 稳定 ID | 支持端 | 入口或条件 | 关联工具 |
| --- | --- | --- | --- | --- |
| 收藏 · 查看已有本地收藏，页面在有可用票据时补充在线结果。 | `collections.inbox` | 桌面、Web、Remote | 主导航；手机更多；全局搜索；需要账号与数据源 | `list_collections`、`search_local_resources`、`get_local_collection` |
| 搜索收藏 · 在现有收藏页按关键词与材料类型查找条目。 · [说明](./collection.md#feature-collections.search) | `collections.search` | — | 需要账号与数据源 | — |
| 打开收藏内容 · 根据收藏类型打开正文、图片、链接或其他内容。 | `collections.detail` | — | 需要账号与数据源、内容项 | — |

## QQ 空间

| 功能 | 稳定 ID | 支持端 | 入口或条件 | 关联工具 |
| --- | --- | --- | --- | --- |
| QQ 空间 | `qzone.timeline` | 桌面、Web、Remote | 主导航；手机标签栏；全局搜索；需要账号与数据源 | `get_qzone_profile` |
| 写说说 · 打开已有的说说编辑器，发布前可设置可见范围。 | `qzone.post.compose` | — | 需要账号与数据源 | — |
| 说说互动 · 选定说说后查看已有点赞与评论，或使用适用操作。 | `qzone.post.interactions` | — | 需要账号与数据源、内容项 | — |
| 好友动态 · 从已有空间栏目查看好友动态。 | `qzone.friend-feed` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | — |
| 我的空间 · 查看当前 QQ 账号的空间。 | `qzone.self-space` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | — |
| 与我相关 · 浏览与当前账号相关的空间互动。 | `qzone.related` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | — |
| 空友爱看 · 打开已有的公开推荐动态栏目。 | `qzone.public-feed` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | — |
| 我的空间相册 · 打开当前账号的相册浏览窗口。 · [说明](./album-qzone.md#feature-qzone.self-albums) | `qzone.self-albums` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | — |

## QQ 邮箱

| 功能 | 稳定 ID | 支持端 | 入口或条件 | 关联工具 |
| --- | --- | --- | --- | --- |
| QQ 邮箱 | `mail.inbox` | 桌面、Web、Remote | 主导航；手机更多；全局搜索；需要账号与数据源 | `list_mail_folders`、`list_mail_messages` |
| 查看邮件 · 从邮箱列表选择邮件以读正文和附件。 · [说明](./qqmail.md#feature-mail.message.read) | `mail.message.read` | — | 需要账号与数据源、内容项 | `get_mail_message` |
| 写信与草稿 · 在邮箱使用已有编辑器，保留草稿保存与退出确认。 · [说明](./qqmail.md#feature-mail.compose) | `mail.compose` | — | 需要账号与数据源 | — |
| 保存邮件附件 · 在已打开的邮件中按当前端的保存流程另存附件。 · [说明](./qqmail.md#feature-mail.attachment.save) | `mail.attachment.save` | — | 需要账号与数据源、内容项 | `download_mail_attachment` |

## QQ 频道

| 功能 | 稳定 ID | 支持端 | 入口或条件 | 关联工具 |
| --- | --- | --- | --- | --- |
| QQ 频道 | `channels.inbox` | 桌面、Web、Remote | 主导航；全局搜索 | — |
| 频道私聊 · [说明](./album-qzone.md#feature-channels.direct-messages) | `channels.direct-messages` | 桌面、Web、Remote | 全局搜索 | `list_guild_direct_sessions`、`get_guild_direct_messages` |

## 个性装扮

| 功能 | 稳定 ID | 支持端 | 入口或条件 | 关联工具 |
| --- | --- | --- | --- | --- |
| 个性装扮 | `appearance.catalog` | 桌面、Web、Remote | 主导航；手机更多；全局搜索；需启用开发装扮入口 | — |
| 气泡商城 | `appearance.bubble` | 桌面、Web、Remote | 全局搜索；需启用开发装扮入口 | `get_dress_mall` |
| 字体商城 | `appearance.font` | 桌面、Web、Remote | 全局搜索；需启用开发装扮入口 | `get_dress_mall` |
| 头像挂件 | `appearance.avatar-widget` | 桌面、Web、Remote | 全局搜索；需启用开发装扮入口 | `get_dress_mall` |
| 通话背景 | `appearance.call-background` | 桌面、Web、Remote | 全局搜索；需启用开发装扮入口 | — |
| QQ 聊天背景 | `appearance.chat-background` | 桌面、Web、Remote | 全局搜索；需启用开发装扮入口 | — |
| 商城表情 | `appearance.emoji-market` | 桌面、Web、Remote | 全局搜索；需启用开发装扮入口 | `search_market_emoji`、`get_market_pack_detail` |
| 红包封面 | `appearance.red-packet-cover` | 桌面、Web、Remote | 全局搜索；需启用开发装扮入口 | — |
| 聊天收藏表情 · 从聊天的表情面板将收藏表情加入草稿。 · [说明](./emoji-resources.md#feature-appearance.emoji.favorites) | `appearance.emoji.favorites` | — | 需要账号与数据源、会话 | — |

## 导出与任务

| 功能 | 稳定 ID | 支持端 | 入口或条件 | 关联工具 |
| --- | --- | --- | --- | --- |
| 任务 | `export.tasks` | 桌面、Web、Remote | 手机更多；全局搜索；需要账号与数据源 | — |
| 导出 | `export.workspace` | 桌面、Web、Remote | 手机更多；工作区；全局搜索；需要账号与数据源 | — |
| 导出查看器 | `export.viewer` | 桌面、Web、Remote | 手机更多；工作区；全局搜索 | — |
| 聊天消息导出 · 从要导出的会话和范围开始，生成聊天记录文件。 · [说明](./export.md#feature-export.chat-history) | `export.chat-history` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | `export_conversation` |
| 定时导出 | `export.schedule` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | — |
| 频道私聊数据 | `export.channel-direct-messages` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | — |
| 克隆与助手对话 | `export.generated-chats` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | — |
| QQ 空间导出 | `export.qzone-posts` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | — |
| 导出联系人 | `export.contacts` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | — |
| 导出收藏 | `export.collections` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | — |
| 邮件导出 | `export.mail` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | — |
| 导出表情包 | `export.emoji-packs` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | — |
| 群相册导出 | `export.group-albums` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | — |
| 群文件导出 | `export.group-files` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | — |
| 明文数据库 | `export.database` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | `decrypt_database` |
| 克隆体机器人 | `export.clone-bot` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | — |
| 个人空间相册 | `export.qzone-albums` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | — |
| 当前任务 · 查看现有任务的状态、步骤和日志。 · [说明](./export.md#feature-export.tasks.current) | `export.tasks.current` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | — |
| 定时任务 · 查看和管理已建立的定时导出计划。 · [说明](./export.md#feature-export.tasks.schedules) | `export.tasks.schedules` | 桌面、Web、Remote | 全局搜索；需要账号与数据源 | — |
| 精确选择导出 · 沿用选定的对象身份与范围提交导出。 · [说明](./saved-reports-and-content-export.md#feature-export.selection.exact) | `export.selection.exact` | — | 需要账号与数据源、内容项 | — |
| 保存导出结果 · 使用任务中已生成的产物，沿用各端保存方式。 | `export.result.save` | — | 需要账号与数据源、内容项 | — |
| 暂停或继续任务 · 对已选任务使用本身支持的控制操作。 | `export.task.control` | — | 需要账号与数据源、内容项 | — |

## 分析

| 功能 | 稳定 ID | 支持端 | 入口或条件 | 关联工具 |
| --- | --- | --- | --- | --- |
| 年度报告 | `analysis.annual-report` | 桌面、Web、Remote | 主导航；手机更多；全局搜索 | — |
| 分析 | `analysis.workspace` | 桌面、Web、Remote | 手机更多；工作区；全局搜索；需要账号与数据源 | — |
| 分析报告 · [说明](./saved-reports-and-content-export.md#feature-analysis.saved-reports) | `analysis.saved-reports` | 桌面、Web、Remote | 手机更多；工作区；全局搜索；需要账号与数据源 | — |
| 群聊分析 · 统计选定群的消息活动，沿用当前数据源与范围。 · [说明](./analytics.md#feature-analysis.group) | `analysis.group` | — | 需要账号与数据源、群 | `get_group_activity` |
| 私聊分析 · 对选定好友会话生成统计与报告。 · [说明](./analytics.md#feature-analysis.buddy) | `analysis.buddy` | — | 需要账号与数据源、联系人 | `get_buddy_analytics` |
| 群成员分析 · 按当前群、成员及时间范围分析消息。 | `analysis.group-member` | — | 需要账号与数据源、群、联系人 | — |
| 好友与群聊活跃排行 · 按时间范围比较私聊消息量与群活跃度。 | `analysis.activity-ranking` | — | 需要账号与数据源 | `rank_friends_by_activity`、`rank_my_groups_by_activity` |
| 按日与时段统计消息 · 通过实际时间范围查看分布或比较两段统计。 | `analysis.activity-period` | — | 需要账号与数据源 | `get_daily_digest`、`get_period_overview`、`compare_periods` |
| 保存分析长图 · 由支持图片导出桥接的宿主捕获报告统计快照。 · [说明](./analytics.md#feature-analysis.report-image.save) | `analysis.report-image.save` | — | 需要账号与数据源、内容项 | — |

## 助手与克隆

| 功能 | 稳定 ID | 支持端 | 入口或条件 | 关联工具 |
| --- | --- | --- | --- | --- |
| WeQ 助手 | `assistant.chat` | 桌面、Web、Remote | 全局搜索 | — |
| 好友克隆 | `assistant.clones` | 桌面、Web、Remote | 全局搜索 | — |
| 新建好友克隆 | `assistant.clones.create` | 桌面、Web、Remote | 全局搜索 | — |
| 新建克隆体群聊 | `assistant.clone-groups.create` | 桌面、Web、Remote | 全局搜索 | — |
| 停止或恢复助手任务 · 在当前任务的原操作区管理正在生成或可恢复的结果。 | `assistant.task.control` | — | 需要账号与数据源 | — |
| 分析聊天图片 · 按消息身份读取图片并进行识别。 | `assistant.message-image` | — | 需要账号与数据源、消息 | `analyze_chat_image` |
| 查看助手附件原图 · 向助手提供图片后，可按附件查看具体细节。 | `assistant.attachment-image` | — | 需要账号与数据源、内容项 | `analyze_attached_image` |
| 生成报告文件 · 助手生成文档后通过附件卡片提供查看与另存。 | `assistant.report-artifact` | — | 需要账号与数据源 | `write_report` |
| 调查计划与工作笔记 · 助手工具更新调查过程中使用的工作区信息。 | `assistant.investigation` | — | 需要账号与数据源 | `update_investigation_plan`、`update_work_notes` |

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
| 识别与转写 · 配置图中文字识别、语音转写及相关模型。 · [说明](./settings.md) · [说明 2](./voice-transcribe.md) | `settings.page.recognition` | 桌面、Web、Remote | 设置 / 增强功能 / 识别与转写 | `get_ocr_status`、`ocr_image_text` |
| 在线能力与授权 | `settings.page.account` | 桌面、Web、Remote | 设置 / 常规 / 在线能力与授权 | — |
| 凭据管理 | `settings.page.credentials` | 桌面、Web、Remote | 设置 / 凭据与数据 / 凭据管理 | — |
| WeQ 账号管理 · 查看和切换已配置的 QQ 账号与数据源。 · [说明](./settings.md) | `settings.page.accounts` | 桌面、Web、Remote | 设置 / 关于 WeQ / WeQ 账号管理 | `list_accounts`、`switch_account` |
| QQ 高级工具 | `settings.page.diagnostics` | 桌面、Web、Remote | 设置 / 凭据与数据 / QQ 高级工具 | — |
| QQ 数据库管理 · 设置 QQ 数据库的监听与读取，查看体检和修复入口，浏览或导出数据库。 · [说明](./settings.md) · [说明 2](./database-view.md) | `settings.page.database-management` | 桌面、Web、Remote | 设置 / 凭据与数据 / QQ 数据库管理 | — |
| QQ 资源管理 | `settings.page.qq-storage` | 桌面、Web、Remote | 设置 / 凭据与数据 / QQ 资源管理 | — |
| 资源加载 | `settings.page.resource-loading` | 桌面、Web、Remote | 设置 / 凭据与数据 / 资源加载 | — |
| Web 与 Remote · 查看本机浏览器访问地址，配对手机和管理已配对设备。 · [说明](./remote-web.md) | `settings.page.remote` | 桌面、Web、Remote | 设置 / WeQ 服务 / Web 与 Remote | — |
| MCP 服务器 · 启停 MCP 服务器，查看连接信息或安装到本机 AI 客户端。 · [说明](./mcp-server.md) | `settings.page.mcp` | 桌面、Web、Remote | 设置 / WeQ 服务 / MCP 服务器 | `list_features`、`get_feature`、`list_settings` |
| OneBot · 管理当前 QQ 账号的 OneBot 运行状态和网络连接，可接入 cc-connect。 · [说明](./onebot-cc-connect.md) | `settings.page.onebot` | 桌面、Web、Remote | 设置 / WeQ 服务 / OneBot | — |
| SSE 推送 · 管理消息事件推送目标，并设置推送防抖和大量消息阈值。 · [说明](./settings.md) | `settings.page.sse` | 桌面、Web、Remote | 设置 / WeQ 服务 / SSE 推送 | — |
| QQ 公众号推送 · 配置 QQ 公众号推送及资源服务，WeQ 运行期间提供资源。 · [说明](./settings.md) | `settings.page.assistant` | 桌面、Web、Remote | 设置 / WeQ 服务 / QQ 公众号推送 | — |
| 隐私 | `settings.page.privacy` | 桌面、Web、Remote | 设置 / 常规 / 隐私 | — |
| 配置备份与恢复 · 导出当前配置备份，或从已有备份恢复所选内容。 · [说明](./settings.md) | `settings.page.backup` | 桌面、Web、Remote | 设置 / 关于 WeQ / 配置备份与恢复 | — |
| 版本与更新 · 查看版本和内置组件，管理桌面端的更新检查和安装。 · [说明](./settings.md) | `settings.page.version` | 桌面、Web、Remote | 设置 / 关于 WeQ / 版本与更新 | — |
| 常见问题 | `settings.page.faq` | 桌面、Web、Remote | 设置 / 关于 WeQ / 常见问题 | — |
| 日志与性能 · 查看应用日志和性能记录，设置历史保留方式。 · [说明](./performance-monitor.md) | `settings.page.logs` | 桌面、Web、Remote | 设置 / 关于 WeQ / 日志与性能 | — |
| 反馈 | `settings.page.feedback` | 桌面、Web、Remote | 设置 / 关于 WeQ / 反馈 | — |

## 维护与诊断

| 功能 | 稳定 ID | 支持端 | 入口或条件 | 关联工具 |
| --- | --- | --- | --- | --- |
| 消息性能快照 · 读取消息库排队和耗时统计。 · [说明](./mcp-server.md#feature-maintenance.message-performance) | `maintenance.message-performance` | — | 需要账号与数据源 | `get_message_performance` |
