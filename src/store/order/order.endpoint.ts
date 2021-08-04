import { Store } from '@merkaly/api'
import $axios from 'axios'
import { join } from 'path'
import OrderReference from './order.reference'

const route = (...path: string[]) => join(Store.$path, Store.Order.Entity.$path, ...path)

namespace Order {
  export const find = async () =>
    $axios.get<OrderReference[]>(route())

  export const read = async (id: string) =>
    $axios.get<OrderReference>(route(id))

  export const create = async (payload: Store.Order.validators.CreateOrderValidator) =>
    $axios.post<OrderReference>(route(), payload)

  export const update = async (id: string, payload: Store.Order.validators.UpdateOrderValidator) =>
    $axios.put<OrderReference>(route(id), payload)

  export const remove = async (id: string) =>
    $axios.delete<void>(route(id))

}

export default Order
