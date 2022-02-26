import { CreateOrderValidator, UpdateOrderValidator } from '@merkaly/api/src/store/orders/order.validator'
import OrderReference from './order.reference'

namespace Order {
  export const find = (): Promise<OrderReference[]> => {
    return $nuxt.$api.$get('/store/orders')
  }

  export const read = (id: string): Promise<OrderReference> => {
    return $nuxt.$api.$get('/store/orders' + id)
  }

  export const create = (payload: CreateOrderValidator): Promise<OrderReference> => {
    return $nuxt.$api.$post('/store/orders', payload)
  }

  export const update = (id: string, payload: UpdateOrderValidator): Promise<OrderReference> => {
    return $nuxt.$api.$put('/store/orders' + id, payload)
  }

  export const remove = (id: string): Promise<void> => {
    return $nuxt.$api.$delete('/store/orders' + id)
  }
}

export default Order
