import { AxiosStatic } from 'axios'
import AuthController from './modules/auth/auth.controller'
import ProductController from './modules/market/product.controller'
import $axios from './plugin/axios'

abstract class Merkaly {

  protected readonly dsn!: string
  protected readonly axios: AxiosStatic

  protected constructor (dsn: string) {
    $axios.setBaseUrl(dsn)
    this.axios = $axios
  }

  get $auth () {
    return AuthController
  }

}

export class Cloud {

}

export class Account {

}

export class Admin {
  public get product () {
    return new ProductController()
  }
}

export class Client {

}
