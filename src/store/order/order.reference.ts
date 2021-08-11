import { OrderEntity } from '@merkaly/api/src/store/orders'
import $axios from 'axios'
import AppReference from '../../app.reference'
import CartReference from '../cart/cart.reference'

export default class OrderReference extends AppReference<OrderEntity> {
  number: string

  client: string

  price: number

  cart!: CartReference

  public getCart () {
    return $axios.get('')
      .then(({ data: cart }) => (this.cart = cart))
  }
}
