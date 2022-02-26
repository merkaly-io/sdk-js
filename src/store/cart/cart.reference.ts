import { CART_STATUS, CartEntity } from '@merkaly/api/src/store/carts'
import { ItemEntity } from '@merkaly/api/src/store/orders/items/item.entity'

export default class CartReference extends CartEntity {
  public user: string

  public status: CART_STATUS = CART_STATUS.EMPTY

  public items: ItemEntity[]
}
