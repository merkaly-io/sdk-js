import {
  CreateCartValidator,
  FindCartValidator,
  IdCartValidator,
  UpdateCartValidator
} from '@merkaly/api/src/store/carts/cart.validator'
import { plainToInstance } from 'class-transformer'
import useAxios from '../../../hooks/useAxios'
import CartReference from './cart.reference'

namespace Cart {
  export const find = (params?: FindCartValidator) => {
    return useAxios.$get<CartReference[]>('/store/carts', { params })
      .then(carts => carts.map(cart => plainToInstance(FindCartValidator, cart)))
  }

  export const read = (id: IdCartValidator) => {
    return useAxios.$get<CartReference>('/store/carts' + id)
      .then(cart => plainToInstance(FindCartValidator, cart))
  }

  export const create = (payload: CreateCartValidator) => {
    return useAxios.$post<CartReference>('/store/carts', payload)
      .then(cart => plainToInstance(FindCartValidator, cart))
  }

  export const update = (id: IdCartValidator, payload: UpdateCartValidator) => {
    return useAxios.$patch<CartReference>('/store/carts' + id, payload)
      .then(cart => plainToInstance(FindCartValidator, cart))
  }

  export const remove = (id: IdCartValidator) => {
    return useAxios.$delete<void>('/store/carts' + id)
  }
}

export default Cart
