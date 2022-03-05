import { OrderEntity } from '@merkaly/api/src/store/orders/order.entity'
import { useAxios } from '../../axios'
import CartReference from '../cart/cart.reference'

export default class OrderReference extends OrderEntity {
  public readonly cart!: CartReference

  public getCart () {
    return useAxios.get<void>('/store/orders/' + this.id + '/cart')
  }
}
