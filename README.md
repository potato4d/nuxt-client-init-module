# nuxtClientInit module

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![donate: Patreon](https://img.shields.io/badge/donate-patreon-orange.svg?style=flat-square)](https://www.patreon.com/potato4d)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![NPM version](https://img.shields.io/npm/v/nuxt-client-init-module.svg?style=flat)](https://npmjs.com/package/nuxt-client-init-module)
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors)
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

on nuxt.config.js

```
{
  ...
  modules: [
   'nuxt-client-init-module'
  ]
  ...
}
```

on store/index.js

```
export const actions = {
  nuxtClientInit({ commit }, context) {
    // code
  }
}
```

## Author

- [potato4d](https://twitter.com/potato4d)

## LICENSE

MIT

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://potato4d.me"><img src="https://avatars0.githubusercontent.com/u/6993514?v=4" width="100px;" alt="HANATANI Takuma"/><br /><sub><b>HANATANI Takuma</b></sub></a><br /><a href="https://github.com/potato4d/nuxt-client-init-module/commits?author=potato4d" title="Code">💻</a> <a href="https://github.com/potato4d/nuxt-client-init-module/issues?q=author%3Apotato4d" title="Bug reports">🐛</a> <a href="#review-potato4d" title="Reviewed Pull Requests">👀</a> <a href="#question-potato4d" title="Answering Questions">💬</a></td>
    <td align="center"><a href="https://github.com/Tosuke"><img src="https://avatars2.githubusercontent.com/u/13393900?v=4" width="100px;" alt="tosuke"/><br /><sub><b>tosuke</b></sub></a><br /><a href="https://github.com/potato4d/nuxt-client-init-module/issues?q=author%3ATosuke" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://miyaoka.github.io/"><img src="https://avatars2.githubusercontent.com/u/1443118?v=4" width="100px;" alt="Masaya Kazama"/><br /><sub><b>Masaya Kazama</b></sub></a><br /><a href="https://github.com/potato4d/nuxt-client-init-module/issues?q=author%3Amiyaoka" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/NomNes"><img src="https://avatars2.githubusercontent.com/u/12662211?v=4" width="100px;" alt="Nikita Umnov"/><br /><sub><b>Nikita Umnov</b></sub></a><br /><a href="https://github.com/potato4d/nuxt-client-init-module/commits?author=NomNes" title="Code">💻</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
