import Cart from './cart/cart.endpoint'
import Order from './order/order.endpoint'

namespace Store {
  export const orders = Order
  export const carts = Cart
}

export default Store
