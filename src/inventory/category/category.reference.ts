import { CategoryEntity } from '@merkaly/api/src/inventory/categories'
import AppReference from '@/app.reference'

export default class CategoryReference extends AppReference<CategoryEntity> {
  name: string
}
