import { route } from '@/account/role/role.endpoint'
import AppReference from '@/app.reference'
import { ProductEntity, ProductMediaEntity, ProductVariantEntity } from '@merkaly/api/src/inventory/products'
import $axios from 'axios'

export default class ProductReference extends AppReference<ProductEntity> {
  public media: ProductMediaEntity[] = []

  public variants: ProductVariantEntity[] = []

  protected get $route () {
    return {
      variants: route(this.id, ProductVariantEntity.$path),
      media: route(this.id, ProductMediaEntity.$path)
    }
  }

  public getVariants () {
    return $axios.get<ProductVariantEntity[]>(this.$route.variants)
      .then(({ data: variants }) => (this.variants = variants))
  }

  public getMedia () {
    return $axios.get<ProductMediaEntity[]>(this.$route.variants)
      .then(({ data: media }) => (this.media = media))
  }

}
