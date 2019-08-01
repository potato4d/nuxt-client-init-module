export default async (context) => {
  if (process.browser) {
    await context.store.dispatch('nuxtClientInit', context)
  }
}
