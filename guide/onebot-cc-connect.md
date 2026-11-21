# OneBot

WeQ 通过内置的 **weqbot kernel** 提供完整的 OneBot v11 接口，可以直接连接
cc-connect、NapCat 生态的客户端、Koishi、NoneBot 等。QQ 收发由 WeQ 完成，
Agent 与会话仍由客户端自己管理，不需要额外启动 NapCat。

::: tip 和以前不一样的地方

OneBot 现在由独立的 **weqbot daemon** 进程提供，配置按 QQ 账号保存。
如果 WeQ 只有一个已保存的 QQ 账号，打开它时会接续旧版的监听端口、令牌、启用状态和 HTTP 跨域设置。
如果已保存多个 QQ 账号，旧全局配置仍保存在设置备份中，打开账号后可在 OneBot 页为
目标账号重新配置。借用在线 QQ 会话时的事件接收方式见下文。

:::

## 接入 cc-connect

1. 在 QQ 登录目标账号，并在 WeQ 打开对应的在线账号。
2. 打开「设置 → WeQ 服务 → OneBot」，新建或选用一条已启用的正向 WebSocket。
3. 点这条连接的「复制地址」，将地址填入下方示例的 `ws_url`。如设置了访问令牌，可在该连接的编辑窗口中显示令牌并复制到 `token`；没有设置则留空。
4. 把片段加到 cc-connect 对应项目的配置中，将 `allow_from` 改成你的 QQ 号。沿用原端口和令牌时，可以复用客户端连接设置。

```toml
[[projects.platforms]]
type = "qq"

[projects.platforms.options]
ws_url = "ws://127.0.0.1:48800"
token = "WeQ 页面里的访问令牌"
allow_from = "填写你的 QQ 号"
group_require_mention = true
```

## 四类网络

配置按**账号**保存（切号会换成另一份），由 weqbot daemon 执行：

| 类型 | 方向 | 说明 |
| --- | --- | --- |
| 正向 WebSocket | WeQ 监听 | 客户端连进来（cc-connect / Koishi 常用） |
| 反向 WebSocket | WeQ 主动连 | NoneBot 的 `ws_reverse` |
| HTTP 服务端 | WeQ 监听 | 标准 OneBot v11 HTTP API，可选同端口接受 WS |
| HTTP 上报 | WeQ 主动 POST | 把事件推到客户端的地址 |

每条都有独立开关、令牌、`messageFormat`（`array` / CQ 码 `string`）与角色
（`Universal` / `Api` / `Event`）。

HTTP 服务端可以单独开启「允许跨域」，用于从其他网站通过浏览器调用时的预检和响应。
新建监听时默认关闭。开启后，实际接口请求仍使用该监听的令牌。

### 端口不会被自动顺延

配置里写多少就是多少。端口被占用时会**直接报错**并指出是哪一条网络，不会悄悄换
到附近的空闲端口 —— 客户端里写死的地址如果被换掉，用户只会看到「运行中」却连不上。

## 事件与 action 的可用性

| | QQ 在线（mode 1） | QQ 离线（mode 2） |
| --- | --- | --- |
| action（发送 / 撤回 / 名单 / 群管理 / 空间 / 文件） | ✅ 全部可用 | ✅ 全部可用 |
| 私聊与群聊新消息 | WeQ 打开该账号并接入 QQ 后，从本地数据库投递 | 由 bot 接收服务端推送 |
| 服务端通知和好友／入群请求 | 需要 bot 独立上线 | 由 bot 接收服务端推送 |

QQ 本体在线时，WeQ 借用其会话执行操作，同时读取当前账号数据库的新消息，
通过已配置的 OneBot 连接推送。账号切换会停止旧来源的投递。关闭 WeQ 后，
这条本地消息来源就会停止。bot 独立上线时由 daemon 自行接收消息；
关闭 WeQ 窗口后，它仍可继续运行。

已经使用「SSE 消息推送」的客户端仍可沿用自己的接入方式。

## HTTP API

```sh
curl -H 'Authorization: Bearer <令牌>' \
  'http://127.0.0.1:48840/get_login_info'

curl -H 'Authorization: Bearer <令牌>' \
  -H 'Content-Type: application/json' \
  -d '{"group_id":12345,"message":"hello"}' \
  'http://127.0.0.1:48840/send_msg'
```

令牌也可以用 `?access_token=` 传入。根路径同时接受
`{"action":"get_login_info","params":{},"echo":"..."}` 的统一信封。

## 支持的 action

完整列表见动作列表（按域分组）。常用的：

- **消息**：`send_msg` / `send_private_msg` / `send_group_msg`、撤回、已读上报、
  `get_msg`、历史消息、合并转发（发与收）、自定义表情。
- **名单**：好友、群、群成员、陌生人资料、好友分组。
- **群管理**：改名、名片、禁言（含批量）、踢人、管理员、加群方式、群标签、
  群文件（列表 / 上传 / 转存 / 删除 / 重命名 / 移动）、群公告、群相册。
- **互动**：戳一戳、表情回应、点赞、翻译、@全体。
- **空间**：资料读写、说说列表 / 详情 / 发布 / 删除 / 点赞 / 评论 / 转发。
- **闪传**：创建任务、列表、分享链接、下载。`list_filesets` 返回首页数组；`list_filesets_page` 返回 `items`、`total`、`is_end` 和 `next_cursor`。首屏省略 `cursor`，续页把 `next_cursor` 原样传回，`is_end` 为 `true` 时停止；服务端不提供总数时 `total` 为 `null`。

未实现或明确不做：本地媒体缓存类（`get_image` / `get_record`，WeqBot 不建本地
存储）、依赖服务端临时目录的下载流、凭据类（`get_cookies` 等默认关）。

## 排障

- **页面显示「daemon 未就绪」**：典型是 weqbot 进程没起来或 native 组件缺失。
  保存配置时会提示具体原因。
- **显示「启动失败」并带端口**：端口被别的程序占了，换一个。
- **客户端连上了但没有消息**：QQ 在线时，确认 WeQ 打开的是同一账号、QQ 在线能力已启用，
  且该连接允许接收事件。
- **同一条配置在另一个账号下看不到**：配置是按账号存的。
