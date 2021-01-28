export default async function (context) {
  if (process.browser) {
    await context.store.dispatch('nuxtClientInit', context)
  }
}
