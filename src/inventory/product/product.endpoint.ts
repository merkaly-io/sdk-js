import { join } from 'path'
import { $InventoryPath } from '@merkaly/api/src/inventory'
import { CreateProductValidator, ProductEntity, UpdateProductValidator } from '@merkaly/api/src/inventory/products'
import axios from '../../app.axios'
import ProductReference from './product.reference'

export const route = (...path: string[]) => join($InventoryPath, ProductEntity.$path, ...path)

namespace Product {
  export const find = (): Promise<ProductReference[]> => axios.$get(route())

  export const read = (id: string): Promise<ProductReference> => axios.$get(route(id))

  export const create = (payload: CreateProductValidator): Promise<ProductReference> => axios.$post(route(), payload)

  export const update = (id: string, payload: UpdateProductValidator): Promise<ProductReference> => axios.$put(route(id), payload)

  export const remove = (id: string): Promise<void> => axios.$delete(route(id))
}

export default Product
