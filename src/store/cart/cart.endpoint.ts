import { $StorePath, CartEntity, CreateCartValidator, UpdateCartValidator } from '@merkaly/api/src/store'
import { join } from 'path'
import axios from '../../app.axios'
import CartReference from './cart.reference'

export const route = (...path: string[]) => join($StorePath, CartEntity.$path, ...path)

namespace Cart {
  export async function find (): Promise<CartReference[]> {
  	return axios.$get(route())
  }

  export async function read (id: string): Promise<CartReference> {
  	return axios.$get(route(id))
  }

  export async function create (payload: CreateCartValidator): Promise<CartReference> {
  	return axios.$post(route(), payload)
  }

  export async function update (id: string, payload: UpdateCartValidator): Promise<CartReference> {
  	return axios.$put(route(id), payload)
  }

  export async function remove (id: string): Promise<void> {
  	return axios.$delete(route(id))
  }
}

export default Cart
