import AuthController from './modules/auth.controller'
import ProductController from './modules/market/product.controller'

abstract class Merkaly {

  get auth () {
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

export class MerkalyClient {

}
