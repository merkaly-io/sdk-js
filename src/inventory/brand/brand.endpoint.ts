import { CreateBrandValidator, UpdateBrandValidator } from '@merkaly/api/src/inventory/brands/brand.validator'
import { plainToInstance } from 'class-transformer'
import BrandReference from './brand.reference'

namespace Brand {
  export const find = () => {
    return $nuxt.$api.$get<BrandReference[]>('/inventory/brands/')
      .then(brands => brands.map(brand => plainToInstance(BrandReference, brand)))
  }

  export const read = (id: string) => {
    return $nuxt.$api.$get<BrandReference>('/inventory/brands/' + id)
      .then(brand => plainToInstance(BrandReference, brand))
  }

  export const create = (payload: CreateBrandValidator) => {
    return $nuxt.$api.$post<BrandReference>('/inventory/brands/', payload)
      .then(brand => plainToInstance(BrandReference, brand))
  }

  export const update = (id: string, payload: UpdateBrandValidator) => {
    return $nuxt.$api.$patch<BrandReference>('/inventory/brands/' + id, payload)
      .then(brand => plainToInstance(BrandReference, brand))
  }

  export const remove = (id: string) => {
    return $nuxt.$api.$delete<void>('/inventory/brands/' + id)
  }
}

export default Brand
