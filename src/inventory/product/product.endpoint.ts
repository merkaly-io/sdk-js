import { $InventoryPath, CreateProductValidator, UpdateProductValidator } from '@merkaly/api/src/inventory'
import { ProductEntity } from '@merkaly/api/src/inventory/products'
import $axios from 'axios'
import { join } from 'path'
import ProductReference from './product.reference'

const route = (...path: string[]) => join($InventoryPath, ProductEntity.$path, ...path)

namespace Product {
  export async function find () {
    return $axios.get<ProductReference[]>(route())
  }

  export async function read (id: string) {
    return $axios.get<ProductReference>(route(id))
  }

  export async function create (payload: CreateProductValidator) {
    return $axios.post<ProductReference>(route(), payload)
  }

  export async function update (id: string, payload: UpdateProductValidator) {
    return $axios.put<ProductReference>(route(id), payload)
  }

  export async function remove (id: string) {
    return $axios.delete<void>(route(id))
  }
}

export default Product
