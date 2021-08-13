import { $InventoryPath } from '@merkaly/api/src/inventory'
import { BrandEntity, CreateBrandValidator, UpdateBrandValidator } from '@merkaly/api/src/inventory/brands'
import { join } from 'path'
import axios from '../../app.axios'
import BrandReference from './brand.reference'

export const route = (...path: string[]) => join($InventoryPath, BrandEntity.$path, ...path)

namespace Brand {
  export async function find (): Promise<BrandReference[]> {
    return axios.$get(route())
  }

  export async function read (id: string): Promise<BrandReference> {
    return axios.$get(route(id))
  }

  export async function create (payload: CreateBrandValidator): Promise<BrandReference> {
    return axios.$post(route(), payload)
  }

  export async function update (id: string, payload: UpdateBrandValidator): Promise<BrandReference> {
    return axios.$put(route(id), payload)
  }

  export async function remove (id: string): Promise<void> {
    return axios.$delete(route(id))
  }
}

export default Brand
