import { OrderEntity } from '@merkaly/api/src/store/orders'
import $axios from 'axios'
import AppReference, { EntityType } from '../../app.reference'
import CartReference from '../cart/cart.reference'
import { route } from './order.endpoint'

export default class OrderReference extends AppReference<OrderEntity> implements EntityType<OrderEntity> {
  protected get $route () {
    return route(this.id)
  }

  number: string

  client: string

  price: number

  cart!: CartReference

  public getCart () {
    return $axios.get(this.$route)
      .then(({ data: cart }) => (this.cart = cart))
  }
}
