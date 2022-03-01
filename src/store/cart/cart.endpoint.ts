import { CreateCartValidator, UpdateCartValidator } from '@merkaly/api/src/store/carts/cart.validator'
import CartReference from './cart.reference'

namespace Cart {
  export const find = (): Promise<CartReference[]> => {
    return $nuxt.$api.$get('/store/carts')
  }

  export const read = (id: string): Promise<CartReference> => {
    return $nuxt.$api.$get('/store/carts' + id)
  }

  export const create = (payload: CreateCartValidator): Promise<CartReference> => {
    return $nuxt.$api.$post('/store/carts', payload)
  }

  export const update = (id: string, payload: UpdateCartValidator): Promise<CartReference> => {
    return $nuxt.$api.$patch('/store/carts' + id, payload)
  }

  export const remove = (id: string): Promise<void> => {
    return $nuxt.$api.$delete('/store/carts' + id)
  }
}

export default Cart
