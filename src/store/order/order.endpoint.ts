import { $StorePath } from '@merkaly/api/src/store'
import { CreateOrderValidator, OrderEntity, UpdateOrderValidator } from '@merkaly/api/src/store/orders'
import { join } from 'path'
import axios from '../../app.axios'
import OrderReference from './order.reference'

export const route = (...path: string[]) => join($StorePath, OrderEntity.$path, ...path)

namespace Order {
  export async function find (): Promise<OrderReference[]> {
    return axios.$get(route())
  }

  export async function read (id: string): Promise<OrderReference> {
    return axios.$get(route(id))
  }

  export async function create (payload: CreateOrderValidator): Promise<OrderReference> {
    return axios.$post(route(), payload)
  }

  export async function update (id: string, payload: UpdateOrderValidator): Promise<OrderReference> {
    return axios.$put(route(id), payload)
  }

  export async function remove (id: string): Promise<void> {
    return axios.$delete(route(id))
  }
}

export default Order
