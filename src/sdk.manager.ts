import Account from './account'
import Inventory from './inventory'
import MerkalySDK from './sdk'

export class ManagerSDK extends MerkalySDK {
  public account = Account
  public inventory = Inventory
}
