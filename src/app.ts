import $axios from 'axios'
import https from 'https'
import AuthController from './modules/auth/auth.controller'
import ProductController from './modules/market/product.controller'

abstract class Merkaly {

  protected readonly dsn!: string

  protected constructor (dsn: string) {
    this.dsn = dsn
    $axios.defaults.baseURL = dsn
    $axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false })
  }

  get $auth () {
    return AuthController
  }

}

export class Cloud extends Merkaly {

}

export class Account extends Merkaly {

}

export class Admin extends Merkaly {
  public get product () {
    return new ProductController()
  }
}

export class Client extends Merkaly {

}
