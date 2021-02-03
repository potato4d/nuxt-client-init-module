export default async function (context) {
  await context.store.dispatch('nuxtClientInit', context)
}
