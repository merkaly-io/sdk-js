import { OrderEntity } from '@merkaly/api/src/store/orders/order.entity'
import MerkalySDK from '../../sdk'
import CartReference from '../cart/cart.reference'

export default class OrderReference extends OrderEntity {
  public cart!: CartReference

  public getCart () {
    return MerkalySDK.$axios.$get<void>('/store/orders/' + this.id + '/cart')
  }
}
