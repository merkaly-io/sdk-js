import { CreateProductValidator, UpdateProductValidator } from '@merkaly/api/src/inventory/products/product.validator'
import ProductReference from './product.reference'

namespace Product {
  export const find = (): Promise<ProductReference[]> => {
    return $nuxt.$api.$get('/inventory/products/')
  }

  export const read = (id: string): Promise<ProductReference> => {
    return $nuxt.$api.$get('/inventory/products/' + id)
  }

  export const create = (payload: CreateProductValidator): Promise<ProductReference> => {
    return $nuxt.$api.$post('/inventory/products/', payload)
  }

  export const update = (id: string, payload: UpdateProductValidator): Promise<ProductReference> => {
    return $nuxt.$api.$put('/inventory/products/' + id, payload)
  }

  export const remove = (id: string): Promise<void> => {
    return $nuxt.$api.$delete('/inventory/products/' + id)
  }
}

export default Product
