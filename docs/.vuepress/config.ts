import { defaultTheme } from 'vuepress'

export default {
  lang: 'zh-CN',
  title: '',
  description: '这是我的第一个 VuePress 站点',
  base: `/MyBlog/`,
  theme: defaultTheme({
    sidebar: [
      { text: 'HTML相关知识', link: '/README.md/' },
      {
        text: 'CSS相关知识',
        link: './CssDocs/index.md',
        children: [{ text: 'BFC', link: './CssDocs/BFC.md' }]
      },
      {
        text: 'JavaScript相关知识',
        link: '/README.md/',
        children: [{ text: 'this指向', link: './JavaScriptDocs/this指向.md/' }]
      }
    ]
  })
}
