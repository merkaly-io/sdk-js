import { join } from 'path'
import { $StorePath, CartEntity, CreateCartValidator, UpdateCartValidator } from '@merkaly/api/src/store'
import axios from '../../app.axios'
import CartReference from './cart.reference'

export const route = (...path: string[]) => join($StorePath, CartEntity.$path, ...path)

namespace Cart {
  export const find = (): Promise<CartReference[]> => axios.$get(route())

  export const read = (id: string): Promise<CartReference> => axios.$get(route(id))

  export const create = (payload: CreateCartValidator): Promise<CartReference> => axios.$post(route(), payload)

  export const update = (id: string, payload: UpdateCartValidator): Promise<CartReference> => axios.$put(route(id), payload)

  export const remove = (id: string): Promise<void> => axios.$delete(route(id))
}

export default Cart
