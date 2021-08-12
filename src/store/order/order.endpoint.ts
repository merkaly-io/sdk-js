import { $StorePath } from '@merkaly/api/src/store'
import { CreateOrderValidator, OrderEntity, UpdateOrderValidator } from '@merkaly/api/src/store/orders'
import $axios from 'axios'
import { join } from 'path'
import OrderReference from './order.reference'

const route = (...path: string[]) => join($StorePath, OrderEntity.$path, ...path)

namespace Order {
  export async function find () {
    return $axios.get<OrderReference[]>(route())
  }

  export async function read (id: string) {
    return $axios.get<OrderReference>(route(id))
  }

  export async function create (payload: CreateOrderValidator) {
    return $axios.post<OrderReference>(route(), payload)
  }

  export async function update (id: string, payload: UpdateOrderValidator) {
    return $axios.put<OrderReference>(route(id), payload)
  }

  export async function remove (id: string) {
    return $axios.delete<void>(route(id))
  }

}

export default Order
