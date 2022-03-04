import { Account } from './account'
import { Inventory } from './inventory'
import MerkalySDK from './sdk'

export class ManagerSDK extends MerkalySDK {
  public readonly account = new Account()
  public readonly inventory = Inventory
}
