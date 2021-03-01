const resolve = require('path').resolve

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  srcDir: __dirname,
  modules: [
    '~/../../lib/module'
  ],
  plugins: [
    './plugins/1.plugin.client.js',
    './plugins/2.plugin.client.js',
    './plugins/3.plugin.client.js'
  ],
  dev: (process.env.NODE_ENV !== 'test' && process.env.NODE_ENV === 'production')
}
