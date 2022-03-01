import {
  CreateOrderValidator,
  FindOrderValidator,
  IdOrderValidator,
  UpdateOrderValidator
} from '@merkaly/api/src/store/orders/order.validator'
import { plainToInstance } from 'class-transformer'
import OrderReference from './order.reference'

namespace Order {
  export const find = (params?: FindOrderValidator) => {
    return $nuxt.$api.$get<OrderReference[]>('/store/orders', { params })
      .then(orders => orders.map(order => plainToInstance(OrderReference, order)))
  }

  export const read = (id: IdOrderValidator) => {
    return $nuxt.$api.$get<OrderReference>('/store/orders' + id)
      .then(order => plainToInstance(OrderReference, order))
  }

  export const create = (payload: CreateOrderValidator) => {
    return $nuxt.$api.$post<OrderReference>('/store/orders', payload)
      .then(order => plainToInstance(OrderReference, order))
  }

  export const update = (id: IdOrderValidator, payload: UpdateOrderValidator) => {
    return $nuxt.$api.$patch<OrderReference>('/store/orders' + id, payload)
      .then(order => plainToInstance(OrderReference, order))
  }

  export const remove = (id: IdOrderValidator) => {
    return $nuxt.$api.$delete<void>('/store/orders' + id)
  }
}

export default Order
