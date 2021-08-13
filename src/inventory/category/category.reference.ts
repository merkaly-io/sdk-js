import { CategoryEntity } from '@merkaly/api/src/inventory/categories'
import AppReference, { EntityType } from '../../app.reference'

export default class CategoryReference extends AppReference<CategoryEntity> implements EntityType<CategoryEntity> {
  name: string
}
