import { Context } from '@nuxt/types'
import { ManagerSDK } from '@/src'

declare module '@nuxt/types' {
  interface Context {
    $merkaly: ManagerSDK
  }

  interface NuxtAppOptions {
    $merkaly: ManagerSDK
  }

  interface Configuration {
    merkaly?: ManagerSDK
  }
}

export default ({ app, $config }: Context, inject: Function) => {
  app.$merkaly = new ManagerSDK($config.merkaly?.baseUrl)
  inject('merkaly', app.$merkaly)
}
