import { BrandEntity } from '@merkaly/api/src/inventory/brands'
import AppReference, { EntityType } from '../../app.reference'

export default class BrandReference extends AppReference implements EntityType<BrandEntity> {
  public name: string
}
