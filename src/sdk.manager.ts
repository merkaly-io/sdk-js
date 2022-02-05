import MerkalySDK from './sdk'
import Account from './account'
// import Inventory from './inventory'

export class ManagerSDK extends MerkalySDK {
  public readonly account = Account
  // public readonly inventory = Inventory
}
