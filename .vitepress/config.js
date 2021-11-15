// @ts-check

const Guide = [
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
<<<<<<< HEAD
    text: 'Ζωγραφική & Σημειώσεις',
=======
    text: 'Drawing & Annotations',
>>>>>>> 152e0f6daf66b81d24969bbeae3655f23e93bcc6
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

const Theme = [
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
]

const Customizations = [
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
    text: 'Ρυθμίστε Windi CSS',
    link: '/custom/config-windicss',
  },
  {
    text: 'Ρυθμίστε Monaco',
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
  }
]

const Resources = [
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

const slidebars = [
  {
    text: 'Οδηγός',
    children: Guide,
  },
  {
    text: 'Θέματα',
    children: Theme,
  },
  {
    text: 'Προσαρμογές',
    children: Customizations,
  },
  {
    text: 'Ενσωματωμένα',
    children: [
      {
        text: 'Components',
        link: '/builtin/components',
      },
      {
        text: 'Layouts',
        link: '/builtin/layouts',
      },
    ],
  },
]

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
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
  themeConfig: {
    repo: 'slidevjs/docs',
    logo: '/logo.svg',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Προτείνετε αλλαγές σε αυτή τη σελίδα',

    algolia: {
      apiKey: '1a5c5a504139c58f428974c78c55291d',
      indexName: 'slidev',
      searchParameters: {
        // for translations maintainers: change the filter to your locale code (subdomain name)
        facetFilters: ['language:el']
      }
    },

    nav: [
      {
        text: 'Οδηγός',
        items: Guide,
      },
      {
        text: 'Θέμα',
        items: Theme,
      },
      {
        text: 'Προσαρμόστε',
        items: Customizations,
      },
      {
        text: 'Πηγές',
        items: Resources,
      },
      {
        text: 'Ελληνικά',
        items: Translations,
      },
    ],

    sidebar: {
      '/guide/': slidebars,
      '/themes/': slidebars,
      '/custom/': slidebars,
      '/builtin/': slidebars,
      '/resources/': slidebars,
      '/': slidebars,
    },
  },
}
