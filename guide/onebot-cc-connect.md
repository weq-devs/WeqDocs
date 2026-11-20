# OneBot

WeQ 通过内置的 **weqbot kernel** 提供完整的 OneBot v11 接口，可以直接连接
cc-connect、NapCat 生态的客户端、Koishi、NoneBot 等。QQ 收发由 WeQ 完成，
Agent 与会话仍由客户端自己管理，不需要额外启动 NapCat。

::: tip 和以前不一样的地方

2026-11-19 起，OneBot 由独立的 **weqbot daemon** 进程提供，不再是 WeQ 主进程里的
一份实现。对客户端来说没有区别（还是同一个端口、同一套协议），但配置改了形状、
能力大幅扩展（214 条 action），端口不再自动顺延。下面是新的行为。

:::

## 接入 cc-connect

1. 在 QQ 登录目标账号，并在 WeQ 打开对应的在线账号。
2. 打开「设置 → WeQ 服务 → OneBot」，新建或选用一条已启用的正向 WebSocket。
3. 点这条连接的「复制地址」，将地址填入下方示例的 `ws_url`。如设置了访问令牌，可在该连接的编辑窗口中显示令牌并复制到 `token`；没有设置则留空。
4. 把片段加到 cc-connect 对应项目的配置中，将 `allow_from` 改成你的 QQ 号。已有连接不用重新配置。

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

### 端口不会被自动顺延

配置里写多少就是多少。端口被占用时会**直接报错**并指出是哪一条网络，不会悄悄换
到附近的空闲端口 —— 客户端里写死的地址如果被换掉，用户只会看到「运行中」却连不上。

## 事件与 action 的可用性

这一条最容易踩坑：

| | QQ 在线（mode 1） | QQ 离线（mode 2） |
| --- | --- | --- |
| action（发送 / 撤回 / 名单 / 群管理 / 空间 / 文件） | ✅ 全部可用 | ✅ 全部可用 |
| 事件（新消息 / 通知 / 请求） | ❌ **一条都没有** | ✅ |

QQ 本体在线时，WeQ 借它的会话（mode 1），这条链路只发不收 —— 我们不发
`SsoInfoSync`、不注册，服务端不会往这条连接推任何消息。需要事件时：

- 让 QQ 退出，在 WeQ 里以 **bot 方式上线**（mode 2，自建会话）；或
- 使用 WeQ 的 **SSE 推送**（设置 → SSE 消息推送），它从本地数据库读新消息。

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

完整列表见动作列表（214 条，按域分组）。常用的：

- **消息**：`send_msg` / `send_private_msg` / `send_group_msg`、撤回、已读上报、
  `get_msg`、历史消息、合并转发（发与收）、自定义表情。
- **名单**：好友、群、群成员、陌生人资料、好友分组。
- **群管理**：改名、名片、禁言（含批量）、踢人、管理员、加群方式、群标签、
  群文件（列表 / 上传 / 转存 / 删除 / 重命名 / 移动）、群公告、群相册。
- **互动**：戳一戳、表情回应、点赞、翻译、@全体。
- **空间**：资料读写、说说列表 / 详情 / 发布 / 删除 / 点赞 / 评论 / 转发。
- **闪传**：创建任务、列表、分享链接、下载。

未实现或明确不做：本地媒体缓存类（`get_image` / `get_record`，WeqBot 不建本地
存储）、依赖服务端临时目录的下载流、凭据类（`get_cookies` 等默认关）。

## 排障

- **页面显示「daemon 未就绪」**：典型是 weqbot 进程没起来或 native 组件缺失。
  保存配置时会提示具体原因。
- **显示「启动失败」并带端口**：端口被别的程序占了，换一个。
- **客户端连上了但没有事件**：见上面「事件与 action 的可用性」。
- **同一条配置在另一个账号下看不到**：配置是按账号存的。
