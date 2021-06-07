import $axios from 'axios'
import https from 'https'
import AuthEndpoint from './auth/auth.endpoint'
import ProductEndpoint from './inventory/product.endpoint'

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
}

export class Cloud extends Admin {

}

