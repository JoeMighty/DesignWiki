import { defineConfig } from 'vitepress'
import { buildSidebar, buildNav } from './sidebar-builder.js'

export default defineConfig({
  title: 'DesignWiki',
  description: 'A comprehensive, multi-discipline design encyclopedia',
  base: '/DesignWiki/',

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'DesignWiki',

    nav: buildNav(),
    sidebar: buildSidebar(),

    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JoeMighty/DesignWiki' },
    ],

    footer: {
      message: 'Open-source design education resource. · <a href="https://github.com/JoeMighty/DesignWiki/issues">Report an issue</a>',
      copyright: 'Built by <a href="https://github.com/JoeMighty" target="_blank" rel="noopener">JoeMighty</a>',
    },

    editLink: {
      pattern: 'https://github.com/JoeMighty/DesignWiki/edit/main/docs/:path',
      text: 'Suggest an edit on GitHub',
    },

    lastUpdated: {
      text: 'Last updated',
      formatOptions: { dateStyle: 'medium' },
    },
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/DesignWiki/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'DesignWiki' }],
    ['meta', { property: 'og:description', content: 'A comprehensive, multi-discipline design encyclopedia' }],
  ],

  ignoreDeadLinks: true,

  markdown: {
    lineNumbers: false,
  },
})
