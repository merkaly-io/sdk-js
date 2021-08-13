import { $InventoryPath } from '@merkaly/api/src/inventory'
import { CreateProductValidator, ProductEntity, UpdateProductValidator } from '@merkaly/api/src/inventory/products'
import { join } from 'path'
import axios from '../../app.axios'
import ProductReference from './product.reference'

const route = (...path: string[]) => join($InventoryPath, ProductEntity.$path, ...path)

namespace Product {
  export async function find (): Promise<ProductReference[]> {
    return axios.$get(route())
  }

  export async function read (id: string): Promise<ProductReference> {
    return axios.$get(route(id))
  }

  export async function create (payload: CreateProductValidator): Promise<ProductReference> {
    return axios.$post(route(), payload)
  }

  export async function update (id: string, payload: UpdateProductValidator): Promise<ProductReference> {
    return axios.$put(route(id), payload)
  }

  export async function remove (id: string): Promise<void> {
    return axios.$delete(route(id))
  }
}

export default Product
