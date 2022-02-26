import { OrderEntity } from '@merkaly/api/src/store/orders/order.entity'
import CartReference from '../cart/cart.reference'

export default class OrderReference extends OrderEntity {
  public number: string
  public client: string
  public price: number
  public cart!: CartReference

  public getCart () {
    return $nuxt.$api.$get<void>('/store/orders/' + this.id + '/cart')
  }
}
