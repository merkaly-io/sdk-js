import { join } from 'path'
import { $StorePath, CartEntity, CreateCartValidator, UpdateCartValidator } from '@merkaly/api/src/store'
import CartReference from './cart.reference'

export const route = (...path: string[]) => join($StorePath, CartEntity.$path, ...path)

export default class Cart {
  public static readonly find = (): Promise<CartReference[]> => $nuxt.$axios.get(route())

  public static readonly read = (id: string): Promise<CartReference> => $nuxt.$axios.get(route(id))

  public static readonly create = (payload: CreateCartValidator): Promise<CartReference> => $nuxt.$axios.post(route(), payload)

  public static readonly update = (id: string, payload: UpdateCartValidator): Promise<CartReference> => $nuxt.$axios.put(route(id), payload)

  public static readonly remove = (id: string): Promise<void> => $nuxt.$axios.delete(route(id))
}
