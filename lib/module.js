const path = require('path')

const defaults = {
  locales: [],
  plugin: true
}

module.exports = function clientInitModule() {
  this.addPlugin(
    path.resolve(__dirname, 'module.plugin.client.js')
  )
}

module.exports.meta = require('../package.json')
