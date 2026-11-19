# 设置项参考

<!-- 由 pnpm settings:docs 从设置注册表生成，请勿手工修改条目。 -->

本清单与设置页面、全局搜索、恢复默认和 MCP 的 `list_settings` 共用设置注册表。名称与位置改变时，旧搜索别名和稳定 ID 继续用于定位。

「页面恢复字段」列出该入口登记的恢复项；同一入口可以包含多个字段。空白表示该入口本身没有登记页面恢复操作，不表示全局恢复或其他业务流程会修改它。恢复时的实际范围与当前值以确认弹窗为准。

使用方法见[设置总览](./settings.md)，维护方式见[设置注册表](../develop/settings-registry.md)。

## 常规

### 启动与退出

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| 自启时显示窗口 | `startup-show-window` | 启动显示窗口、隐藏启动 | 自启时显示窗口（全局） |
| 关闭窗口时 | `window-close-behavior` | 关闭按钮行为、关闭按钮、最小化到托盘、退出时停止、关闭窗口、退出应用 | 关闭窗口时（全局） |
| 主页 | `home-settings` | 主页显示 | 主页显示与屏蔽词（全局） |
| 个性标签 | `home-tags` | 主页标签 |  |
| 优先展示 QQ 秀 | `home-prefer-qqshow` |  |  |
| 问候语 | `home-greeting` | 主页问候 |  |
| 一言 | `home-hitokoto` | hitokoto |  |
| 一言屏蔽词 | `home-blocked-words` | 屏蔽词、过滤句子 |  |
| 启动时进入 | `startup-page` | 上次退出时所在页面、启动后打开、默认页面、启动页面 | 启动时进入（全局） |
| 开机自动启动 | `startup-enabled` | 开机自动启动 WeQ、自启动 | 开机自动启动（全局） |

### 在线能力与授权

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| QQ 在线能力 | `full-features` | 功能差异、在线能力受限、在线能力、漫游消息、发送消息 |  |
| 启用方式 | `full-feature-routes` | 原版 QQ、读取路线、QQ 在线能力启用 |  |
| 自动启用 QQ 在线能力 | `auto-full-mode` | 自动读取 QQ 内存 | 自动启用 QQ 在线能力（全局） |
| 在线能力受限时在窗口右上角显示 | `restricted-mode-indicator` | 在线能力受限标记、标题栏在线能力受限、受限状态显示 | 在线能力受限时在窗口右上角显示（全局） |
| 向 QQ 服务器上报已读位置 | `read-sync` | 已读同步、已读上报、同步 QQ 未读 | 向 QQ 服务器上报已读位置（全局） |
| QQ 调试副本 | `qq-debug-copy` | SIP、不关闭 SIP、副本更新、调试读取 |  |
| 长期授权 | `long-term-authorization` | 权限助手、本机权限助手、免重复提权、管理员授权 |  |

### 外观与布局

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| 基础模式 | `theme-mode` | 浅色模式、深色模式、暗色模式、跟随系统 | 基础模式（全局） |
| 主题色 | `theme-accent` | 强调色、主色、颜色 | 主题色（全局） |
| 界面背景 | `theme-background` | 聊天背景、壁纸 | 界面背景（全局） |
| 组件风格 | `component-style` | 皮肤、默认风格、经典、简约、立体、复古、QQ NT、QQNT | 组件风格（全局） |
| 界面密度 | `interface-density` | 舒适、紧凑 | 界面密度（全局） |
| 使用仿 Windows 窗口按钮 | `windows-style-controls` | 窗口按钮、红绿灯、原生窗口、macOS、Linux | 仿 Windows 窗口按钮（全局） |

### 通知与提醒

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| 事件通知 | `notification-events` |  | 事件通知（全局） |
| 普通群聊消息 | `notification-groupMessage` |  |  |
| 收到助手或克隆体的新回复 | `notification-assistantReply` |  |  |
| 特别关心 | `notification-specialCare` |  |  |
| @自己 | `notification-mentionMe` |  |  |
| @全体成员 | `notification-mentionAll` |  |  |
| 引用／回复我 | `notification-replyMe` |  |  |
| 红包消息 | `notification-redPacket` |  |  |
| 关键词命中 | `notification-keyword` |  |  |
| 联系人与群通知 | `notification-contact` |  |  |
| 任务或操作进行中 | `notification-progress` |  |  |
| 后台任务完成 | `notification-taskComplete` |  |  |
| 后台任务失败或部分失败 | `notification-taskFailure` |  |  |
| 发现新版本或增强包更新 | `notification-update` |  |  |
| 重要官方公告 | `notification-officialAnnouncement` |  |  |
| 连接中断或恢复 | `notification-connection` |  |  |
| 有请求等待处理 | `notification-request` |  |  |
| 省流量模式自动开启或关闭 | `notification-dataSaver` |  |  |
| 操作成功与普通提示 | `notification-success` |  |  |
| 操作失败或结果未确认 | `notification-failure` |  |  |
| 好友与群通知未读角标 | `contact-request-badge` | 好友与群通知 | 好友与群通知未读角标（全局） |
| 进行中任务 | `task-running-badge` |  | 进行中任务（全局） |
| 已完成任务 | `task-result-badge` |  | 已完成任务（全局） |
| 增强包更新 | `update-badge` |  | 增强包更新（全局） |
| 官方公告 | `official-announcement-badge` |  | 官方公告（全局） |
| 公众号 | `official-unread-badge` |  | 公众号（全局）；公众号（全局） |
| 服务号 | `service-unread-badge` |  | 服务号（全局）；服务号（全局） |
| 频道私聊 | `guild-unread-badge` |  | 频道私聊（全局）；频道私聊（全局） |
| 已隐藏会话 | `hidden-unread-badge` |  | 已隐藏会话（全局）；已隐藏会话（全局） |
| 已删除会话 | `deleted-unread-badge` |  | 已删除会话（全局）；已删除会话（全局） |
| 克隆会话 | `clone-unread-badge` |  | 克隆会话（全局）；克隆会话（全局） |
| WeQ 助手会话 | `assistant-aggregate-badge` |  | WeQ 助手会话（全局）；WeQ 助手会话（全局） |
| 成功通知停留时长 | `toast-success` | 通知时间 | 成功通知停留时长（全局） |
| 失败通知停留时长 | `toast-failure` | 通知时间 | 失败通知停留时长（全局） |
| 消息通知停留时长 | `toast-message` | 通知时间、重要消息横幅、消息横幅常驻 | 消息通知停留时长（全局） |
| 邮箱导航未读角标 | `mail-unread-badge` | 显示未读邮件数、在邮箱图标上显示红点、邮箱红点 | 邮箱导航未读角标（全局）；邮箱导航未读角标（全局） |
| 新邮件 | `mail-banner` | 新邮件提醒、收到新邮件时横幅提醒、邮件通知设置 |  |
| 普通私聊消息 | `message-system-notifications` | 新消息系统通知、消息弹窗提醒 |  |
| 应用图标未读角标 | `application-unread-badge` | Dock 任务栏 Badge | 应用图标未读角标（全局） |
| 消息导航未读角标 | `message-unread-badge` | 消息图标红点、显示消息汇总红点、未读红点 | 消息导航未读角标（全局） |
| 好友与群聊未读消息数 | `contact-unread-count` | 好友与群聊、联系人列表未读消息数、在联系人界面显示未读消息数 | 好友与群聊未读消息数（全局） |
| 群助手 | `group-assistant-count` | 群助手未读汇总角标、群助手显示总消息数 | 群助手（全局）；群助手（全局） |
| 功能受限或运行异常 | `restricted-mode-banner` | 在线能力受限时通知、在线能力受限时横幅提醒、受限横幅 |  |
| 数据库异常提醒 | `damage-reminder` | 数据库异常时弹窗提醒、损坏提醒、notification-databaseDamage |  |
| 未读角标 | `notification-badges` | 红点与未读标记 |  |
| 撤回提醒 | `recall-notifications` | 撤回时通知我、通知会话、撤回提醒设置 | 撤回通知会话选择（当前账号） |
| 浏览器通知授权 | `web-notifications` | 网页通知、撤回、群关键词与邮件提醒 | 网页通知（全局） |

### 隐私

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| WeQ 验证器 | `totp-authenticator` | 绑定验证器、TOTP |  |
| 启用应用锁 | `app-lock` | 应用锁、锁屏、隐私锁 | 启用应用锁（全局） |
| 解锁方式 | `unlock-method` | Touch ID、Windows Hello、验证器 | 解锁方式（全局） |
| 空闲自动锁定 | `auto-lock` | 无操作自动上锁 | 自动锁定分钟（全局） |
| 隐私模式 | `privacy-mode` | 隐藏个人信息 | 隐私模式（全局） |
| 在菜单中截图瞬间临时启用隐私模式 | `privacy-menu-capture` | 截图隐私 | 截图临时隐私模式（全局） |

## 基础功能

### 会话列表

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| 显示会话预览 | `show-conversation-preview` | 消息摘要、草稿预览 | 显示会话预览（全局） |
| 重要消息标记 | `important-message-markers` | @我、@全体成员、回复我、特别关心、群提醒词、新文件、红包、群公告 | 重要消息标记（全局） |
| 包含已隐藏会话 | `all-conversations-include-hidden` | 全部会话隐藏范围 | 包含已隐藏会话（全局） |
| 包含已删除会话 | `all-conversations-include-deleted` | 全部会话删除范围 | 包含已删除会话（全局） |
| 鼠标停留时保持会话位置 | `keep-conversation-position-on-hover` | 会话排序、悬停排序 | 鼠标停留时保持会话位置（全局） |
| 切换视图时关闭不在新视图中的会话 | `close-conversation-outside-view` | 切换会话视图、保留当前会话 | 切换视图时关闭不在新视图中的会话（全局） |

### 消息阅读

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| 图片预览内存预算 | `chat-image-cache` | 图片与表情、内存缓存、图片缓存、表情缓存 | 图片预览内存预算（全局） |
| 从第一条新消息开始阅读 | `read-first-unread` | 第一条未读 | 从首条未读开始（全局） |
| 查看时自动拉取缺失的消息 | `auto-fetch-missing-messages` | 自动补全消息、漫游消息 | 查看时自动拉取缺失的消息（全局） |
| 定位到缺失消息时自动拉取上下文 | `auto-fetch-missing-context` |  | 定位到缺失消息时自动拉取上下文（全局） |
| 自动拉取上下文条数 | `missing-message-context-count` |  | 自动拉取上下文条数（全局） |
| 自动跟随最新消息 | `auto-follow-latest-messages` |  | 自动跟随新消息（全局） |
| 发送消息后定位到最新消息 | `jump-latest-after-send` | 发送后跳转 | 发送后跳到最新（全局） |
| 向下滚动时显示定位到底部按钮 | `scroll-to-bottom-button` | 快速到底部 | 回到底部按钮（全局） |
| 语音消息自动转文字 | `auto-transcribe-voice` | 语音自动识别 | 语音自动转文字（全局） |
| 内容显示 | `custom-message-display` | 自定义消息显示 |  |
| 显示消息序号（seq） | `message-seq` | 消息序号 | 消息序号（全局） |
| 显示发送日期 | `message-date` | 消息日期 yyyy-mm-dd | 消息日期（全局） |
| 显示发送时间 | `message-time` | 显示发送时间（精确到秒）、消息时间 精确到秒 | 消息时间（全局） |
| 昵称或备注 | `group-message-name` | 显示群消息发送者名称、显示群成员昵称、群消息发送者 | 显示群消息发送者名称（全局） |
| 显示群成员等级 | `group-message-level` |  | 显示群成员等级（全局） |
| 显示群成员头衔与身份 | `group-message-title` | 群主、管理员 | 显示群成员头衔与身份（全局） |
| 聊天头像挂件 | `avatar-pendant` |  | 头像挂件（全局） |
| 优先使用 QQ 秀替换头像 | `chat-qqshow` | 聊天 QQ 秀替换头像、QQ 秀 | QQ 秀头像（全局） |
| 消息气泡 | `message-bubble` | 消息装扮（气泡/字体/挂件）、消息装扮、message-decoration、气泡 | 消息装饰（全局）；消息气泡（全局） |
| 消息字体 | `message-font` | 聊天字体、字体 | 消息字体（全局） |
| 文本消息自动渲染为 Markdown | `text-markdown` | 纯文本消息自动渲染为 Markdown、纯文本消息渲染 Markdown、富文本 | Markdown 文本（全局） |
| 链接预览卡片 | `link-preview` | 网页预览 | 链接预览（全局） |
| 自动联网补全链接预览 | `link-preview-auto-fetch` |  |  |
| 无封面时网页截图 | `link-screenshot` | 链接截图 |  |

### 互动与防撤回

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| 使用 QQ 账号设置的个性字体发送消息 | `send-with-qq-font` | 发送字体 | QQ 个性字体发送（全局） |
| 群聊引用时自动 @ 对方 | `quote-auto-mention` | 引用自动提及 | 群聊引用时自动 @ 对方（全局） |
| 斜杠表情快捷输入 | `slash-emoji-input` | 系统表情快捷搜索 | 斜杠表情快捷输入（全局） |
| 无需回车即自动替换 | `slash-emoji-auto-replace` | 表情自动替换 | 无需回车即自动替换（全局） |
| 按退格键移除引用 | `quote-backspace-remove` | 退格取消引用、Backspace | 按退格键移除引用（全局） |
| 隐藏正在输入状态 | `typing-status` | 向对方展示输入状态、默认发送正在输入状态、发送正在输入状态、输入状态、正在输入、打字状态 | 隐藏正在输入状态（全局）；隐藏正在输入状态的会话选择（当前账号） |
| 防撤回 | `anti-recall` | anti-recall | 防撤回启用范围（全局）；防撤回会话选择（当前账号） |

### 联系人名片

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| 名片显示与顺序 | `contact-card-order` |  | 名片显示与顺序（全局） |
| 全部字段 | `contact-card-all` |  |  |
| 群内资料 | `contact-card-group-fields` |  |  |
| 当前 QQ 秀 | `contact-card-qqShow` |  |  |
| 头像挂件 | `contact-card-pendant` |  |  |
| 当前签名 | `contact-card-signature` |  |  |
| 签名更新时间 | `contact-card-signatureUpdated` |  |  |
| 性别 | `contact-card-gender` |  |  |
| 年龄 | `contact-card-age` |  |  |
| 生日 | `contact-card-birthday` |  |  |
| 星座 | `contact-card-constellation` |  |  |
| 生肖 | `contact-card-zodiac` |  |  |
| 血型 | `contact-card-bloodType` |  |  |
| 所在地 | `contact-card-region` |  |  |
| 职业 | `contact-card-occupation` |  |  |
| 学校 | `contact-card-school` |  |  |
| 标签 | `contact-card-labels` |  |  |
| 精选图片 | `contact-card-photos` |  |  |
| 在线状态 | `contact-card-status` |  |  |
| 共同关系 | `contact-card-common` |  |  |
| 好友分组 | `contact-card-category` |  |  |
| QQ 亲密度 | `contact-card-intimacy` |  |  |
| 关系标签 | `contact-card-relations` |  |  |
| 互动标识摘要 | `contact-card-marks` |  |  |
| 已开通特权 | `contact-card-privileges` |  |  |
| QQ 等级 | `contact-card-level` |  |  |
| 累计获赞 | `contact-card-likes` |  |  |
| QQ 能量值 | `contact-card-energy` |  |  |
| QID | `contact-card-qid` |  |  |
| UID | `contact-card-uid` |  |  |
| 个人说明 | `contact-card-description` |  |  |
| 公司 | `contact-card-company` |  |  |
| 邮箱 | `contact-card-email` |  |  |
| 好友添加信息 | `contact-card-friendClue` |  |  |
| 机器人简介 | `contact-card-botDescription` |  |  |
| 机器人功能 | `contact-card-botFeatures` |  |  |
| 群等级 | `contact-card-groupLevel` |  |  |
| 入群时间 | `contact-card-joinedAt` |  |  |
| 最后群发言时间 | `contact-card-lastSpeakAt` |  |  |

### 通话与录音

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| 录音来源 | `call-mode` | 录制内容、录音模式、双方混合、仅本端、仅对方 | 录制内容（全局） |
| 同时录电脑声音 | `call-system-audio` | 系统音频 | 电脑声音（全局） |
| 保存位置 | `call-directory` | 录音目录 | 通话录音目录（全局，目录需选择） |
| 记录 UDP 流量 | `call-udp-trace` | udp 抓包、pcapng、通话抓包 | 记录 UDP 流量（全局） |
| 禁用 P2P 直连 | `call-p2p` | 连接方式、通话中转 | 禁用 P2P（全局） |

### QQ 空间

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| 在线翻页限速 | `qzone-pagination` | 空间翻页频率 | 在线翻页限速（全局） |
| 空友爱看自动刷新冷却期 | `qzone-public-refresh` |  | 自动刷新冷却期（全局） |
| 点击他人昵称或头像时 | `qzone-person-click` | 人物入口 | 人物入口（全局） |
| 转发时引用上一人文案 | `qzone-forward` | 转发、引用转发文案 | 引用上一人文案（全局） |
| 不让 ta 看我的空间 | `qzone-blocked` | 空间黑名单 |  |
| 不看 ta 的空间 | `qzone-hidden` | 屏蔽好友空间 |  |

### QQ 邮箱

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| 邮件查询间隔 | `mail-poll-interval` | 邮件查询间隔（分钟）、邮箱同步频率、邮件轮询、自动收信 | 邮箱查询间隔（全局） |

## 增强功能

### 增强包

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| 增强包自动更新 | `enhancement-updates` |  |  |
| 增强包管理 | `enhancement-management` |  |  |
| 自动检查增强包更新 | `enhancement-auto-check` | 增强包更新检查 | 自动检查增强包更新（全局） |
| 自动安装增强包更新 | `enhancement-auto-install` | 增强包自动安装 | 自动安装增强包更新（全局） |
| 本地文字识别 | `enhancement-text` | 识别模型、筛图模型、图片识别模型、OCR 模型 |  |
| 本地语音转写 | `enhancement-voice` | 本地语音模型、SenseVoice、ASR、语音转文字、转写 |  |
| 本地意图与画像 | `enhancement-intent` | Laya 模型下载、画像模型下载 |  |
| 装扮离线索引 | `enhancement-dress` | 气泡索引、字体索引、挂件索引 |  |

### 识别与转写

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| QQ 在线 OCR | `ocr-online` | 文字识别 |  |
| 识别并发 | `ocr-online-concurrency` |  | 识别并发（全局） |
| 转录并发 | `voice-online-concurrency` |  | 转录并发（全局） |
| OCR 前先筛图 | `ocr-prefilter-enabled` | 筛图开关、自动 OCR 筛图 | OCR 前先筛图（全局） |

### API 配置

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| 已保存的服务商 | `llm-providers` | 已保存的 provider、API Key、Base URL、服务商 |  |
| 默认聊天模型 | `llm-default-model` | LLM 默认聊天模型、默认模型、LLM 默认模型 | 默认聊天模型（全局） |
| 默认上下文窗口 | `llm-default-context-window` | 上下文预算、上下文长度 | 默认上下文窗口（全局） |
| 默认最大输出 | `llm-default-max-output` | 输出上限、最大输出 Token | 默认最大输出（全局） |
| 默认视觉模型 | `llm-default-vision-model` | 图片分析模型 | 默认视觉模型（全局） |
| 默认向量模型 | `llm-default-embedding-model` | 嵌入模型、Embedding 模型 | 默认向量模型（全局） |
| TTS 语音合成 | `tts-providers` | 语音合成、朗读、音色、默认音色、复刻模型、音频格式、语速、服务地址 (Base URL)、App ID、Resource ID |  |

### API 用量

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |

### 推荐回复

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| 启用推荐回复 | `suggestions-enabled` |  | 启用推荐回复（全局） |
| 推荐回复模式 | `suggestions-mode` | 自动、手动 | 推荐模式（全局） |
| 推荐回复 API 模型 | `suggestions-model` |  | 推荐模型（全局） |
| 自己发送后推荐回复 | `suggestions-after-self` |  | 自己发送后推荐（全局） |
| 启用回退内容 | `suggestions-fallback-enabled` |  | 启用回退内容（全局） |
| 回退内容列表 | `suggestions-fallback-texts` |  | 回退内容列表（全局） |
| 推荐回复触发方式 | `suggestions-advanced` | 推荐回复高级设置 |  |
| 推荐回复上文（条） | `intent-tuning-suggestionContextMessages` | 推荐回复上文条数 | 推荐回复上文（条）（全局） |
| 推荐回复温度 | `intent-tuning-suggestionTemperature` |  | 推荐回复温度（全局） |
| 推荐候选数量上限 | `intent-tuning-suggestionCount` |  | 推荐候选数量上限（全局） |
| 推荐目标长度（字） | `intent-tuning-suggestionTargetChars` |  | 推荐目标长度（字）（全局） |
| 推荐 API 请求超时（秒） | `intent-tuning-suggestionApiTimeoutSeconds` |  | 推荐 API 请求超时（秒）（全局） |
| 同一消息推荐缓存（秒） | `intent-tuning-suggestionCacheSeconds` |  | 同一消息推荐缓存（秒）（全局） |
| 最近推荐过期时间（分钟） | `intent-tuning-suggestionExpiryMinutes` |  | 最近推荐过期时间（分钟）（全局） |
| 每会话保留的推荐轮数 | `intent-tuning-suggestionHistoryLimit` |  | 每会话保留的推荐轮数（全局） |
| 图片处理偏好 | `ai-images-suggestions` | 推荐回复图片、推荐回复 OCR | 图片处理偏好（全局） |

### 意图感知

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| 启用意图感知 | `intent-enabled` |  | 启用意图感知（全局） |
| 意图感知模式 | `intent-mode` | 自动、手动 | 分析模式（全局） |
| 意图感知运行方式 | `intent-engine` | 本地意图模型、运行方式 | 分析引擎（全局） |
| 意图感知 API 模型 | `intent-api-model` | 服务商与模型、API 模型 | 分析模型（全局） |
| 自己发送后分析 | `intent-after-self` |  | 自己发送后分析（全局） |
| 分析缓存 | `intent-cache` | 清空并重算 |  |
| 意图感知显示方式 | `intent-advanced` | 意图感知高级设置 |  |
| 显示分析等待动画 | `intent-loading-animation` |  | 分析等待动画（全局） |
| 意图感知上文（条） | `intent-tuning-analysisContextMessages` | 意图感知上文条数 | 意图感知上文（条）（全局） |
| 意图感知温度 | `intent-tuning-analysisTemperature` |  | 意图感知温度（全局） |
| 自动补齐范围（条） | `intent-tuning-backfillMessages` |  | 自动补齐范围（条）（全局） |
| 每次 API 请求目标数（条） | `intent-tuning-apiBatchMessages` |  | 每次 API 请求目标数（条）（全局） |
| 上文相邻间隔上限（分钟） | `intent-tuning-contextGapMinutes` |  | 上文相邻间隔上限（分钟）（全局） |
| 上文追溯跨度（分钟） | `intent-tuning-contextSpanMinutes` |  | 上文追溯跨度（分钟）（全局） |
| 每会话分析缓存上限（条） | `intent-tuning-cacheEntries` |  | 每会话分析缓存上限（条）（全局） |
| API 请求超时（秒） | `intent-tuning-apiTimeoutSeconds` |  | API 请求超时（秒）（全局） |
| API 失败冷却（秒） | `intent-tuning-apiCooldownSeconds` |  | API 失败冷却（秒）（全局） |
| 图片处理偏好 | `ai-images-intent` | 意图感知图片、意图 OCR | 图片处理偏好（全局） |
| 意图模型资源 | `intent-model-resources` | 意图模型资源（全局）、使用下载镜像、hf-mirror.com 镜像 |  |
| 常驻显示 | `intent-persistent-display` |  | 常驻显示（全局） |
| 悬停显示 | `intent-hover-display` |  | 悬停显示（全局） |

### 互动画像

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| 启用互动画像 | `profile-enabled` |  | 启用互动画像（全局） |
| 互动画像模式 | `profile-mode` | 自动、手动 | 画像模式（全局） |
| 互动画像运行方式 | `profile-engine` | 运行方式 | 画像引擎（全局） |
| 互动画像 API 模型 | `profile-api-model` | API 模型 | 画像模型（全局） |
| 互动画像本地模型资源 | `profile-local-model` |  | 画像本地模型（全局） |
| 互动画像统计范围 | `profile-advanced` | 互动画像高级设置 |  |
| 画像推断温度 | `intent-tuning-profileTemperature` |  | 画像推断温度（全局） |
| 画像 API 请求超时（秒） | `intent-tuning-profileApiTimeoutSeconds` |  | 画像 API 请求超时（秒）（全局） |
| 画像 API 失败冷却（秒） | `intent-tuning-profileApiCooldownSeconds` |  | 画像 API 失败冷却（秒）（全局） |
| 情绪统计衰减时长（天） | `intent-tuning-profileDecayDays` |  | 情绪统计衰减时长（天）（全局） |
| 模型推断话题上限 | `intent-tuning-profileModelTopics` |  | 模型推断话题上限（全局） |
| 画像读取缓存（秒） | `intent-tuning-profileCacheSeconds` |  | 画像读取缓存（秒）（全局） |
| 画像统计消息范围（条） | `intent-tuning-profileMessages` |  | 画像统计消息范围（条）（全局） |
| 模型推断采样上限（条） | `intent-tuning-profileSamples` |  | 模型推断采样上限（条）（全局） |
| 模型推断最少样本（条） | `intent-tuning-profileMinSamples` |  | 模型推断最少样本（条）（全局） |
| 画像会话切分间隔（分钟） | `intent-tuning-profileGapMinutes` |  | 画像会话切分间隔（分钟）（全局） |
| 趋势展示天数 | `intent-tuning-profileTrendDays` |  | 趋势展示天数（全局） |
| 画像话题数量上限 | `intent-tuning-profileTopicLimit` |  | 画像话题数量上限（全局） |
| 图片处理偏好 | `ai-images-profile` | 互动画像图片、画像 OCR | 图片处理偏好（全局） |

### WeQ 助手

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| 助手模型设置 | `weq-assistant-model-settings` |  |  |
| 助手默认聊天模型 | `weq-assistant-default-model` |  | 助手生成与执行（全局） |
| 助手默认思考强度 | `weq-assistant-default-effort` |  |  |
| 运行模式 | `weq-assistant-permission` |  |  |
| 额外提示词 | `weq-assistant-customPrompt` |  |  |
| 外部 MCP 服务器 | `weq-assistant-mcpServers` |  |  |
| 运行中默认发送方式 | `weq-assistant-send-mode` |  |  |
| 图片处理偏好 | `ai-images-assistant` |  | 图片处理偏好（全局） |

## 凭据与数据

### 凭据管理

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| 数据库密钥 | `database-key` |  |  |
| 会话密钥 | `session-key` |  |  |
| 下载 rKey | `download-rkey` |  |  |
| ClientKey | `client-key` |  |  |
| 签名器（wrapper.node） | `signer-status` |  |  |
| 外部 rKey 服务器 | `external-rkey` | 外部 rKey、外部 RKEY、已导入的服务器、HTTP 服务器地址、rKey access_token | 外部 RKEY 启用目标（全局） |
| 密钥扫描 | `key-scan` |  |  |
| 其他设备密钥 | `other-device-key` | 其它设备密钥 |  |

### 资源加载

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| QQ 秀缓存有效期 | `chat-qqshow-days` |  | QQ 秀缓存有效期（全局） |
| 优先直连 QQ 加载图片 | `prefer-cdn` | 优先使用 CDN、下载加速 | 优先 CDN（全局） |
| 省流量模式 | `data-saver` | 低数据模式、计费网络、节省流量 | 临时省流量设置（全局）；省流量模式与行为（全局） |
| 外部安卓图片缓存 | `external-chatpic` | 允许使用外部安卓图片缓存、Android 图片 | 外部安卓图片缓存（全局）；外部安卓图片目录（全局，目录需选择） |

### QQ 资源管理

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| 占用概览 | `qq-storage-analysis` | 占用分析、存储占用 |  |
| 资源清理 | `qq-storage-cleanup` | 缓存清理、清理缓存 |  |
| 资源浏览 | `resource-viewer` | 资源查看、本地缓存 |  |

### QQ 数据库管理

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| 启用数据库监听 | `realtime-enabled` | 自动刷新消息 | 数据库监听（全局） |
| 数据库读取并发上限 | `database-read-concurrency` | 连接池、并行读取、查询排队、读取性能 | 数据库读取并发上限（全局） |
| 监听与读取 | `database-listening` | 接入与监听、实时监听 |  |
| 数据库检查与修复 | `database-repair` | 数据库修复、损坏与修复、数据库容错、修复数据库 |  |
| 数据库浏览 | `database-manager` | 数据库管理 |  |
| 导出明文数据库 | `database-export` | 数据库解密 |  |

### QQ 高级工具

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| Protobuf / JCE 逆向 | `protocol-reverse` |  |  |
| QQNT 抓包 | `qqnt-capture` | ntqq 抓包 |  |
| 登录记录与设备标识 | `qq-accounts` | QQ 登录记录管理、QQ 账号管理、设备 GUID、登录记录 |  |

## WeQ 服务

### Web 与 Remote

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| 允许本机浏览器访问 | `web-enabled` | 启用 Web 服务、浏览器访问 | 本机浏览器访问（全局，可能停用服务） |
| 启动 WeQ 时自动允许本机浏览器访问 | `web-autostart` | 启动 WeQ 时自动开启 Web 服务 | Web 服务自动启动（全局） |
| 允许远程连接 | `remote-enabled` | WeQ Remote、远程访问 | WeQ Remote（全局，可能停用服务） |
| 局域网 IP | `remote-lan` | 局域网地址 |  |
| Tailscale IP | `remote-tailscale` | Tailscale、跨网络连接、内网穿透 |  |
| 配对手机 | `remote-pairing` | 设备配对、手机配对、配对二维码 |  |
| 已配对设备 | `remote-devices` | 设备授权、撤销设备授权 |  |

### MCP 服务器

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| 启用 MCP 服务器 | `mcp-enabled` |  | MCP 服务（全局，可能停用服务） |
| MCP 端口 | `mcp-port` |  |  |
| 连接信息 | `mcp-connection` | MCP 客户端配置、复制客户端配置、MCP 令牌 |  |
| 安装到本机 AI 客户端 | `mcp-install` | 安装 MCP、MCP 自动配置 |  |

### OneBot / cc-connect

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| 总开关 | `onebot-enabled` |  | OneBot 服务（全局，可能停用服务） |
| 网络服务器 | `onebot-servers` |  | 网络服务器启用状态（全局，可能停用服务） |

### SSE 推送

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| 推送调优 | `sse-tuning` | 防抖毫秒、大量消息阈值 | SSE 推送调优（全局） |
| 已配置的推送目标 | `sse-targets` | 推送地址、SSE access_token、添加推送目标 | SSE 推送（全局，可能停用服务） |

### QQ 公众号推送

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| 资源服务 | `assistant-resource` | 公众号资源地址 |  |
| QQ 公众号推送端口 | `assistant-port` | 公众号端口 |  |
| 启用 QQ 公众号推送 | `assistant-service` | 启用 WeQ 助手、QQ 公众号推送、推送与资源服务、公众号推送 | QQ 公众号推送（全局，可能停用服务） |

## 关于 WeQ

### 版本与更新

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| 内置组件 | `builtin-components` |  |  |
| 自动检查更新频率 | `update-check-interval` | 更新间隔、更新分钟、永不检查更新 | 自动检查更新频率（全局） |
| 检查测试版 | `update-prerelease` | 测试版更新、Beta 更新 | 检查测试版（全局） |

### WeQ 存储管理

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| 空间清理 | `weq-space-cleanup` | WeQ 存储管理、桌面运行数据、桌面缓存、清理数据、释放空间 |  |

### WeQ 账号管理

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| 现有配置 | `auto-enter-account` | 自动进入账号 | 默认进入账号（全局） |

### 配置备份与恢复

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| 导出备份 | `backup-export` | 备份配置、界面外观与布局 |  |
| 导入备份 | `backup-import` | 恢复备份、恢复界面偏好到此设备、同名数据处理、保留本机导出目录与图片库路径 |  |
| 恢复全局默认设置 | `weq-config-management` | 恢复默认设置、全局恢复默认设置、重置与清除配置、配置与运行数据管理、账号与应用配置、全局配置、清除账号与应用配置、重置全局配置、重置设置、恢复出厂 |  |

### 日志与性能

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
| 性能监视 | `performance-monitor` | 性能记录、CPU、内存历史 | 性能记录档位（全局） |
| 日志保留时长 | `log-retention` |  | 日志保留天数（全局） |
| 日志文件夹 | `log-folder` |  |  |
| 原生调试日志 | `native-debug-log` | 底层调试、调试模式 |  |

### 常见问题

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |

### 反馈

| 设置或入口 | 稳定 ID | 搜索别名 | 页面恢复字段 |
| --- | --- | --- | --- |
