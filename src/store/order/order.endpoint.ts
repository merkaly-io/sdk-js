import { $StorePath } from '@merkaly/api/src/store'
import { CreateOrderValidator, OrderEntity, UpdateOrderValidator } from '@merkaly/api/src/store/orders'
import $axios from 'axios'
import { join } from 'path'
import OrderReference from './order.reference'

const route = (...path: string[]) => join($StorePath, OrderEntity.$path, ...path)

namespace Order {
  export const find = async () =>
    $axios.get<OrderReference[]>(route())

  export const read = async (id: string) =>
    $axios.get<OrderReference>(route(id))

  export const create = async (payload: CreateOrderValidator) =>
    $axios.post<OrderReference>(route(), payload)

  export const update = async (id: string, payload: UpdateOrderValidator) =>
    $axios.put<OrderReference>(route(id), payload)

  export const remove = async (id: string) =>
    $axios.delete<void>(route(id))

}

export default Order
