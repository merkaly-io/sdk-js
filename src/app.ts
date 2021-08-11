import $axios from 'axios'
import https from 'https'
import Account from './account'
import Inventory from './inventory'
import Store from './store'

namespace SDK {
  export const setBaseUrl = (dsn: string) => {
    $axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false })
    $axios.defaults.baseURL = dsn
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
        organizations: Account.useOrganization(),
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
