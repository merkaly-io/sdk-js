import { $path as InventoryPath } from '@merkaly/api/src/inventory'
import { $path as InventoryProductsPath } from '@merkaly/api/src/inventory/products'
import * as validator from '@merkaly/api/src/inventory/products/product.validator'
import $axios from 'axios'
import { join } from 'path'
import ProductReference from './product.reference'

const route = (...path: string[]) => join(InventoryPath, InventoryProductsPath, ...path)

namespace Product {
  export const find = async () =>
    $axios.get<ProductReference[]>(route())

  export const read = async (id: string) =>
    $axios.get<ProductReference>(route(id))

  export const create = async (payload: validator.CreateProductValidator) =>
    $axios.post<ProductReference>(route(), payload)

  export const update = async (id: string, payload: validator.UpdateProductValidator) =>
    $axios.put<ProductReference>(route(id), payload)

  export const remove = async (id: string) =>
    $axios.delete<void>(route(id))

}

export default Product
