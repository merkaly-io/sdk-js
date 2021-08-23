import { OrderEntity } from '@merkaly/api/src/store/orders'
import axios from '../../app.axios'
import AppReference, { EntityType } from '../../app.reference'
import CartReference from '../cart/cart.reference'
import { route } from './order.endpoint'

export default class OrderReference extends AppReference implements EntityType<OrderEntity> {
	protected get $route () {
		return route(this.id)
	}

  public number: string

  public client: string

  public price: number

  public cart!: CartReference

  public static getCart (orderId: string): Promise<CartReference> {
  	return axios.$get(route(orderId))
  }
}
