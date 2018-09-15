export default (context) => {
  if (process.browser) {
    setTimeout(() => {
      context.store.dispatch('nuxtClientInit', context)
    }, 0)
  }
}
