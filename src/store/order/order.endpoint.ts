import {
  CreateOrderValidator,
  FindOrderValidator,
  IdOrderValidator,
  UpdateOrderValidator
} from '@merkaly/api/src/store/orders/order.validator'
import { plainToInstance } from 'class-transformer'
import MerkalySDK from '../../sdk'
import OrderReference from './order.reference'

namespace Order {
  export const find = (params?: FindOrderValidator) => {
    return MerkalySDK.prototype.$axios.$get<OrderReference[]>('/store/orders', { params })
      .then(orders => orders.map(order => plainToInstance(OrderReference, order)))
  }

  export const read = (id: IdOrderValidator) => {
    return MerkalySDK.prototype.$axios.$get<OrderReference>('/store/orders' + id)
      .then(order => plainToInstance(OrderReference, order))
  }

  export const create = (payload: CreateOrderValidator) => {
    return MerkalySDK.prototype.$axios.$post<OrderReference>('/store/orders', payload)
      .then(order => plainToInstance(OrderReference, order))
  }

  export const update = (id: IdOrderValidator, payload: UpdateOrderValidator) => {
    return MerkalySDK.prototype.$axios.$patch<OrderReference>('/store/orders' + id, payload)
      .then(order => plainToInstance(OrderReference, order))
  }

  export const remove = (id: IdOrderValidator) => {
    return MerkalySDK.prototype.$axios.$delete<void>('/store/orders' + id)
  }
}

export default Order
