import { readFileSync } from 'node:fs';
import { defineConfig } from 'vitepress';
import { nav, guideSidebar, databaseSidebar, toolsSidebar, developSidebar } from './nav.mts';

// 版本号：优先取构建期注入的 `WEQ_VERSION`（CI 从主仓 `package.json` 读），
// 退回本仓库自己的 `package.json`。submodule 化之后 `pnpm version:set` 不再写
// 这里（那会把 submodule 弄脏），所以正式站的版本必须靠注入，否则会一直显示
// 文档仓自己的初始版本。
const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf-8'));
const version = process.env.WEQ_VERSION ?? pkg.version;

// GitHub Pages 项目站点是 /WeQ/；本地 dev 和自定义域名是 /。
// 走环境变量而不是写死，换托管目标时只改 CI。
const base = process.env.DOCS_BASE ?? '/';

export default defineConfig({
  lang: 'zh-CN',
  title: 'WeQ',
  description: 'QQ NT 本地聊天记录解密、导出、查看与年度报告',
  base,

  // 过程记录不进站点：写完即过期，不要求维护，也不该出现在搜索里。
  //
  // `develop/redbag.md` 也在排除之列：它在 `.gitignore` 里（含真机抓包样本与
  // 加密 KEY/IV，且**不入库**），但 VitePress 读的是工作区而不是 git 索引 ——
  // 不排除的话本机能构建出 `develop/redbag.html`，站点一上线这份内容就通过
  // 网站泄露出去了，和仓库公不公开无关。
  srcExclude: ['notes/**', 'develop/redbag.md'],

  // 侧栏要按最近一次 commit 显示「最后更新」，CI 必须 fetch-depth: 0。
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: `${base}images/logo.png` }],
    ['meta', { name: 'theme-color', content: '#0099ff' }],
  ],

  markdown: {
    lineNumbers: false,
  },

  // 内容目录就是 docs/，构建产物落在 docs/.vitepress/dist 里。
  // 不排除的话 dev server 会把自己的输出当成内容变化，无限重载。
  vite: {
    server: {
      watch: {
        ignored: ['**/.vitepress/dist/**', '**/.vitepress/cache/**'],
      },
    },
  },

  themeConfig: {
    logo: '/images/logo.png',
    siteTitle: 'WeQ',

    nav,

    sidebar: {
      '/guide/': guideSidebar,
      '/database/': databaseSidebar,
      '/tools/': toolsSidebar,
      '/develop/': developSidebar,
    },

    outline: { level: [2, 3], label: '本页目录' },

    // 内置 MiniSearch 默认按空格切词，中文整句会被当成一个词。
    // 用 Intl.Segmenter 做词级切分，零额外依赖。
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            tokenize: (text) => {
              const seg = new Intl.Segmenter('zh-CN', { granularity: 'word' });
              return [...seg.segment(text)].filter((s) => s.isWordLike).map((s) => s.segment);
            },
          },
          searchOptions: {
            prefix: true,
            fuzzy: 0.2,
            boost: { title: 4, text: 2, titles: 3 },
          },
        },
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },

    // 文档内容住在独立仓库 `weq-devs/WeqDocs`（主仓的 `docs/` 只是 submodule
    // 指针）。指的必须是那边，指主仓的 `docs/` 会落到一个 gitlink 上。
    editLink: {
      pattern: 'https://github.com/weq-devs/WeqDocs/edit/main/:path',
      text: '在 GitHub 上编辑此页',
    },

    docFooter: { prev: '上一篇', next: '下一篇' },

    footer: {
      message: `当前文档对应 v${version} · 已发布内容以 CHANGELOG 为准`,
      copyright: 'GPL-3.0-or-later',
    },

    lastUpdated: {
      text: '最后更新',
      formatOptions: { dateStyle: 'short', timeStyle: 'short' },
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色',
    darkModeSwitchTitle: '切换到深色',

    socialLinks: [{ icon: 'github', link: 'https://github.com/weq-devs/WeQ' }],
  },
});
