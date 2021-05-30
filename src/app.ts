import $axios from 'axios'
import https from 'https'
import AuthController from './auth/auth.endpoint'
import ProductEndpoint from './market/product.endpoint'

abstract class Merkaly {

  protected readonly dsn!: string
  public readonly $auth = AuthController

  public constructor (dsn: string) {
    this.dsn = dsn
    $axios.defaults.baseURL = dsn
    $axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false })
  }

}

export class Cloud extends Merkaly {

}

export class Account extends Merkaly {

}

export class Admin extends Merkaly {
  public readonly $product = ProductEndpoint
}

export class Client extends Merkaly {

}
