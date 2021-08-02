import { Inventory } from '@merkaly/api'
import $axios from 'axios'
import { join } from 'path'
import ProductReference from './product.reference'

const route = (...path: string[]) => join(Inventory.$path, Inventory.Product.Entity.$path, ...path)

namespace Product {
  export const find = async () =>
  	$axios.get<ProductReference[]>(route())

  export const read = async (id: string) =>
  	$axios.get<ProductReference>(route(id))

  export const create = async (payload: Inventory.Product.validators.CreateProductValidator) =>
  	$axios.post<ProductReference>(route(), payload)

  export const update = async (id: string, payload: Inventory.Product.validators.UpdateProductValidator) =>
  	$axios.put<ProductReference>(route(id), payload)

  export const remove = async (id: string) =>
  	$axios.delete<void>(route(id))

}

export default Product
