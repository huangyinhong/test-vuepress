module.exports = {
  // 网站的一些基本配置
  base: '/test-docs/', // 配置部署站点的基础路径
  lang: 'zh-CN',
  title: '在线文档', // 网站的标题
  description: '工作，学习相关文档', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 需要被注入到当前页面的 HTML <head> 中的标签
  ],
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment');
          moment.locale(lang);
          return moment(timestamp).format('YYYY-MM-DD HH:MM:ss'); // 格式化更新时间
        }
      }
    ]
  ],
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/logo/logo.jpg', // 导航栏logo
    // 导航栏链接
    nav: [
      // 直接跳转，'/'为不添加路由，跳转至首页，以'/'结尾的最终对应的都是/index.html,也就是 README.md 文件编译后的页面
      { text: 'Home', link: '/' },
      // 对应 /blog/frontend/README.md
      { text: '前端', link: '/blog/frontend/' },
      { text: '后端', link: '/blog/backend/' },
      // { text: 'foo', link: '/foo/' },
      // { text: 'bar', link: '/bar/' },
    ],
    // 侧边栏
    sidebar: {
      '/blog/frontend/': [
        {
          title: '前端分组',
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: [
            {
              title: '概要说明',
              path: '/blog/frontend/'
            },
            {
              title: 'JavaScript',
              path: 'JavaScript.md'
            },
            {
              title: 'html',
              path: 'html.md'
            },
          ]
        },
      ],
      '/blog/backend/': [
        ['', '概要说明'],
        {
          title: '后端分组1',
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: [
            {
              title: 'java',
              path: 'java.md'
            },
          ]
        },
        {
          title: '后端分组2',
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: [
            {
              title: 'python',
              path: 'python.md'
            },
          ]
        },
      ],
    }
  },
  markdown: {
    lineNumbers: true,
  },
};
