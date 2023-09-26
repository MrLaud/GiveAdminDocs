import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GiveAdmin",
  description: "GiveAdmin Docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '学习', link: '/study/front-end/vue' }
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
          ]
        },
        {
          text: 'JavaScript',
          link: '/front-end/web-technology/JavaScript'
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
