# elementType 2 — 图片

对应 WeQ 解析实现：`packages/codec/src/proto/msg/element.ts`（`elementType = 2`）。

图片是「文件族」中字段最全的一类，绝大多数 `454xx / 455xx / 458xx` tag 都能在图片行上看到。
文件族的**共用字段**（文件名 / 大小 / MD5 / 三档 URL 与本地路径 / CDN 信息 / 传输标记）
统一在 [40800 总览 · 第五节](../40800.md#五跨类型共用的文件族字段) 说明，本页不重复。

---

## 一、subType — 图片的来源分类

名字取自 QQ NT 自身的 `PicSubType` 枚举。实践中 0 / 1 最常见，2/3/4/7 也确有出现；
另有 10..14 出现在野外，超出厂商枚举范围，未命名（需要有渲染结果才能确认）。

| 值 | 名称 | 说明 |
| -- | ---- | ---- |
| 0 | NORMAL | 普通图片 |
| 1 | CUSTOM | 自定义表情（收藏的表情包） |
| 2 | HOT | 热图 |
| 3 | DIPPER_CHART | 斗图 |
| 4 | SMART | 智能图 |
| 5 | SPACE | 空间图（未观测） |
| 6 | UNKNOW | 厂商枚举里就叫 `KUNKNOW`（未观测） |
| 7 | RELATED | 关联图 |

> 这是**元素内** `45003` 的取值，与下面消息行的 `40012` 是两套东西，别混。

### 行级 `40012`：位标志，不是枚举（闪照）

消息行的 `40012`（`subMsgType`）在 `40011 = 2` 时**按位标志解析**，
等值比较会把闪照漏掉。安卓备份全量实测（2026-10-28）：

| `40012` | 二进制 | 含义 | 观测 |
| ------- | ------ | ---- | ---- |
| `2` | `0b0000000000_0010` | 普通图片 | 66 条（c2c） |
| `4096` | `0b0100000000_0000` | 群聊图片（位 12） | 200 条（group） |
| `8194` | `0b1000000000_0010` | **闪照** = 位 13 + 位 1 | 6 条（c2c） |

判闪照用 `(40012 & 0x2000) !== 0`，不要写 `40012 === 8194`——位 1 是「图片」这个大类，
位 13 才是闪照，将来多叠一个标志就会漏判。

**2026-10-28 安卓备份样本中的元素字段**：

| 字段 | 闪照 | 普通图 |
| ---- | ---- | ------ |
| `fileToken`（45503） | `/数字-数字-<MD5>` 形式的 offpic 路径 | Base64 凭据串 |
| `contentHash`（45408） | 缺失 | 有 |
| `thumbnailUrl` / `previewUrl` / `originalUrl` | 三者全空 | 均有 `/download?…` |
| `cdnHost`（45816） | 缺失 | 有 |
| `uploadTime` / `uploadTimestamp` / `fileTTL` | 缺失 | 有 |
| `summary`（45815） | `[""]` | 视情况 |

2026-11-28 在桌面 QQ 数据库核对到一条群临时会话里的普通图片，`40012 = 2`，
`fileToken` 同样符合 `/数字-数字-<MD5>`，同时三档 URL 都有 `/offpic_new/…` 相对路径。
用 `https://c2cpicdw.qpic.cn` 拼接该记录的原图和缩略图路径都返回了 PNG。
`contentHash`、`cdnHost`、`uploadTimestamp` 和 `fileTTL` 在这条普通图片上也未保存。

本地图片元素按消息行的 `40012` 标记闪照。在线协议的 `commonElem serviceType=3` 也会标记闪照。
`fileToken` 的格式用于取图。元素自身的 `45003 subType` 和 `imgType` 在闪照样本上分别为 `0` 和 `1000`，与普通图片相同。

样本：`7701402912258514055` / `7701404990830751682` / `7701428997302103910`（同一会话三次测试，
`40012` 均为 8194）。

> 另一处易错点：`40011 = 2` 只表示「消息主类型是图片」，不代表只有一个 pic 元素。
> 同表里 30 条 `40012 = 1` 的行解出来是 `elementType = 1`（文本），混排消息会这样。

## 二、`imgType`（45416）

| 值 | 名称 | 说明 |
| -- | ---- | ---- |
| 1000 | NORMAL | 普通图 |
| 1001 | ORIGINAL | 原图 |
| 2000 | EMOJI | 表情 |

## 三、常用字段

下表为 `element/spec.ts` 的 `PicElementSchema` 中定义的字段。QQ 的原始记录可能缺项，例如旧式图片没有上传时间或内容校验 hash。

| tag | 字段名 | 类型 | 说明 |
| --- | ------ | ---- | ---- |
| 45402 | `fileName` | string | 图片文件名 |
| 45405 | `fileSize` | uint32 | 字节数 |
| 45406 | `md5Bytes` | bytes | 二进制 MD5 |
| 45408 | `contentHash` | bytes | 内容校验 hash |
| 45411 | `imgWidth` | uint32 | 宽（像素） |
| 45412 | `imgHeight` | uint32 | 高（像素） |
| 45416 | `imgType` | uint32 | 见上表 |
| 45418 | `isOriginal` | bool | 是否原图 |
| 45424 | `md5` | string | 大写十六进制 MD5 |
| 45503 | `fileToken` | string | 下载凭据 |
| 45505 | `uploadTime` | uint32 | 上传 / 处理时间戳 |
| 45517 | `uploadTimestamp` | uint32 | 上传时间戳 |
| 45518 | `fileTTL` | uint32 | 有效期（秒） |
| 45802 | `thumbnailUrl` | string | 缩略图 URL |
| 45803 | `previewUrl` | string | 预览图 URL |
| 45804 | `originalUrl` | string | 大图 URL |
| 45815 | `summary` | string（repeated） | 摘要 / 描述 |
| 45816 | `cdnHost` | string | CDN 域名 |

## 四、可选字段

| tag | 字段名 | 类型 | 含义 |
| --- | ------ | ---- | ---- |
| 45004 | `localPath` | string | **本机原图缓存路径**（`…/nt_data/Pic/<yyyy-mm>/Ori/<md5>.png`）。注意它落在**通用段**而非 454xx；在草稿里是一张「纯图片草稿」唯一的内容 |
| 45403 | `filePath` | string | 本地文件路径 |
| 45511 | `picTransferState` | uint32 | 传输状态 |
| 45513 | `transferVersion` | uint32 | 传输版本 |
| 45806 | `cdnServerIp` | uint32 | CDN 地址，大端打包 IPv4 |
| 45807 | `cdnServerPort` | uint32 | CDN 端口 |
| 45812 | `thumbnailLocalPath` | string | 缩略图本地缓存路径（`…_0.jpg`） |
| 45813 | `previewLocalPath` | string | 预览图本地缓存路径（`…_198.jpg`） |
| 45814 | `originalLocalPath` | string | 大图本地缓存路径（`…_720.jpg`） |
| 45507 | `transferFlag45507` | int64 | 近似常量哨兵，见总览 |
| 45509 | `transferFlag45509` | uint32 | 恒为 1（与 45507 成对） |
| 45600 | `picFlag45600` | bytes | 复杂嵌套结构（图片冗余信息），保留为原始字节 |

> `45004` 早期叫 `faceExtDesc`（被当成 FACE 的「扩展描述」，因为只在通用段里见过 FACE 的注释）。
> 2026-09-26 观测到一条草稿的纯 PIC 行把它写成本机原图缓存路径后，改名为 `localPath`。
> FACE 上是否也用同一语义仍未确认 —— 见 [face.md](face.md)。

## 五、观测到但语义未验证

以下 tag 在图片行上出现过，但取值几乎恒定，携带不了可利用的信息，仅为往返保真而解析。

| tag | 观测情况 |
| --- | -------- |
| 45425 | 只在 subType=13 的行上出现，取值 1（×93）/ 2（×2） |
| 45801 | 唯一一次观测为空字符串 |
| 45557 | 唯一一次观测为 0 |
| 45805 | 所有观测行恒为 0 |
| 45817 | PIC 协议标志（uint32） |
| 45818 / 45819 / 45820 | string，语义未知 |
| 45821 / 45822 / 45823 | uint32，语义未知 |
| 45824 | string，语义未知 |
| 45825 / 45826 / 45827 | uint32，语义未知 |
| 45828 | string，语义未知 |
| 45829 / 45830 / 45831 | 恒为 0 |

---

## 六、附：安卓 QQ 的 chatpic 缓存路径预测

手机 QQ 的聊天图片缓存**不按消息存，按 md5 存**。目录在手机的外部存储：

```text
/sdcard/Android/data/com.tencent.mobileqq/Tencent/MobileQQ/chatpic
```

下面按三个子目录分档：`chatraw`（原图）/ `chatimg`（普通图）/ `chatthumb`（缩略图）。
**文件名与子目录完全由 md5 公式推出**，不需要查任何表：

```text
url      = `${folder}:${md5}`        // folder ∈ chatraw / chatimg / chatthumb
crc      = CRC64(url)                // 有符号 BigInt！
filename = `Cache_${crc.toString(16)}`
subdir   = filename 的最后 3 个字符
相对路径 = `${folder}/${subdir}/${filename}`
```

同一个 md5 在三个目录里各算一次，得到**三个不同的文件名**——寻址时逐个探测，
哪个存在用哪个（优先级 chatraw > chatimg > chatthumb：能显示出来比清晰度重要）。

关键细节：CRC64 用**反射多项式 `0x95AC9329AC4BC9B5`、初值 -1、无最终异或**，
且结果保留**有符号** BigInt——实测 QQ 的文件名带负号，一旦无符号化所有寻址全部失效。

WeQ 实现：`packages/service/src/account/chatpic.ts`（金标准值单测钉死在
`packages/service/test/chatpic.test.ts`）。在桌面端导入完整的 chatpic 备份后，
本机缺失的聊天图片可按此公式找回（设置 → 账号信息 → 外部安卓图片缓存；
`weq-media://pic` 链路在本地 miss 时自动按 md5 兜底，再不行才走 CDN）。

---

[← 返回消息段索引](../index.md#消息段element索引)
