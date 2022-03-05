import { MediaEntity } from '@merkaly/api/src/inventory/products/media/media.entity'
import { ProductEntity } from '@merkaly/api/src/inventory/products/product.entity'
import { VariantEntity } from '@merkaly/api/src/inventory/products/variants/variant.entity'
import { plainToInstance } from 'class-transformer'
import MerkalySDK from '../../sdk'
import BrandReference from '../brand/brand.reference'
import CategoryReference from '../category/category.reference'

export default class ProductReference extends ProductEntity {
  public brand: BrandReference

  public category: CategoryReference

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  public media: MediaEntity[] = []

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  public variants: VariantEntity[] = []

  public getMedia () {
    return MerkalySDK.$axios.get<MediaEntity[]>('/inventory/products/' + this.id + '/members/')
      .then(media => (this.media = media.map(mediaItem => plainToInstance(MediaEntity, mediaItem))))
  }

  public getVariants () {
    return MerkalySDK.$axios.get<VariantEntity[]>('/inventory/products/' + this.id + '/variants/')
      .then(media => (this.media = media.map(mediaItem => plainToInstance(VariantEntity, mediaItem))))
  }
}
