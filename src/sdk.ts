import { NuxtAppOptions } from '@nuxt/types'

export default abstract class MerkalySDK {
  public readonly $app: NuxtAppOptions

  constructor ($app: NuxtAppOptions) {
    this.$app = $app
  }
}
