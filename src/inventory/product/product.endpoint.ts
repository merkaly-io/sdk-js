import InventoryModule from '@merkaly/api/src/inventory/inventory.module'
import ProductModule from '@merkaly/api/src/inventory/products/product.module'
import * as validator from '@merkaly/api/src/inventory/products/product.validator'
import $axios from 'axios'
import { join } from 'path'
import ProductReference from './product.reference'

namespace Product {
  export const find = async () =>
    $axios.get<ProductReference[]>(join(InventoryModule.$path, ProductModule.$path))

  export const read = async (id: string) =>
    $axios.get<ProductReference>(join(InventoryModule.$path, ProductModule.$path, id))

  export const create = async (payload: validator.CreateProductValidator) =>
    $axios.post<ProductReference>(join(InventoryModule.$path, ProductModule.$path), payload)

  export const update = async (id: string, payload: validator.UpdateProductValidator) =>
    $axios.put<ProductReference>(join(InventoryModule.$path, ProductModule.$path, id), payload)

  export const remove = async (id: string) =>
    $axios.delete<void>(join(InventoryModule.$path, ProductModule.$path, id))

}

export default Product
