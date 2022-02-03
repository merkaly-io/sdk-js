import { join } from 'path'
import { $StorePath } from '@merkaly/api/src/store'
import { CreateOrderValidator, OrderEntity, UpdateOrderValidator } from '@merkaly/api/src/store/orders'
import OrderReference from './order.reference'

export const route = (...path: string[]) => join($StorePath, OrderEntity.$path, ...path)

namespace Order {
  export const find = (): Promise<OrderReference[]> => {
    return $nuxt.$axios.get(route())
  }

  export const read = (id: string): Promise<OrderReference> => {
    return $nuxt.$axios.get(route(id))
  }

  export const create = (payload: CreateOrderValidator): Promise<OrderReference> => {
    return $nuxt.$axios.post(route(), payload)
  }

  export const update = (id: string, payload: UpdateOrderValidator): Promise<OrderReference> => {
    return $nuxt.$axios.put(route(id), payload)
  }

  export const remove = (id: string): Promise<void> => {
    return $nuxt.$axios.delete(route(id))
  }
}

export default Order
