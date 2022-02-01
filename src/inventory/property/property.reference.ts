import { PropertyEntity } from '@merkaly/api/src/inventory/properties'
import CategoryReference from '../category/category.reference'

export default class PropertyReference extends PropertyEntity {
  name: string

  values: string[]

  category: CategoryReference
}
