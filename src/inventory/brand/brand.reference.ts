import { Inventory } from '@merkaly/api'
import AppReference from '../../app.reference'

export default class BrandReference extends AppReference implements Inventory.Brand.Entity {
  name: string
}
