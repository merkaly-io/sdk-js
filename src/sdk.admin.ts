import { Account } from './account'
import { Inventory } from './inventory'
import MerkalySDK from './sdk'
import { Store } from './store'

export class AdminSDK extends MerkalySDK {
  public readonly account = new Account()
  public readonly inventory = new Inventory()
  public readonly store = new Store()
}
 
