import { OrderEntity } from '@merkaly/api/src/store/orders'
import CartReference from '../cart/cart.reference'
import { route } from './order.endpoint'

export default class OrderReference extends OrderEntity {
  public number: string
  public client: string
  public price: number
  public cart!: CartReference

  protected get $route () {
    return route(this.id)
  }

  public static getCart (orderId: string): Promise<CartReference> {
    return $nuxt.$axios.get(route(orderId))
  }
}
