import { join } from 'path'
import { $InventoryPath } from '@merkaly/api/src/inventory'
import { BrandEntity, CreateBrandValidator, UpdateBrandValidator } from '@merkaly/api/src/inventory/brands'
import axios from '../../app.axios'
import BrandReference from './brand.reference'

export const route = (...path: string[]) => join($InventoryPath, BrandEntity.$path, ...path)

export default class Brand {
  public static readonly find = (): Promise<BrandReference[]> => axios.$get(route())

  public static readonly read = (id: string): Promise<BrandReference> => axios.$get(route(id))

  public static readonly create = (payload: CreateBrandValidator): Promise<BrandReference> => axios.$post(route(), payload)

  public static readonly update = (id: string, payload: UpdateBrandValidator): Promise<BrandReference> => axios.$put(route(id), payload)

  public static readonly remove = (id: string): Promise<void> => axios.$delete(route(id))
}
