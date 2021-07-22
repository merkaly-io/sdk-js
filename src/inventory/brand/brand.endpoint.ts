import { $path as InventoryPath } from '@merkaly/api/src/inventory'
import { $path as InventoryBrandsPath } from '@merkaly/api/src/inventory/brands'
import * as validator from '@merkaly/api/src/inventory/brands/brand.validator'
import $axios from 'axios'
import { join } from 'path'
import BrandReference from './brand.reference'

const route = (...path: string[]) => join(InventoryPath, InventoryBrandsPath, ...path)

namespace Brand {
  export const find = async () =>
    $axios.get<BrandReference[]>(route())

  export const read = async (id: string) =>
    $axios.get<BrandReference>(route(id))

  export const create = async (payload: validator.CreateBrandValidator) =>
    $axios.post<BrandReference>(route(), payload)

  export const update = async (id: string, payload: validator.UpdateBrandValidator) =>
    $axios.put<BrandReference>(route(id), payload)

  export const remove = async (id: string) =>
    $axios.delete<void>(route(id))

}

export default Brand
