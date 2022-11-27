import { Account } from './account'
import { Inventory } from './inventory'
import { Store } from './store'

abstract class SDK {
}

export class DashboardSDK extends SDK {
  public readonly account = new Account()
  public readonly inventory = new Inventory()
  public readonly sales = new Store()
}

export class AdminSDK extends SDK {
  public readonly account = new Account()
  public readonly inventory = new Inventory()
  public readonly sales = new Store()
}
