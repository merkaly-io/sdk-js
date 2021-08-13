import { CART_STATUS, CartEntity } from '@merkaly/api/src/store/carts'
import { OrderItemEntity } from '@merkaly/api/src/store/orders/items'
import AppReference, { EntityType } from '../../app.reference'

export default class CartReference extends AppReference<CartEntity> implements EntityType<CartEntity> {

  user: string

  status: CART_STATUS = CART_STATUS.EMPTY

  items: OrderItemEntity[]
}
