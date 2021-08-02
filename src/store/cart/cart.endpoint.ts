import { Store } from '@merkaly/api'
import $axios from 'axios'
import { join } from 'path'
import CartReference from './cart.reference'

const route = (...path: string[]) => join(Store.$path, Store.Cart.Entity.$path, ...path)

namespace Cart {
  export const find = async () =>
  	$axios.get<CartReference[]>(route())

  export const read = async (id: string) =>
  	$axios.get<CartReference>(route(id))

  export const create = async (payload: Store.Cart.validators.CreateCartValidator) =>
  	$axios.post<CartReference>(route(), payload)

  export const update = async (id: string, payload: Store.Cart.validators.UpdateCartValidator) =>
  	$axios.put<CartReference>(route(id), payload)

  export const remove = async (id: string) =>
  	$axios.delete<void>(route(id))

}

export default Cart
