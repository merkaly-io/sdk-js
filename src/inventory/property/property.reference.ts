import { PropertyEntity } from '@merkaly/api/src/inventory/properties'
import AppReference, { EntityType } from '../../app.reference'
import CategoryReference from '../category/category.reference'

export default class PropertyReference extends AppReference<PropertyEntity> implements EntityType<PropertyEntity> {
  name: string

  values: string[]

  category: CategoryReference

}
