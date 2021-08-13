import { $InventoryPath } from '@merkaly/api/src/inventory'
import { BrandEntity, CreateBrandValidator, UpdateBrandValidator } from '@merkaly/api/src/inventory/brands'
import { join } from 'path'
import axios from '../../app.axios'
import BrandReference from './brand.reference'

const route = (...path: string[]) => join($InventoryPath, BrandEntity.$path, ...path)

namespace Brand {
  export async function find () {
    return axios.$get<BrandReference[]>(route())
  }

  export async function read (id: string) {
    return axios.$get<BrandReference>(route(id))
  }

  export async function create (payload: CreateBrandValidator) {
    return axios.$post<BrandReference>(route(), payload)
  }

  export async function update (id: string, payload: UpdateBrandValidator) {
    return axios.$put<BrandReference>(route(id), payload)
  }

  export async function remove (id: string) {
    return axios.$delete(route(id))
  }

}

export default Brand
