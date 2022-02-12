import { join } from 'path'
import { plainToInstance } from 'class-transformer'
import { $InventoryPath } from '@merkaly/api/src/inventory/'
import { BrandEntity, CreateBrandValidator, UpdateBrandValidator } from '@merkaly/api/src/inventory/brands'
import BrandReference from './brand.reference'

export const route = (...path: string[]) => join($InventoryPath, BrandEntity.$path, ...path)

namespace Brand {
  export const find = () => {
    return $nuxt.$api.$get<BrandReference[]>(route())
      .then(brands => brands.map(brand => plainToInstance(BrandReference, brand)))
  }

  export const read = (id: string) => {
    return $nuxt.$api.$get<BrandReference>(route(id))
      .then(brand => plainToInstance(BrandReference, brand))
  }

  export const create = (payload: CreateBrandValidator) => {
    return $nuxt.$api.$post<BrandReference>(route(), payload)
      .then(brand => plainToInstance(BrandReference, brand))
  }

  export const update = (id: string, payload: UpdateBrandValidator) => {
    return $nuxt.$api.$put<BrandReference>(route(id), payload)
      .then(brand => plainToInstance(BrandReference, brand))
  }

  export const remove = (id: string) => {
    return $nuxt.$api.$delete<void>(route(id))
  }
}

export default Brand
