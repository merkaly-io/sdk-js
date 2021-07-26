import API from '@merkaly/api'
import { $path as StorePath } from '@merkaly/api/src/store'
import * as validator from '@merkaly/api/src/store/orders/order.validator'
import $axios from 'axios'
import { join } from 'path'
import OrderReference from './order.reference'

const route = (...path: string[]) => join(StorePath, API.Store.Order.$path, ...path)

namespace Order {
  export const find = async () =>
    $axios.get<OrderReference[]>(route())

  export const read = async (id: string) =>
    $axios.get<OrderReference>(route(id))

  export const create = async (payload: validator.CreateOrderValidator) =>
    $axios.post<OrderReference>(route(), payload)

  export const update = async (id: string, payload: validator.UpdateOrderValidator) =>
    $axios.put<OrderReference>(route(id), payload)

  export const remove = async (id: string) =>
    $axios.delete<void>(route(id))

}

export default Order
