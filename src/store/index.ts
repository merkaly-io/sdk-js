import cart from './cart/cart.endpoint'
import order from './order/order.endpoint'

namespace Store {
  export const Order = order
  export const Cart = cart
}

export default Store
