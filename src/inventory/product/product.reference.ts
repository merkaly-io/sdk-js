import { PRODUCT_STATUS, PRODUCT_UNIT, ProductEntity } from '@merkaly/api/src/inventory/products'
import { ProductMediaEntity } from '@merkaly/api/src/inventory/products/media'
import { ProductVariantEntity } from '@merkaly/api/src/inventory/products/variants'
import axios from '../../app.axios'
import AppReference, { EntityType } from '../../app.reference'
import BrandReference from '../brand/brand.reference'
import CategoryReference from '../category/category.reference'
import { route } from './product.endpoint'

export default class ProductReference extends AppReference implements EntityType<ProductEntity> {
  public name: string

  public description: string

  public price: number

  public brand: BrandReference

  public category: CategoryReference

  public hashtags: string[]

  public masterVariant: ProductVariantEntity

  public status: PRODUCT_STATUS

  public unit: PRODUCT_UNIT

  public media: ProductMediaEntity[] = []

  public variants: ProductVariantEntity[] = []

  public static getMedia (productId: string): Promise<ProductMediaEntity[]> {
    const path = route(productId, ProductMediaEntity.$path)

    return axios.$get(path)
  }

  public static getVariants (productId: string): Promise<ProductVariantEntity[]> {
    const path = route(productId, ProductVariantEntity.$path)

    return axios.$get(path)
  }
}
