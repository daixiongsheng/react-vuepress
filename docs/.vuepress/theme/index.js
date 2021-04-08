const path = require('path')

module.exports = (themeConfig, ctx) => {
  return {
    extend: '@vuepress/theme-default',
    plugins: [
      '@vuepress/back-to-top',
    ]
  }
}
