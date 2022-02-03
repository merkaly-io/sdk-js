import { join } from 'path'
import { $StorePath, CartEntity, CreateCartValidator, UpdateCartValidator } from '@merkaly/api/src/store'
import CartReference from './cart.reference'

export const route = (...path: string[]) => join($StorePath, CartEntity.$path, ...path)

namespace Cart {
  export const find = (): Promise<CartReference[]> => {
    return $nuxt.$axios.get(route())
  }

  export const read = (id: string): Promise<CartReference> => {
    return $nuxt.$axios.get(route(id))
  }

  export const create = (payload: CreateCartValidator): Promise<CartReference> => {
    return $nuxt.$axios.post(route(), payload)
  }

  export const update = (id: string, payload: UpdateCartValidator): Promise<CartReference> => {
    return $nuxt.$axios.put(route(id), payload)
  }

  export const remove = (id: string): Promise<void> => {
    return $nuxt.$axios.delete(route(id))
  }
}

export default Cart
