import {
  CreateCartValidator,
  FindCartValidator,
  IdCartValidator,
  UpdateCartValidator
} from '@merkaly/api/src/store/carts/cart.validator'
import { plainToInstance } from 'class-transformer'
import CartReference from './cart.reference'

namespace Cart {
  export const find = (params?: FindCartValidator) => {
    return $nuxt.$api.$get<CartReference[]>('/store/carts', { params })
      .then(carts => carts.map(cart => plainToInstance(FindCartValidator, cart)))
  }

  export const read = (id: IdCartValidator) => {
    return $nuxt.$api.$get<CartReference>('/store/carts' + id)
      .then(cart => plainToInstance(FindCartValidator, cart))
  }

  export const create = (payload: CreateCartValidator) => {
    return $nuxt.$api.$post<CartReference>('/store/carts', payload)
      .then(cart => plainToInstance(FindCartValidator, cart))
  }

  export const update = (id: IdCartValidator, payload: UpdateCartValidator) => {
    return $nuxt.$api.$patch<CartReference>('/store/carts' + id, payload)
      .then(cart => plainToInstance(FindCartValidator, cart))
  }

  export const remove = (id: IdCartValidator) => {
    return $nuxt.$api.$delete<void>('/store/carts' + id)
  }
}

export default Cart
