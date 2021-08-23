import { CategoryEntity } from '@merkaly/api/src/inventory/categories'
import AppReference, { EntityType } from '../../app.reference'

export default class CategoryReference extends AppReference implements EntityType<CategoryEntity> {
  public name: string
}
