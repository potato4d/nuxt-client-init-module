export default (context) => {
  if (process.browser) {
    context.store.dispatch('nuxtClientInit')
  }
}
