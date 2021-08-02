import { Inventory } from '@merkaly/api'
import $axios from 'axios'
import { route } from '../../account/role/role.endpoint'

export default class ProductReference extends Inventory.Product.Entity implements Inventory.Product.Entity {
  // @ts-ignore
  public media: Inventory.Product.Media.Entity[] = []

  // @ts-ignore
  public variants: Inventory.Product.Variants.Entity[] = []

  protected get $route () {
    return {
      variants: route(this.id, Inventory.Product.Variants.Entity.$path),
      media: route(this.id, Inventory.Product.Media.Entity.$path)
    }
  }

  public getVariants () {
    return $axios.get<Inventory.Product.Variants.Entity[]>(this.$route.variants)
      .then(({ data: variants }) => (this.variants = variants))
  }

  public getMedia () {
    return $axios.get<Inventory.Product.Media.Entity[]>(this.$route.variants)
      .then(({ data: media }) => (this.media = media))
  }

}
