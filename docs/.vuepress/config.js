module.exports = {
  themeConfig: {
    nav: [
      {
        text: "关于",
        link: "/about1/",
      },
      {
        text: "工具",
        items: [
          {
            text: "在线查兼容(前端必备)",
            link: "https://caniuse.com/?search=flex",
          },
          { text: "API请求测试", link: "https://httpbin.org/" },
          { text: "一键去除背景", link: "https://www.remove.bg/zh" },
        ],
      },
    ],
    sidebar: ["/", "about1", "about2"],
  },
  plugins: ["@vuepress/back-to-top"],
};
