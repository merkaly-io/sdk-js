import { Context } from '@nuxt/types'
import SDK from '@/src/.sdk'
import { ManagerSDK } from '~/src'

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
  const sdk = new ManagerSDK() || $config.merkaly
  app.$merkaly = sdk
  inject('merkaly', sdk)
}
