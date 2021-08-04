import { Inventory } from '@merkaly/api'
import AppReference from '../../app.reference'
import CategoryReference from '../category/category.reference'

export default class PropertyReference extends AppReference implements Inventory.Property.Entity {
  name: string

  values: string[]

  category: CategoryReference

}
