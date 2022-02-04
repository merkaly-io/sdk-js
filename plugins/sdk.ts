import { Context } from '@nuxt/types'
import SDK from '../src/.sdk'
import { ManagerSDK } from '../index'

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
  app.$axios.interceptors.response.use(({ data }) => data)

  const sdk = new ManagerSDK() || $config.merkaly

  app.$merkaly = sdk
  inject('merkaly', sdk)
}
