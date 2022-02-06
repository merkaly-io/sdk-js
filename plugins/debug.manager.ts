import { Context } from '@nuxt/types'
import { ManagerSDK } from '../index'
//
declare module 'vue/types/vue' {
  interface Vue {
    $merkaly: ManagerSDK
  }
}

export default ({ app }: Context, inject: Function) => {
  app.$merkaly = new ManagerSDK()
  inject('merkaly', app.$merkaly)

  return app.$merkaly
}
