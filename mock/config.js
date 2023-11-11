const config = {
  root: 'D:/code/cheny/vitepress/docs',
  srcDir: 'D:/code/cheny/vitepress/docs',
  assetsDir: 'assets',
  site: {
    lang: 'en-US',
    dir: 'ltr',
    title: 'VitePress',
    description: 'Vite & Vue powered static site generator.',
    base: '/',
    head: [
      [
        'link',
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/vitepress-logo-mini.svg',
        },
      ],
      [
        'link',
        {
          rel: 'icon',
          type: 'image/png',
          href: '/vitepress-logo-mini.png',
        },
      ],
      [
        'meta',
        {
          name: 'theme-color',
          content: '#5f67ee',
        },
      ],
      [
        'meta',
        {
          name: 'og:type',
          content: 'website',
        },
      ],
      [
        'meta',
        {
          name: 'og:locale',
          content: 'en',
        },
      ],
      [
        'meta',
        {
          name: 'og:site_name',
          content: 'VitePress',
        },
      ],
      [
        'meta',
        {
          name: 'og:image',
          content: 'https://vitepress.dev/vitepress-og.jpg',
        },
      ],
      [
        'script',
        {
          src: 'https://cdn.usefathom.com/script.js',
          'data-site': 'AZBRSFGG',
          'data-spa': 'auto',
          defer: '',
        },
      ],
      [
        'script',
        {
          id: 'check-dark-mode',
        },
        ";(() => {\n            const preference = localStorage.getItem('vitepress-theme-appearance') || 'auto'\n            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches\n            if (!preference || preference === 'auto' ? prefersDark : preference === 'dark')\n              document.documentElement.classList.add('dark')\n          })()",
      ],
      [
        'script',
        {
          id: 'check-mac-os',
        },
        "document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))",
      ],
    ],
    appearance: true,
    themeConfig: {
      logo: {
        src: '/vitepress-logo-mini.svg',
        width: 24,
        height: 24,
      },
      nav: [
        {
          text: 'Guide',
          link: '/guide/what-is-vitepress',
          activeMatch: '/guide/',
        },
        {
          text: 'Reference',
          link: '/reference/site-config',
          activeMatch: '/reference/',
        },
        {
          text: '1.0.0-rc.25',
          items: [
            {
              text: 'Changelog',
              link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md',
            },
            {
              text: 'Contributing',
              link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md',
            },
          ],
        },
      ],
      sidebar: {
        '/guide/': {
          base: '/guide/',
          items: [
            {
              text: 'Introduction',
              collapsed: false,
              items: [
                {
                  text: 'What is VitePress?',
                  link: 'what-is-vitepress',
                },
                {
                  text: 'Getting Started',
                  link: 'getting-started',
                },
                {
                  text: 'Routing',
                  link: 'routing',
                },
                {
                  text: 'Deploy',
                  link: 'deploy',
                },
              ],
            },
            {
              text: 'Writing',
              collapsed: false,
              items: [
                {
                  text: 'Markdown Extensions',
                  link: 'markdown',
                },
                {
                  text: 'Asset Handling',
                  link: 'asset-handling',
                },
                {
                  text: 'Frontmatter',
                  link: 'frontmatter',
                },
                {
                  text: 'Using Vue in Markdown',
                  link: 'using-vue',
                },
                {
                  text: 'Internationalization',
                  link: 'i18n',
                },
              ],
            },
            {
              text: 'Customization',
              collapsed: false,
              items: [
                {
                  text: 'Using a Custom Theme',
                  link: 'custom-theme',
                },
                {
                  text: 'Extending the Default Theme',
                  link: 'extending-default-theme',
                },
                {
                  text: 'Build-Time Data Loading',
                  link: 'data-loading',
                },
                {
                  text: 'SSR Compatibility',
                  link: 'ssr-compat',
                },
                {
                  text: 'Connecting to a CMS',
                  link: 'cms',
                },
              ],
            },
            {
              text: 'Experimental',
              collapsed: false,
              items: [
                {
                  text: 'MPA Mode',
                  link: 'mpa-mode',
                },
                {
                  text: 'Sitemap Generation',
                  link: 'sitemap-generation',
                },
              ],
            },
            {
              text: 'Config & API Reference',
              base: '/reference/',
              link: 'site-config',
            },
          ],
        },
        '/reference/': {
          base: '/reference/',
          items: [
            {
              text: 'Reference',
              items: [
                {
                  text: 'Site Config',
                  link: 'site-config',
                },
                {
                  text: 'Frontmatter Config',
                  link: 'frontmatter-config',
                },
                {
                  text: 'Runtime API',
                  link: 'runtime-api',
                },
                {
                  text: 'CLI',
                  link: 'cli',
                },
                {
                  text: 'Default Theme',
                  base: '/reference/default-theme-',
                  items: [
                    {
                      text: 'Overview',
                      link: 'config',
                    },
                    {
                      text: 'Nav',
                      link: 'nav',
                    },
                    {
                      text: 'Sidebar',
                      link: 'sidebar',
                    },
                    {
                      text: 'Home Page',
                      link: 'home-page',
                    },
                    {
                      text: 'Footer',
                      link: 'footer',
                    },
                    {
                      text: 'Layout',
                      link: 'layout',
                    },
                    {
                      text: 'Badge',
                      link: 'badge',
                    },
                    {
                      text: 'Team Page',
                      link: 'team-page',
                    },
                    {
                      text: 'Prev / Next Links',
                      link: 'prev-next-links',
                    },
                    {
                      text: 'Edit Link',
                      link: 'edit-link',
                    },
                    {
                      text: 'Last Updated Timestamp',
                      link: 'last-updated',
                    },
                    {
                      text: 'Search',
                      link: 'search',
                    },
                    {
                      text: 'Carbon Ads',
                      link: 'carbon-ads',
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      editLink: {
        pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
        text: 'Edit this page on GitHub',
      },
      socialLinks: [
        {
          icon: 'github',
          link: 'https://github.com/vuejs/vitepress',
        },
      ],
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2019-present Evan You',
      },
      search: {
        provider: 'algolia',
        options: {
          appId: '8J64VVRP8K',
          apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
          indexName: 'vitepress',
        },
      },
      carbonAds: {
        code: 'CEBDT27Y',
        placement: 'vuejsorg',
      },
    },
    locales: {},
    scrollOffset: 90,
    cleanUrls: true,
  },
  themeDir: 'D:/code/cheny/vitepress/docs/.vitepress/theme',
  pages: [
    'guide/asset-handling.md',
    'guide/cms.md',
    'guide/custom-theme.md',
    'guide/data-loading.md',
    'guide/deploy.md',
    'guide/extending-default-theme.md',
    'guide/frontmatter.md',
    'guide/getting-started.md',
    'guide/i18n.md',
    'guide/markdown.md',
    'guide/migration-from-vitepress-0.md',
    'guide/migration-from-vuepress.md',
    'guide/mpa-mode.md',
    'guide/routing.md',
    'guide/sitemap-generation.md',
    'guide/ssr-compat.md',
    'guide/using-vue.md',
    'guide/what-is-vitepress.md',
    'index.md',
    'reference/cli.md',
    'reference/default-theme-badge.md',
    'reference/default-theme-carbon-ads.md',
    'reference/default-theme-config.md',
    'reference/default-theme-edit-link.md',
    'reference/default-theme-footer.md',
    'reference/default-theme-home-page.md',
    'reference/default-theme-last-updated.md',
    'reference/default-theme-layout.md',
    'reference/default-theme-nav.md',
    'reference/default-theme-prev-next-links.md',
    'reference/default-theme-search.md',
    'reference/default-theme-sidebar.md',
    'reference/default-theme-team-page.md',
    'reference/frontmatter-config.md',
    'reference/runtime-api.md',
    'reference/site-config.md',
  ],
  dynamicRoutes: {
    routes: [],
    fileToModulesMap: {},
  },
  configPath: 'D:/code/cheny/vitepress/docs/.vitepress/config.ts',
  configDeps: ['D:/code/cheny/vitepress/docs/.vitepress/config.ts'],
  outDir: 'D:/code/cheny/vitepress/docs/.vitepress/dist',
  cacheDir: 'D:/code/cheny/vitepress/docs/.vitepress/cache',
  logger: {
    hasWarned: false,
  },
  tempDir: 'D:/code/cheny/vitepress/docs/.vitepress/.temp',
  markdown: {
    math: true,
  },
  lastUpdated: true,
  mpa: false,
  metaChunk: false,
  cleanUrls: true,
  useWebFonts: false,
  rewrites: {
    map: {},
    inv: {},
  },
  userConfig: {
    lang: 'en-US',
    title: 'VitePress',
    description: 'Vite & Vue powered static site generator.',
    lastUpdated: true,
    cleanUrls: true,
    markdown: {
      math: true,
    },
    sitemap: {
      hostname: 'https://vitepress.dev',
    },
    head: [
      [
        'link',
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/vitepress-logo-mini.svg',
        },
      ],
      [
        'link',
        {
          rel: 'icon',
          type: 'image/png',
          href: '/vitepress-logo-mini.png',
        },
      ],
      [
        'meta',
        {
          name: 'theme-color',
          content: '#5f67ee',
        },
      ],
      [
        'meta',
        {
          name: 'og:type',
          content: 'website',
        },
      ],
      [
        'meta',
        {
          name: 'og:locale',
          content: 'en',
        },
      ],
      [
        'meta',
        {
          name: 'og:site_name',
          content: 'VitePress',
        },
      ],
      [
        'meta',
        {
          name: 'og:image',
          content: 'https://vitepress.dev/vitepress-og.jpg',
        },
      ],
      [
        'script',
        {
          src: 'https://cdn.usefathom.com/script.js',
          'data-site': 'AZBRSFGG',
          'data-spa': 'auto',
          defer: '',
        },
      ],
      [
        'script',
        {
          id: 'check-dark-mode',
        },
        ";(() => {\n            const preference = localStorage.getItem('vitepress-theme-appearance') || 'auto'\n            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches\n            if (!preference || preference === 'auto' ? prefersDark : preference === 'dark')\n              document.documentElement.classList.add('dark')\n          })()",
      ],
      [
        'script',
        {
          id: 'check-mac-os',
        },
        "document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))",
      ],
    ],
    themeConfig: {
      logo: {
        src: '/vitepress-logo-mini.svg',
        width: 24,
        height: 24,
      },
      nav: [
        {
          text: 'Guide',
          link: '/guide/what-is-vitepress',
          activeMatch: '/guide/',
        },
        {
          text: 'Reference',
          link: '/reference/site-config',
          activeMatch: '/reference/',
        },
        {
          text: '1.0.0-rc.25',
          items: [
            {
              text: 'Changelog',
              link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md',
            },
            {
              text: 'Contributing',
              link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md',
            },
          ],
        },
      ],
      sidebar: {
        '/guide/': {
          base: '/guide/',
          items: [
            {
              text: 'Introduction',
              collapsed: false,
              items: [
                {
                  text: 'What is VitePress?',
                  link: 'what-is-vitepress',
                },
                {
                  text: 'Getting Started',
                  link: 'getting-started',
                },
                {
                  text: 'Routing',
                  link: 'routing',
                },
                {
                  text: 'Deploy',
                  link: 'deploy',
                },
              ],
            },
            {
              text: 'Writing',
              collapsed: false,
              items: [
                {
                  text: 'Markdown Extensions',
                  link: 'markdown',
                },
                {
                  text: 'Asset Handling',
                  link: 'asset-handling',
                },
                {
                  text: 'Frontmatter',
                  link: 'frontmatter',
                },
                {
                  text: 'Using Vue in Markdown',
                  link: 'using-vue',
                },
                {
                  text: 'Internationalization',
                  link: 'i18n',
                },
              ],
            },
            {
              text: 'Customization',
              collapsed: false,
              items: [
                {
                  text: 'Using a Custom Theme',
                  link: 'custom-theme',
                },
                {
                  text: 'Extending the Default Theme',
                  link: 'extending-default-theme',
                },
                {
                  text: 'Build-Time Data Loading',
                  link: 'data-loading',
                },
                {
                  text: 'SSR Compatibility',
                  link: 'ssr-compat',
                },
                {
                  text: 'Connecting to a CMS',
                  link: 'cms',
                },
              ],
            },
            {
              text: 'Experimental',
              collapsed: false,
              items: [
                {
                  text: 'MPA Mode',
                  link: 'mpa-mode',
                },
                {
                  text: 'Sitemap Generation',
                  link: 'sitemap-generation',
                },
              ],
            },
            {
              text: 'Config & API Reference',
              base: '/reference/',
              link: 'site-config',
            },
          ],
        },
        '/reference/': {
          base: '/reference/',
          items: [
            {
              text: 'Reference',
              items: [
                {
                  text: 'Site Config',
                  link: 'site-config',
                },
                {
                  text: 'Frontmatter Config',
                  link: 'frontmatter-config',
                },
                {
                  text: 'Runtime API',
                  link: 'runtime-api',
                },
                {
                  text: 'CLI',
                  link: 'cli',
                },
                {
                  text: 'Default Theme',
                  base: '/reference/default-theme-',
                  items: [
                    {
                      text: 'Overview',
                      link: 'config',
                    },
                    {
                      text: 'Nav',
                      link: 'nav',
                    },
                    {
                      text: 'Sidebar',
                      link: 'sidebar',
                    },
                    {
                      text: 'Home Page',
                      link: 'home-page',
                    },
                    {
                      text: 'Footer',
                      link: 'footer',
                    },
                    {
                      text: 'Layout',
                      link: 'layout',
                    },
                    {
                      text: 'Badge',
                      link: 'badge',
                    },
                    {
                      text: 'Team Page',
                      link: 'team-page',
                    },
                    {
                      text: 'Prev / Next Links',
                      link: 'prev-next-links',
                    },
                    {
                      text: 'Edit Link',
                      link: 'edit-link',
                    },
                    {
                      text: 'Last Updated Timestamp',
                      link: 'last-updated',
                    },
                    {
                      text: 'Search',
                      link: 'search',
                    },
                    {
                      text: 'Carbon Ads',
                      link: 'carbon-ads',
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      editLink: {
        pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
        text: 'Edit this page on GitHub',
      },
      socialLinks: [
        {
          icon: 'github',
          link: 'https://github.com/vuejs/vitepress',
        },
      ],
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2019-present Evan You',
      },
      search: {
        provider: 'algolia',
        options: {
          appId: '8J64VVRP8K',
          apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
          indexName: 'vitepress',
        },
      },
      carbonAds: {
        code: 'CEBDT27Y',
        placement: 'vuejsorg',
      },
    },
  },
  sitemap: {
    hostname: 'https://vitepress.dev',
  },
};
