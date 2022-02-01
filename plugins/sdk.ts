import { Context } from '@nuxt/types'
import SDK from '@/src/.sdk'

declare module '@nuxt/types' {
  interface Context {
    $merkaly: SDK
  }

  interface NuxtAppOptions {
    $merkaly: SDK
  }

  interface Configuration {
    merkaly?: SDK
  }
}

export default ({ app, $config }: Context, inject: Function) => {
  // @ts-ignore
  const sdk = $config.merkaly
  app.$merkaly = sdk
  inject('merkaly', sdk || null)
}
