import $axios from 'axios'
import https from 'https'
import * as accountEndpoint from './auth'
import * as businessEndpoint from './business'
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
  public readonly $auth = accountEndpoint.auth
}

export class Client extends Account {

}

export class Admin extends Client {
  public readonly $product = inventoryEndpoint.product
  public readonly $brand = inventoryEndpoint.brand
  public readonly $property = inventoryEndpoint.property
  public readonly $category = inventoryEndpoint.category
}

export class Cloud extends Admin {
  public readonly $customer = businessEndpoint.customer
}

