import { join } from 'path'
import { $StorePath, CartEntity, CreateCartValidator, UpdateCartValidator } from '@merkaly/api/src/store'
import axios from '../../app.axios'
import CartReference from './cart.reference'

export const route = (...path: string[]) => join($StorePath, CartEntity.$path, ...path)

export default class Cart {
  public static readonly find = (): Promise<CartReference[]> => axios.$get(route())

  public static readonly read = (id: string): Promise<CartReference> => axios.$get(route(id))

  public static readonly create = (payload: CreateCartValidator): Promise<CartReference> => axios.$post(route(), payload)

  public static readonly update = (id: string, payload: UpdateCartValidator): Promise<CartReference> => axios.$put(route(id), payload)

  public static readonly remove = (id: string): Promise<void> => axios.$delete(route(id))
}
