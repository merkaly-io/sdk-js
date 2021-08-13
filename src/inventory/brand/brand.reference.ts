import { BrandEntity } from '@merkaly/api/src/inventory/brands'
import AppReference, { EntityType } from '../../app.reference'

export default class BrandReference extends AppReference<BrandEntity> implements EntityType<BrandEntity> {
  name: string
}
