import { CART_STATUS, CartEntity } from '@merkaly/api/src/store/carts'
import { ItemEntity } from '@merkaly/api/src/store/orders/items/item.entity'
import AppReference from '../../app.reference'

export default class CartReference extends AppReference<CartEntity> {

  user: string

  status: CART_STATUS = CART_STATUS.EMPTY

  items: ItemEntity[]
}
