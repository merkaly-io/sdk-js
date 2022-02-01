import Cart from './cart/cart.endpoint'
import Order from './order/order.endpoint'

export default class Store {
  public static readonly orders = Order
  public static readonly carts = Cart
}
