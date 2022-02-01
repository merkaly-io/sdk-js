import { join } from 'path'
import { $StorePath } from '@merkaly/api/src/store'
import { CreateOrderValidator, OrderEntity, UpdateOrderValidator } from '@merkaly/api/src/store/orders'
import axios from '../../app.axios'
import OrderReference from './order.reference'

export const route = (...path: string[]) => join($StorePath, OrderEntity.$path, ...path)

namespace Order {
  export const find = (): Promise<OrderReference[]> => axios.$get(route())

  export const read = (id: string): Promise<OrderReference> => axios.$get(route(id))

  export const create = (payload: CreateOrderValidator): Promise<OrderReference> => axios.$post(route(), payload)

  export const update = (id: string, payload: UpdateOrderValidator): Promise<OrderReference> => axios.$put(route(id), payload)

  export const remove = (id: string): Promise<void> => axios.$delete(route(id))
}

export default Order
