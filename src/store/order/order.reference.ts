import AppReference from '@/app.reference'
import CartReference from '@/store/cart/cart.reference'
import { route } from '@/store/order/order.endpoint'
import { OrderEntity } from '@merkaly/api/src/store/orders'
import $axios from 'axios'

export default class OrderReference extends AppReference<OrderEntity> {
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
