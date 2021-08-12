import { $InventoryPath } from '@merkaly/api/src/inventory'
import { BrandEntity, CreateBrandValidator, UpdateBrandValidator } from '@merkaly/api/src/inventory/brands'
import $axios from 'axios'
import { join } from 'path'
import BrandReference from './brand.reference'

const route = (...path: string[]) => join($InventoryPath, BrandEntity.$path, ...path)

namespace Brand {
  export async function find () {
    return $axios.get<BrandReference[]>(route())
      .then(({ data }) => BrandReference.fromArrayOfPlains(data))
  }

  export async function read (id: string) {
    return $axios.get<BrandReference>(route(id))
      .then(({ data }) => BrandReference.fromPlain(data))
  }

  export async function create (payload: CreateBrandValidator) {
    return $axios.post<BrandReference>(route(), payload)
      .then(({ data }) => BrandReference.fromPlain(data))
  }

  export async function update (id: string, payload: UpdateBrandValidator) {
    return $axios.put<BrandReference>(route(id), payload)
      .then(({ data }) => BrandReference.fromPlain(data))
  }

  export async function remove (id: string) {
    return $axios.delete<void>(route(id))
      .then(({ data }) => data)
  }

}

export default Brand
