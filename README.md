# nuxtClientInit module

> Provide client version of `nuxtServerInit`.

`nuxt-client-init-module` provides Nuxt.js with the ability to inject processing at client initialization.
Just like `nuxtServerInit`, it is possible to implement the` nuxtClientInit` action, which is executed only on the client-side rendering, in the root Vuex module.

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
