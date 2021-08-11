import { $InventoryPath, CreateProductValidator, UpdateProductValidator } from '@merkaly/api/src/inventory'
import { ProductEntity } from '@merkaly/api/src/inventory/products'
import $axios from 'axios'
import { join } from 'path'
import ProductReference from './product.reference'

const route = (...path: string[]) => join($InventoryPath, ProductEntity.$path, ...path)

namespace Product {
  export const find = async () => $axios.get<ProductReference[]>(route())

  export const read = async (id: string) => $axios.get<ProductReference>(route(id))

  export const create = async (payload: CreateProductValidator) => $axios.post<ProductReference>(route(), payload)

  export const update = async (id: string, payload: UpdateProductValidator) => $axios.put<ProductReference>(route(id), payload)

  export const remove = async (id: string) => $axios.delete<void>(route(id))

}

export default Product
