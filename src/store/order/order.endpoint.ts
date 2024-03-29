import {
  CreateOrderValidator,
  FindOrderValidator,
  UpdateOrderValidator
} from '@merkaly/api/src/store/orders/order.validator'
import { plainToInstance } from 'class-transformer'
import { useAxios } from '../../../nuxt.axios'
import OrderReference from './order.reference'

export class Order {
  public find (params?: FindOrderValidator) {
    return useAxios.get<OrderReference[]>('/store/orders', { params })
      .then(orders => orders.map(order => plainToInstance(OrderReference, order)))
  }

  public read (id: OrderReference['id']) {
    return useAxios.get<OrderReference>('/store/orders' + id)
      .then(order => plainToInstance(OrderReference, order))
  }

  public create (payload: CreateOrderValidator) {
    return useAxios.post<OrderReference>('/store/orders', payload)
      .then(order => plainToInstance(OrderReference, order))
  }

  public update (id: OrderReference['id'], payload: UpdateOrderValidator) {
    return useAxios.patch<OrderReference>('/store/orders' + id, payload)
      .then(order => plainToInstance(OrderReference, order))
  }

  public remove (id: OrderReference['id']) {
    return useAxios.delete<void>('/store/orders' + id)
  }
}
