import { Store } from '@merkaly/api'
import { CART_STATUS } from '@merkaly/api/src/store/carts/cart.entity'
import ItemEntity from '@merkaly/api/src/store/orders/items/item.entity'
import AppReference from '../../app.reference'

export default class CartReference extends AppReference implements Store.Cart.Entity {

  user: string

  status: CART_STATUS = CART_STATUS.EMPTY

  items: ItemEntity[]
}
