const path = require('path')

const defaults = {
  locales: [],
  plugin: true
}

module.exports = function clientInitModule() {
  this.addPlugin(
    path.resolve(__dirname, 'module.plugin.js')
  )
}

module.exports.meta = require('../package.json')
