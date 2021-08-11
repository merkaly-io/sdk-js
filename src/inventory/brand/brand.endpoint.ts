import { $InventoryPath } from '@merkaly/api/src/inventory'
import { BrandEntity, CreateBrandValidator, UpdateBrandValidator } from '@merkaly/api/src/inventory/brands'
import $axios from 'axios'
import { join } from 'path'
import BrandReference from './brand.reference'

const route = (...path: string[]) => join($InventoryPath, BrandEntity.$path, ...path)

namespace Brand {
  export const find = async () => $axios.get<BrandReference[]>(route())
    .then(({ data }) => BrandReference.fromArrayOfPlains(data))

  export const read = async (id: string) => $axios.get<BrandReference>(route(id))
    .then(({ data }) => BrandReference.fromPlain(data))

  export const create = async (payload: CreateBrandValidator) => $axios.post<BrandReference>(route(), payload)
    .then(({ data }) => BrandReference.fromPlain(data))

  export const update = async (id: string, payload: UpdateBrandValidator) => $axios.put<BrandReference>(route(id), payload)
    .then(({ data }) => BrandReference.fromPlain(data))

  export const remove = async (id: string) => $axios.delete<void>(route(id))
    .then(({ data }) => data)

}

export default Brand
