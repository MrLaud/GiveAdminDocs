import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/GiveAdminDocs/',
  title: "GiveAdmin",
  description: "GiveAdmin Docs",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]], // 标签页图标
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/avartar.png',
    outline: "deep",  // 目录 深层
    nav: [
      { text: '✨指南', link: '/' },
      { text: '📝学习', link: '/study/front-end/vue' }
    ],
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   },
    // ],

    sidebar:{
      '/study/front-end':[
        {
          text: '前段开发',
          collapsed: false,
          items: [
            { text: 'vue', link: '/study/front-end/vue' },
            { text: 'vitepress', link: '/study/front-end/vitepress' },
            { text: 'Nodejs', link: '/study/front-end/node_js' },
          ]
        },
        {
          text: 'JavaScript',
          link: '/front-end/web-technology/JavaScript'
        }
      ],
    },
    
    lastUpdatedText: '上次更新', // 上次更新时间显示文本
    docFooter: { // 文档底部文本
      prev: '上一页',
      next: '下一页'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  
  lastUpdated: true, // 是否显示 更新时间
  markdown:{
    // theme: 'dark-plus',
    // lineNumbers:true   // 显示行号
  },
  
})
