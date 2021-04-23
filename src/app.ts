import AuthController from './modules/auth.controller'
import ProductController from './modules/market/product.controller'
import $axios from './plugin/axios'

class Cloud {

}

class Account {

}

class Admin {
  public get product () {
    return new ProductController()
  }
}

class Client {

}

export default class Merkaly {

  protected readonly dsn!: string


  constructor (dsn: string) {
    $axios.setBaseUrl(dsn)
  }

  get $auth () {
    return AuthController
  }

  get $admin () {
    return new Admin()
  }

  get $cloud () {
    return new Cloud()
  }

  get $account () {
    return new Account()
  }

  get $client () {
    return new Client()
  }
}
