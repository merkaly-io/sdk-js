import {
  CreateBrandValidator,
  FindBrandValidator,
  IdBrandValidator,
  UpdateBrandValidator
} from '@merkaly/api/src/inventory/brands/brand.validator'
import { plainToInstance } from 'class-transformer'
import useAxios from '../../../hooks/useAxios'
import BrandReference from './brand.reference'

namespace Brand {
  export const find = (params?: FindBrandValidator) => {
    return useAxios.$get<BrandReference[]>('/inventory/brands/', { params })
      .then(brands => brands.map(brand => plainToInstance(BrandReference, brand)))
  }

  export const read = (id: IdBrandValidator) => {
    return useAxios.$get<BrandReference>('/inventory/brands/' + id)
      .then(brand => plainToInstance(BrandReference, brand))
  }

  export const create = (payload: CreateBrandValidator) => {
    return useAxios.$post<BrandReference>('/inventory/brands/', payload)
      .then(brand => plainToInstance(BrandReference, brand))
  }

  export const update = (id: IdBrandValidator, payload: UpdateBrandValidator) => {
    return useAxios.$patch<BrandReference>('/inventory/brands/' + id, payload)
      .then(brand => plainToInstance(BrandReference, brand))
  }

  export const remove = (id: IdBrandValidator) => {
    return useAxios.$delete<void>('/inventory/brands/' + id)
  }
}

export default Brand
