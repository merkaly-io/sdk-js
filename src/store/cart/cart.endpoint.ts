import { $StorePath, CartEntity, CreateCartValidator, UpdateCartValidator } from '@merkaly/api/src/store'
import $axios from 'axios'
import { join } from 'path'
import CartReference from './cart.reference'

const route = (...path: string[]) => join($StorePath, CartEntity.$path, ...path)

namespace Cart {
  export async function find () {
    return $axios.get<CartReference[]>(route())
  }

  export async function read (id: string) {
    return $axios.get<CartReference>(route(id))
  }

  export async function create (payload: CreateCartValidator) {
    return $axios.post<CartReference>(route(), payload)
  }

  export async function update (id: string, payload: UpdateCartValidator) {
    return $axios.put<CartReference>(route(id), payload)
  }

  export async function remove (id: string) {
    return $axios.delete<void>(route(id))
  }

}

export default Cart
