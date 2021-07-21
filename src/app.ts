import $axios from 'axios'
import https from 'https'
import Account from './account'
import Inventory from './inventory'

namespace SDK {
  export const setBaseUrl = (dsn: string) => {
    $axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false })
    $axios.defaults.baseURL = dsn
  }

  export class Admin {
    public get inventory () {
      return {
        products: Inventory.Product,
        brands: Inventory.Brand,
        properties: Inventory.Property,
        categories: Inventory.Category
      }
    }

    public get account () {
      return {
        users: Account.User,
        roles: Account.Role
      }
    }
  }

  export class Manager {
    public get account () {
      return {
        organizations: Account.Organization,
        users: Account.User,
        roles: Account.Role
      }
    }
  }
}

export default SDK
