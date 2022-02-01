import { join } from 'path'
import { $StorePath } from '@merkaly/api/src/store'
import { CreateOrderValidator, OrderEntity, UpdateOrderValidator } from '@merkaly/api/src/store/orders'
import axios from '../../app.axios'
import OrderReference from './order.reference'

export const route = (...path: string[]) => join($StorePath, OrderEntity.$path, ...path)

export default class Order {
  public static readonly find = (): Promise<OrderReference[]> => axios.$get(route())

  public static readonly read = (id: string): Promise<OrderReference> => axios.$get(route(id))

  public static readonly create = (payload: CreateOrderValidator): Promise<OrderReference> => axios.$post(route(), payload)

  public static readonly update = (id: string, payload: UpdateOrderValidator): Promise<OrderReference> => axios.$put(route(id), payload)

  public static readonly remove = (id: string): Promise<void> => axios.$delete(route(id))
}
