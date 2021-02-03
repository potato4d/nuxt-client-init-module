# nuxtClientInit module

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![donate: Patreon](https://img.shields.io/badge/donate-patreon-orange.svg?style=flat-square)](https://www.patreon.com/potato4d)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![NPM version](https://img.shields.io/npm/v/nuxt-client-init-module.svg?style=flat)](https://npmjs.com/package/nuxt-client-init-module)
[![All Contributors](https://img.shields.io/badge/all_contributors-7-orange.svg?style=flat-square)](#contributors)
[![NPM downloads](https://img.shields.io/npm/dm/nuxt-client-init-module.svg?style=flat)](https://npmjs.com/package/nuxt-client-init-module)
[![codecov](https://codecov.io/gh/potato4d/nuxt-client-init-module/branch/master/graph/badge.svg)](https://codecov.io/gh/potato4d/nuxt-client-init-module)

> Provide client version of `nuxtServerInit`.

`nuxt-client-init-module` provides Nuxt.js with the ability to inject processing at client initialization.
Just like `nuxtServerInit`, it is possible to implement the` nuxtClientInit` action, which is executed only on the client-side rendering, in the root Vuex module.

<a href="https://patreon.com/potato4d">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" height="50">
</a>

## Installation

```bash
$ yarn add nuxt-client-init-module
```

## Usage

in nuxt.config.js

```js
{
  ...
  modules: [
   'nuxt-client-init-module'
  ]
  ...
}
```

in store/index.js

```js
export const actions = {
  nuxtClientInit({ commit }, context) {
    // code
  }
}
```

**Note:** When working with other modules (e.g. axios) that are needed during `nuxtClientInit`, `nuxt-client-init-module` should appear earlier in the `modules` section of `nuxt.config.js` for correct functionality.

## Author

- [potato4d](https://twitter.com/potato4d)

## LICENSE

MIT

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://potato4d.me"><img src="https://avatars0.githubusercontent.com/u/6993514?v=4?s=100" width="100px;" alt=""/><br /><sub><b>HANATANI Takuma</b></sub></a><br /><a href="https://github.com/potato4d/nuxt-client-init-module/commits?author=potato4d" title="Code">💻</a> <a href="https://github.com/potato4d/nuxt-client-init-module/issues?q=author%3Apotato4d" title="Bug reports">🐛</a> <a href="https://github.com/potato4d/nuxt-client-init-module/pulls?q=is%3Apr+reviewed-by%3Apotato4d" title="Reviewed Pull Requests">👀</a> <a href="#question-potato4d" title="Answering Questions">💬</a></td>
    <td align="center"><a href="https://github.com/Tosuke"><img src="https://avatars2.githubusercontent.com/u/13393900?v=4?s=100" width="100px;" alt=""/><br /><sub><b>tosuke</b></sub></a><br /><a href="https://github.com/potato4d/nuxt-client-init-module/issues?q=author%3ATosuke" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://miyaoka.github.io/"><img src="https://avatars2.githubusercontent.com/u/1443118?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Masaya Kazama</b></sub></a><br /><a href="https://github.com/potato4d/nuxt-client-init-module/issues?q=author%3Amiyaoka" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/NomNes"><img src="https://avatars2.githubusercontent.com/u/12662211?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nikita Umnov</b></sub></a><br /><a href="https://github.com/potato4d/nuxt-client-init-module/commits?author=NomNes" title="Code">💻</a></td>
    <td align="center"><a href="http://kamikazechaser.live"><img src="https://avatars2.githubusercontent.com/u/18488025?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mohammed Sohail</b></sub></a><br /><a href="https://github.com/potato4d/nuxt-client-init-module/commits?author=kamikazechaser" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/colmer"><img src="https://avatars1.githubusercontent.com/u/4122445?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Anton Sitnikov</b></sub></a><br /><a href="https://github.com/potato4d/nuxt-client-init-module/commits?author=colmer" title="Documentation">📖</a></td>
    <td align="center"><a href="http://simoneldevig.dk/"><img src="https://avatars.githubusercontent.com/u/6176830?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Simon Eldevig</b></sub></a><br /><a href="https://github.com/potato4d/nuxt-client-init-module/issues?q=author%3Asimoneldevig" title="Bug reports">🐛</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/DmitryBelichack"><img src="https://avatars.githubusercontent.com/u/14155180?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dmitry Belichack</b></sub></a><br /><a href="https://github.com/potato4d/nuxt-client-init-module/commits?author=DmitryBelichack" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
