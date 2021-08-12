import { BrandEntity } from '@merkaly/api/src/inventory/brands'
import AppReference from '@/app.reference'

export default class BrandReference extends AppReference<BrandEntity> {
  name: string
}
