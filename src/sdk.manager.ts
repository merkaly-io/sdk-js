import MerkalySDK from './.sdk'
import Account from './account/index'
import Inventory from './inventory/index'

export class ManagerSDK extends MerkalySDK {
  public readonly account = Account
  public readonly inventory = Inventory
}
