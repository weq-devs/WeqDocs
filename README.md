# WeQ 文档站

[WeQ](https://github.com/weq-devs/WeQ) 的文档源文件，用 [VitePress](https://vitepress.dev/) 构建。

## 内容

| 目录 | 内容 |
| --- | --- |
| `guide/` | 使用手册：安装、消息、联系人、导出、空间邮箱、分析与工具、设置 |
| `database/` | QQNT 本地数据库表结构与字段 |
| `tools/` | 在线工具箱：头像路径、数据库密钥、商城表情等纯前端计算器 |
| `develop/` | 开发向常青内容：协议、架构、踩坑记录、原理 |
| `notes/` | 过程记录（**不进站点**，见 `notes/README.md`） |

## 本地预览

使用 Node.js 24 LTS（最低 24）。

```bash
pnpm install
pnpm dev      # http://127.0.0.1:5174
pnpm check    # 只跑链接完整性检查
pnpm build    # 先 check 再构建，产物在 .vitepress/dist
```

文档站使用独立的 `pnpm-workspace.yaml`、锁文件与依赖目录，不加入 WeQ 的应用 workspace。
在 WeQ 主仓根目录可运行 `pnpm docs:install` 安装文档依赖，再用 `pnpm docs:dev`、
`pnpm docs:check`、`pnpm docs:build` 或 `pnpm docs:preview` 转调本站命令。
仅开发应用时仍运行 `pnpm dev`，不需要安装文档站依赖。

## 构建期依赖

「支持的 QQ 版本」页读 `versions/supported.json` 与 `versions/latest.json`。这两个文件
**不入库** —— 权威数据在主仓 `versions/`，由 `.github/workflows/qq-version-watch.yml`
每晚更新。

- CI 构建前自动从主仓拉取到 `versions/`；
- 本地开发设 `WEQ_VERSIONS_DIR=/path/to/WeQ/versions` 指过去即可。

## 这个仓库与主仓的关系

WeqDocs 是 WeQ 主仓的 `docs/` 子模块。无论从主仓的 `docs/` 还是独立检出编辑，都需要两个 Git 提交。

1. 在 WeqDocs 仓库提交文档改动。
2. 回到 WeQ 主仓，暂存 `docs/` 并提交子模块指针。暂存前核对 `docs/` 指向第一步的提交。

对外推送主仓指针前，先确认它指向的提交能从 WeqDocs 远端取得。

跨目录引用（源码、`CONTRIBUTING.md`、`CHANGELOG.md`）一律写 GitHub 绝对 URL ——
`check-docs.mjs` 会检查这一点，因为相对路径在独立 checkout 下必然 404。
