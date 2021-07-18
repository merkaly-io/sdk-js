import $axios from 'axios'
import https from 'https'
import * as accountEndpoint from './account'
import * as authEndpoint from './auth'
import * as inventoryEndpoint from './inventory'

namespace SDK {

  export const setBaseUrl = (dsn: string) => {
    $axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false })
    $axios.defaults.baseURL = dsn
  }

  export class Account {
    public readonly $auth = authEndpoint.auth
  }

  export class Client {

  }

  export class Admin {
    public get inventory () {
      return {
        products: inventoryEndpoint.product,
        brands: inventoryEndpoint.brand,
        properties: inventoryEndpoint.property,
        categories: inventoryEndpoint.category
      }
    }

    public get account () {
      return {
        users: accountEndpoint.user,
        roles: accountEndpoint.role
      }
    }
  }

  export class Manager {
    public get account () {
      return {
        organizations: accountEndpoint.organization,
        users: accountEndpoint.user,
        roles: accountEndpoint.role
      }
    }
  }
}

export default SDK
