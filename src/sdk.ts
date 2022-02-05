import { NuxtAppOptions } from '@nuxt/types'
import { Auth } from '@nuxtjs/auth-next'

export default abstract class MerkalySDK {
  public readonly $app: NuxtAppOptions
  public readonly auth: Auth

  constructor ($app: NuxtAppOptions) {
    this.$app = $app
    this.auth = this.$app.$auth
  }
}
