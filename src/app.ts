import $axios from 'axios'
import https from 'https'
import AuthEndpoint from './auth/auth.endpoint'
import BrandEndpoint from './inventory/brand.endpoint'
import CategoryEndpoint from './inventory/category.endpoint'
import ProductEndpoint from './inventory/product.endpoint'
import PropertyEndpoint from './inventory/property.endpoint'

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
  public readonly $product = ProductEndpoint
  public readonly $brand = BrandEndpoint
  public readonly $property = PropertyEndpoint
  public readonly $category = CategoryEndpoint
}

export class Cloud extends Admin {

}

