import $axios from 'axios'
import https from 'https'
import * as accountEndpoint from './account'
import * as authEndpoint from './auth'
import * as inventoryEndpoint from './inventory'

export abstract class SDK {

  private readonly dsn!: string

  public constructor (dsn: string) {
    this.dsn = dsn
    $axios.defaults.baseURL = dsn
    $axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false })
  }

}

export class Account extends SDK {
  public readonly $auth = authEndpoint.auth
}

export class Client extends SDK {

}

export class Admin extends SDK {
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
      users: accountEndpoint.organization,
      roles: accountEndpoint.organization
    }
  }
}

export class Manager extends SDK {
  public get account () {
    return {
      organizations: accountEndpoint.organization,
      users: accountEndpoint.user,
      roles: accountEndpoint.role
    }
  }
}
