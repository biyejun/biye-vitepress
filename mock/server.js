const config = {
  root: 'D:/code/cheny/vitepress/docs',
  base: '/',
  cacheDir: 'D:/code/cheny/vitepress/docs/.vitepress/cache',
  plugins: [
    {
      name: 'vitepress',
    },
    {
      name: 'vitepress:rewrites',
    },
    {
      name: 'vite:vue',
    },
    {
      name: 'vitepress:hmr-fix',
    },
    {
      name: 'vitepress:webfonts',
      enforce: 'pre',
    },
    {
      name: 'vitepress:local-search',
    },
    {
      name: 'vitepress:data',
    },
    {
      name: 'vitepress:dynamic-routes',
    },
  ],
  server: {
    _: ['dev'],
  },
  customLogger: {
    hasWarned: false,
  },
};
