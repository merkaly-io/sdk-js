import { MediaEntity } from '@merkaly/api/src/inventory/products/media/media.entity'
import { ProductEntity } from '@merkaly/api/src/inventory/products/product.entity'
import { VariantEntity } from '@merkaly/api/src/inventory/products/variants/variant.entity'
import { plainToInstance } from 'class-transformer'
import { useAxios } from '../../axios'

export default class ProductReference extends ProductEntity {
  public getMedia () {
    return useAxios.get<MediaEntity[]>('/inventory/products/' + this.id + '/media/')
      .then(media => (this.media = media.map(mediaItem => plainToInstance(MediaEntity, mediaItem))))
  }

  public getVariants () {
    return useAxios.get<VariantEntity[]>('/inventory/products/' + this.id + '/variants/')
      .then(variants => (this.variants = variants.map(mediaItem => plainToInstance(VariantEntity, mediaItem))))
  }
}
