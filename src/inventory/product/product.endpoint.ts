import { join } from 'path'
import { $InventoryPath } from '@merkaly/api/src/inventory'
import { CreateProductValidator, ProductEntity, UpdateProductValidator } from '@merkaly/api/src/inventory/products'
import ProductReference from './product.reference'

export const route = (...path: string[]) => join($InventoryPath, ProductEntity.$path, ...path)

namespace Product {
  export const find = (): Promise<ProductReference[]> => {
    return $nuxt.$request.$get(route())
  }

  export const read = (id: string): Promise<ProductReference> => {
    return $nuxt.$request.$get(route(id))
  }

  export const create = (payload: CreateProductValidator): Promise<ProductReference> => {
    return $nuxt.$request.$post(route(), payload)
  }

  export const update = (id: string, payload: UpdateProductValidator): Promise<ProductReference> => {
    return $nuxt.$request.$put(route(id), payload)
  }

  export const remove = (id: string): Promise<void> => {
    return $nuxt.$request.$delete(route(id))
  }
}

export default Product
