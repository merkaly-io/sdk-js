import {
  CreateOrderValidator,
  FindOrderValidator,
  IdOrderValidator,
  UpdateOrderValidator
} from '@merkaly/api/src/store/orders/order.validator'
import { plainToInstance } from 'class-transformer'
import MerkalySDK from '../../sdk'
import OrderReference from './order.reference'

export class Order {
  public find (params?: FindOrderValidator) {
    return MerkalySDK.$axios.get<OrderReference[]>('/store/orders', { params })
      .then(orders => orders.map(order => plainToInstance(OrderReference, order)))
  }

  public read (id: IdOrderValidator) {
    return MerkalySDK.$axios.get<OrderReference>('/store/orders' + id)
      .then(order => plainToInstance(OrderReference, order))
  }

  public create (payload: CreateOrderValidator) {
    return MerkalySDK.$axios.post<OrderReference>('/store/orders', payload)
      .then(order => plainToInstance(OrderReference, order))
  }

  public update (id: IdOrderValidator, payload: UpdateOrderValidator) {
    return MerkalySDK.$axios.patch<OrderReference>('/store/orders' + id, payload)
      .then(order => plainToInstance(OrderReference, order))
  }

  public remove (id: IdOrderValidator) {
    return MerkalySDK.$axios.delete<void>('/store/orders' + id)
  }
}
