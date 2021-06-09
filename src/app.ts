import $axios from 'axios'
import https from 'https'
import AuthEndpoint from './auth/auth.endpoint'
import * as brandEndpoint from './inventory/brand.endpoint'
import * as categoryEndpoint from './inventory/category.endpoint'
import * as productEndpoint from './inventory/product.endpoint'
import * as propertyEndpoint from './inventory/property.endpoint'

export abstract class SDK {

  private readonly dsn!: string

  public constructor (dsn: string) {
    this.dsn = dsn
    $axios.defaults.baseURL = dsn
    $axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false })
  }

}

export class Account extends SDK {
  public readonly $auth = AuthEndpoint
}

export class Client extends Account {

}

export class Admin extends Client {
  public readonly $product = productEndpoint
  public readonly $brand = brandEndpoint
  public readonly $property = propertyEndpoint
  public readonly $category = categoryEndpoint
}

export class Cloud extends Admin {

}

