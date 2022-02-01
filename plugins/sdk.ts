import { Context } from '@nuxt/types'
import { ManagerSDK } from '@/src'

declare module 'vue/types/vue' {
  interface Vue {
    $merkaly: ManagerSDK
  }
}

export default ({ app, $config }: Context, inject: Function) => {
  app.$merkaly = new ManagerSDK($config.merkaly?.baseUrl)
  inject('merkaly', app.$merkaly)

  return app.$merkaly
}
