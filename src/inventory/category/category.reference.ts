import { Inventory } from '@merkaly/api'
import AppReference from '../../app.reference'

export default class CategoryReference extends AppReference implements Inventory.Category.Entity {
  name: string
}
