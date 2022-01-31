import Account from './account'
import axios from './app.axios'
import Inventory from './inventory'
import Store from './store'

namespace SDK {
  export const setBaseUrl = (dsn: string) => {
  	axios.setBaseUrl(dsn, false)
  }

  export class Admin {
  	public get inventory () {
  		return {
  			products: Inventory.products(),
  			brands: Inventory.brands(),
  			properties: Inventory.properties(),
  			categories: Inventory.categories()
  		}
  	}

  	public get account () {
  		return {
  			organizations: Account.organizations(),
  			users: Account.users(),
  			roles: Account.roles()
  		}
  	}


  	public get store () {
  		return {
  			orders: Store.orders(),
  			carts: Store.carts()
  		}
  	}
  }

  export class Manager {
  	public get account () {
  		return {
  			organizations: Account.organizations(),
  			users: Account.users(),
  			roles: Account.roles()
  		}
  	}

  	public get inventory () {
  		return {
  			products: Inventory.products(),
  			properties: Inventory.properties(),
  			categories: Inventory.categories(),
  			brands: Inventory.brands()
  		}
  	}
  }
}

export default SDK
