import MerkalySDK from './sdk'
import Account from './account/index'
import Inventory from './inventory/index'
import Store from './store/index'

export class AdminSDK extends MerkalySDK {
  public readonly account = Account
  public readonly inventory = Inventory
  public readonly store = Store
}
