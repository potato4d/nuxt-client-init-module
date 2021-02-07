const path = require('path')

const defaults = {
  locales: [],
  plugin: true
}

module.exports = function clientInitModule() {
  this.addPlugin(
    path.resolve(__dirname, 'nuxt-client-init.plugin.client.js')
  )

  const pluginIndex = this
  .options
  .plugins
  .findIndex(({ src }) => src.match(/.+nuxt-client-init\.plugin\.client\..+/))

  const targetPlugin = this.options.plugins[pluginIndex]

  this.options.plugins.splice(pluginIndex, 1)
  this.options.plugins.push(targetPlugin)
}

module.exports.meta = require('../package.json')
