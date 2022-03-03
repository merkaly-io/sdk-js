import { MediaEntity } from '@merkaly/api/src/inventory/products/media/media.entity'
import { ProductEntity } from '@merkaly/api/src/inventory/products/product.entity'
import { VariantEntity } from '@merkaly/api/src/inventory/products/variants/variant.entity'
import { plainToInstance } from 'class-transformer'
import useAxios from '../../../hooks/useAxios'
import BrandReference from '../brand/brand.reference'
import CategoryReference from '../category/category.reference'

export default class ProductReference extends ProductEntity {
  public brand: BrandReference

  public category: CategoryReference

  // @ts-ignore
  public media: MediaEntity[] = []

  // @ts-ignore
  public variants: VariantEntity[] = []

  public getMedia () {
    return useAxios.$get<MediaEntity[]>('/inventory/products/' + this.id + '/members/')
      .then(media => (this.media = media.map(mediaItem => plainToInstance(MediaEntity, mediaItem))))
  }

  public getVariants () {
    return useAxios.$get<VariantEntity[]>('/inventory/products/' + this.id + '/variants/')
      .then(media => (this.media = media.map(mediaItem => plainToInstance(VariantEntity, mediaItem))))
  }
}
