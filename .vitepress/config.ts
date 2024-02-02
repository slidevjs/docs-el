import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import vite from '../vite.config'

const CURRENT_VERSION = '0.47.1'

const Guide: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Γιατί Slidev',
    link: '/guide/why',
  },
  {
    text: 'Ξεκινώντας',
    link: '/guide/',
  },
  {
    text: 'Εγκατάσταση',
    link: '/guide/install',
  },
  {
    text: 'Σύνταξη Markdown',
    link: '/guide/syntax',
  },
  {
    text: 'Πλοήγηση',
    link: '/guide/navigation',
  },
  {
    text: 'Κινήσεις',
    link: '/guide/animations',
  },
  {
    text: 'Εξαγωγή',
    link: '/guide/exporting',
  },
  {
    text: 'Στατική Φιλοξενία',
    link: '/guide/hosting',
  },
  {
    text: 'Καταγραφή Παρουσίασης',
    link: '/guide/recording',
  },
  {
    text: 'Λειτουργία Παρουσιαστή',
    link: '/guide/presenter-mode',
  },
  {
    text: 'Ζωγραφική & Σημειώσεις',
    link: '/guide/drawing',
  },
  {
    text: 'Ενσωματώσεις Συντάκτη',
    link: '/guide/editors',
  },
  {
    text: 'Συχνές Ερωτήσεις',
    link: '/guide/faq',
  },
]

const BuiltIn: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Components',
    link: '/builtin/components',
  },
  {
    text: 'Layouts',
    link: '/builtin/layouts',
  },
]

const Theme: (DefaultTheme.NavItemWithLink | DefaultTheme.NavItemChildren)[] = [
  {
    text: 'Χρησιμοποίηστε Θέμα',
    link: '/themes/use',
  },
  {
    text: 'Συλλογή Θεμάτων',
    link: '/themes/gallery',
  },
  {
    text: 'Δημιουργήστε ένα Θέμα',
    link: '/themes/write-a-theme',
  },
]

const Addon: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Χρήση Πρόσθετου',
    link: '/addons/use',
  },
  {
    text: 'Γράψτε ένα Πρόσθετο',
    link: '/addons/write-an-addon',
  },
]

<<<<<<< HEAD:.vitepress/config.js
const Translations = [
  {
    text: 'Ελληνικά',
  },
  {
    text: 'English',
    link: 'https://sli.dev{{pathname}}',
  },
  {
    text: '简体中文',
    link: 'https://cn.sli.dev{{pathname}}',
  },
  {
    text: 'Français',
    link: 'https://fr.sli.dev{{pathname}}',
  },
  {
    text: 'Español',
    link: 'https://es.sli.dev{{pathname}}',
  },
  {
    text: 'Русский',
    link: 'https://ru.sli.dev{{pathname}}',
  },
  {
    text: 'Việt Nam',
    link: 'https://vn.sli.dev{{pathname}}',
  },
  {
    text: 'Deutsch',
    link: 'https://de.sli.dev{{pathname}}',
  },
  {
    text: 'Português (BR)',
    link: 'https://br.sli.dev{{pathname}}',
  },
  {
    text: 'Ελληνικά',
    link: 'https://el.sli.dev{{pathname}}',
  },
  {
    text: '日本語',
    link: 'https://ja.sli.dev{{pathname}}',
  },
]

const Customizations = [
=======
const Customizations: (DefaultTheme.NavItemWithLink | DefaultTheme.NavItemChildren)[] = [
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5:.vitepress/config.ts
  {
    text: 'Προσαρμογές',
    link: '/custom/',
  },
  {
    text: 'Δομή Φακέλου',
    link: '/custom/directory-structure',
  },
  {
    text: 'Γραμματοσειρές',
    link: '/custom/fonts',
  },
  {
    text: 'Επισημαντήρες',
    link: '/custom/highlighters',
  },
  {
    text: 'Ρυθμίστε Vue',
    link: '/custom/config-vue',
  },
  {
    text: 'Ρυθμίστε Vite',
    link: '/custom/config-vite',
  },
  {
    text: 'Ρυθμίστε UnoCSS',
    link: '/custom/config-unocss',
  },
  {
<<<<<<< HEAD:.vitepress/config.js
    text: 'Ρυθμίστε Windi CSS',
    link: '/custom/config-windicss',
  },
  {
    text: 'Ρυθμίστε Monaco',
=======
    text: 'Configure Monaco',
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5:.vitepress/config.ts
    link: '/custom/config-monaco',
  },
  {
    text: 'Ρυθμίστε KaTeX',
    link: '/custom/config-katex',
  },
  {
    text: 'Ρυθμίστε Mermaid',
    link: '/custom/config-mermaid',
  },
  {
    text: 'Ρυθμίστε Parser',
    link: '/custom/config-parser',
  },
  {
    text: 'Ρυθμίστε Συντομεύσεις',
    link: '/custom/config-shortcuts',
  },
  {
    text: 'Vue Global Context',
    link: '/custom/vue-context',
  },
  {
    text: 'Global Layers',
    link: '/custom/global-layers',
  },
]

const Resources: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Παρουσιάσεις',
    link: '/showcases',
  },
  {
    text: 'Μαθησιακοί Πόροι',
    link: '/resources/learning',
  },
  {
    text: 'Επιμελημένα Εξώφυλλα',
    link: '/resources/covers',
  },
]

const slidebars: DefaultTheme.SidebarItem[] = [
  {
<<<<<<< HEAD:.vitepress/config.js
    text: 'Οδηγός',
    children: Guide,
  },
  {
    text: 'Θέματα',
    children: Theme,
  },
  {
    text: 'Πρόσθετα',
    children: Addon,
  },
  {
    text: 'Προσαρμογές',
    children: Customizations,
  },
  {
    text: 'Ενσωματωμένα',
    children: BuiltIn,
=======
    text: 'Guide',
    items: Guide,
  },
  {
    text: 'Themes',
    items: Theme,
  },
  {
    text: 'Addons',
    items: Addon,
  },
  {
    text: 'Customizations',
    items: Customizations,
  },
  {
    text: 'Built-in',
    items: BuiltIn,
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5:.vitepress/config.ts
  },
]

export default defineConfig({
  title: 'Slidev',
  description: 'Διαφάνειες παρουσίασης για προγραμματιστές',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'author', content: 'Anthony Fu' }],
    ['meta', { property: 'og:title', content: 'Slidev' }],
    ['meta', { property: 'og:image', content: 'https://sli.dev/og-image.png' }],
    ['meta', { property: 'og:description', content: 'Διαφάνειες παρουσίασης για προγραμματιστές' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@slidevjs' }],
    ['meta', { name: 'twitter:image', content: 'https://sli.dev/og-image.png' }],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400;500&family=Inter:wght@200;400;500;600', rel: 'stylesheet' }],
  ],
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    async shikiSetup(shiki) {
      await shiki.loadLanguage(
        'html',
        'xml',
        'vue',
        'markdown',
      )
    },
    codeTransformers: [
      transformerTwoslash(),
    ],
  },
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.svg',
<<<<<<< HEAD:.vitepress/config.js
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Προτείνετε αλλαγές σε αυτή τη σελίδα',

    algolia: {
      appId: 'LCBV6MIFS6',
      apiKey: '1ff173fe73b20edc962c1c24c0b1c160',
      indexName: 'slidev',
      searchParameters: {
        // for translations maintainers: change the filter to your locale code (subdomain name)
        facetFilters: ['language:el']
      }
=======
    editLink: {
      pattern: 'https://github.com/slidevjs/docs/edit/main/:path',
      text: 'Suggest changes to this page',
    },

    search: {
      provider: 'local',
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5:.vitepress/config.ts
    },

    nav: [
      {
        text: 'Οδηγός',
        items: Guide,
      },
      {
<<<<<<< HEAD:.vitepress/config.js
        text: 'Θέμα',
        items: Theme,
      },
      {
        text: 'Πρόσθετο',
        items: Addon,
      },
      {
        text: 'Προσαρμόστε',
        items: Customizations,
      },
      {
        text: 'Ενσωματωμένα',
        items: BuiltIn,
=======
        text: 'Theme',
        items: [
          ...Theme,
          {
            text: 'Built-in',
            items: BuiltIn,
          },
        ],
      },
      {
        text: 'Customize',
        items: [
          ...Customizations,
          {
            text: 'Addon',
            items: Addon,
          },
        ],
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5:.vitepress/config.ts
      },
      {
        text: 'Πηγές',
        items: Resources,
      },
      {
<<<<<<< HEAD:.vitepress/config.js
        text: 'Ελληνικά',
        items: Translations,
=======
        text: `v${CURRENT_VERSION}`,
        items: [
          { text: 'Release Notes', link: 'https://github.com/slidevjs/slidev/releases' },
        ],
>>>>>>> 79a4d453cf7d626368487ec247f6becebd0a20d5:.vitepress/config.ts
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/slidevjs/slidev' },
      { icon: 'twitter', link: 'https://twitter.com/slidevjs' },
      { icon: 'discord', link: 'https://chat.sli.dev' },
    ],

    sidebar: {
      '/guide/': slidebars,
      '/themes/': slidebars,
      '/addons/': slidebars,
      '/custom/': slidebars,
      '/builtin/': slidebars,
      '/resources/': slidebars,
      '/': slidebars,
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020 Anthony Fu.',
    },
  },

  locales: {
    root: {
      label: 'English',
    },
    zh: {
      label: '简体中文',
      link: 'https://cn.sli.dev/',
    },
    fr: {
      label: 'Français',
      link: 'https://fr.sli.dev/',
    },
    es: {
      label: 'Español',
      link: 'https://es.sli.dev/',
    },
    ru: {
      label: 'Русский',
      link: 'https://ru.sli.dev/',
    },
    vn: {
      label: 'Việt Nam',
      link: 'https://vn.sli.dev/',
    },
    de: {
      label: 'Deutsch',
      link: 'https://de.sli.dev/',
    },
    br: {
      label: 'Português (BR)',
      link: 'https://br.sli.dev/',
    },
    el: {
      label: 'Ελληνικά',
      link: 'https://el.sli.dev/',
    },
    ja: {
      label: '日本語',
      link: 'https://ja.sli.dev/',
    },
  },
})
