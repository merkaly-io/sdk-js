import { Inventory } from '@merkaly/api'
import $axios from 'axios'
import { join } from 'path'
import BrandReference from './brand.reference'

const route = (...path: string[]) => join(Inventory.$path, Inventory.Brand.Entity.$path, ...path)

namespace Brand {
  export const find = async () => $axios.get<BrandReference[]>(route())
    .then(({ data }) => BrandReference.fromArrayOfPlains(data))

  export const read = async (id: string) => $axios.get<BrandReference>(route(id))
    .then(({ data }) => BrandReference.fromPlain(data))

  export const create = async (payload: Inventory.Brand.validators.CreateBrandValidator) => $axios.post<BrandReference>(route(), payload)
    .then(({ data }) => BrandReference.fromPlain(data))

  export const update = async (id: string, payload: Inventory.Brand.validators.UpdateBrandValidator) => $axios.put<BrandReference>(route(id), payload)
    .then(({ data }) => BrandReference.fromPlain(data))

  export const remove = async (id: string) => $axios.delete<void>(route(id))
    .then(({ data }) => data)

}

export default Brand
