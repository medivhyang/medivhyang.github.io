import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en",

  title: "Medivh Yang",
  description: "Medivh Yang's Blog",
  srcDir: "./src",
  head: [["link", { rel: "icon", href: "/images/logo.jpeg" }]],


  themeConfig: {
    logo: "/images/logo.jpeg",
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Projects", link: "/projects/" },
      { text: "Posts", link: "/posts/" },
      { text: "Tools", link: "/tools/" },
      { text: "About", link: "/about" },
    ],

    footer: {
      message:
        '<a class="text-secondary" href="https://beian.miit.gov.cn">鄂ICP备2023021683号-1</a>',
      copyright: "Copyright © 2024 Medivh Yang",
    },
  },

  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    zh: {
      label: "简体中文",
      lang: "zh",
      title: "麦迪文杨",
      description: "麦迪文杨的博客",
      themeConfig: {
        nav: [
          { text: "主页", link: "/zh/" },
          { text: "项目", link: "/zh/projects/" },
          { text: "文章", link: "/zh/posts/" },
          { text: "工具", link: "/zh/tools/" },
          { text: "关于", link: "/zh/about" },
        ],
        outline: {
          label: "页面导航",
        },
        returnToTopLabel: "返回顶部"
      },
    },
  },
});
