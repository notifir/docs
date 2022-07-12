const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  //unstable_staticImage: true,
  basePath: '/docs'
})
module.exports = {
  ...withNextra(),
  images: {
    loader: 'akamai',
    path: ''
  },
  basePath: '/docs',
  assetPrefix: '/docs'
}
