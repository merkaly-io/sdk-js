import { join } from 'path'
import { $InventoryPath } from '@merkaly/api/src/inventory'
import { CreateProductValidator, ProductEntity, UpdateProductValidator } from '@merkaly/api/src/inventory/products'
import axios from '../../app.axios'
import ProductReference from './product.reference'

export const route = (...path: string[]) => join($InventoryPath, ProductEntity.$path, ...path)

export default class Product {
  public static readonly find = (): Promise<ProductReference[]> => axios.$get(route())

  public static readonly read = (id: string): Promise<ProductReference> => axios.$get(route(id))

  public static readonly create = (payload: CreateProductValidator): Promise<ProductReference> => axios.$post(route(), payload)

  public static readonly update = (id: string, payload: UpdateProductValidator): Promise<ProductReference> => axios.$put(route(id), payload)

  public static readonly remove = (id: string): Promise<void> => axios.$delete(route(id))
}
