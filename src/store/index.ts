import { Cart } from './cart/cart.endpoint'
import { Order } from './order/order.endpoint'

export class Store {
  public orders = new Order()
  public carts = new Cart()
}
