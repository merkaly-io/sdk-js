import {
  PRODUCT_STATUS,
  PRODUCT_UNIT,
  ProductEntity,
  ProductMediaEntity,
  ProductVariantEntity
} from '@merkaly/api/src/inventory/products'
import { route } from '../../account/role/role.endpoint'
import axios from '../../app.axios'
import AppReference, { EntityType } from '../../app.reference'
import BrandReference from '../brand/brand.reference'
import CategoryReference from '../category/category.reference'

export default class ProductReference extends AppReference<ProductEntity> implements EntityType<ProductEntity> {
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

  protected get $route () {
    return {
      variants: route(this.id, ProductVariantEntity.$path),
      media: route(this.id, ProductMediaEntity.$path)
    }
  }

  public getVariants () {
    return axios.$get<ProductVariantEntity[]>(this.$route.variants)
      .then(variants => (this.variants = variants))
  }

  public getMedia () {
    return axios.$get<ProductMediaEntity[]>(this.$route.variants)
      .then(media => (this.media = media))
  }

}
