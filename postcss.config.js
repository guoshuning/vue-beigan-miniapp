const pkg = require('./package.json')
module.exports = {
  plugins: [
    require('postcss-import'),
    require('autoprefixer')({
      remove: false
    }),
    require('@dcloudio/vue-cli-plugin-uni/packages/postcss')
  ]
}
