import { MediaEntity } from '@merkaly/api/src/inventory/products/media/media.entity'
import { PRODUCT_STATUS, PRODUCT_UNIT, ProductEntity } from '@merkaly/api/src/inventory/products/product.entity'
import { VariantEntity } from '@merkaly/api/src/inventory/products/variants/variant.entity'
import { plainToInstance } from 'class-transformer'
import BrandReference from '../brand/brand.reference'
import CategoryReference from '../category/category.reference'

export default class ProductReference extends ProductEntity {
  public name: string

  public description: string

  public price: number

  public brand: BrandReference

  public category: CategoryReference

  public hashtags: string[]

  public masterVariant: VariantEntity

  public status: PRODUCT_STATUS

  public unit: PRODUCT_UNIT

  // @ts-ignore
  public media: MediaEntity[] = []

  // @ts-ignore
  public variants: VariantEntity[] = []

  public getMedia () {
    return $nuxt.$api.$get<MediaEntity[]>('/inventory/products/' + this.id + '/members/')
      .then(media => (this.media = media.map(mediaItem => plainToInstance(MediaEntity, mediaItem))))
  }

  public getVariants () {
    return $nuxt.$api.$get<VariantEntity[]>('/inventory/products/' + this.id + '/variants/')
      .then(media => (this.media = media.map(mediaItem => plainToInstance(VariantEntity, mediaItem))))
  }
}
