import { NuxtAppOptions } from '@nuxt/types'
import Account from './account'
import MerkalySDK from './sdk'

// import Inventory from './inventory'

export class ManagerSDK extends MerkalySDK {
  public readonly account

  // public readonly inventory = Inventory

  constructor ($app: NuxtAppOptions) {
    super($app)

    this.account = Account($app.$axios)
  }
}
