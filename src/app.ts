import $axios from '../src/plugin/axios'
import ProductController from './modules/market/product.controller'

abstract class Merkaly {

  get auth () {

    return {
      async login (username = process.env.username, password = process.env.password) {

        return $axios.post('/auth/login', { username, password })
          .then(({ data: { accessToken } }) => $axios.setToken(accessToken))
      }
    }
  }
}

export class Cloud extends Merkaly {

}

export class Account extends Merkaly {

}

export class Admin extends Merkaly {
  public product = new ProductController()
}

export class MerkalyClient {

}
