import { $StorePath, CartEntity, CreateCartValidator, UpdateCartValidator } from '@merkaly/api/src/store'
import $axios from 'axios'
import { join } from 'path'
import CartReference from './cart.reference'

const route = (...path: string[]) => join($StorePath, CartEntity.$path, ...path)

namespace Cart {
  export const find = async () =>
    $axios.get<CartReference[]>(route())

  export const read = async (id: string) =>
    $axios.get<CartReference>(route(id))

  export const create = async (payload: CreateCartValidator) =>
    $axios.post<CartReference>(route(), payload)

  export const update = async (id: string, payload: UpdateCartValidator) =>
    $axios.put<CartReference>(route(id), payload)

  export const remove = async (id: string) =>
    $axios.delete<void>(route(id))

}

export default Cart
