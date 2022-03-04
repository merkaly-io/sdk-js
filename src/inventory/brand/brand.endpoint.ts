import {
  CreateBrandValidator,
  FindBrandValidator,
  IdBrandValidator,
  UpdateBrandValidator
} from '@merkaly/api/src/inventory/brands/brand.validator'
import { plainToInstance } from 'class-transformer'
import MerkalySDK from '../../sdk'
import BrandReference from './brand.reference'

namespace Brand {
  export const find = (params?: FindBrandValidator) => {
    return MerkalySDK.$axios.get<BrandReference[]>('/inventory/brands/', { params })
      .then(brands => brands.map(brand => plainToInstance(BrandReference, brand)))
  }

  export const read = (id: IdBrandValidator) => {
    return MerkalySDK.$axios.get<BrandReference>('/inventory/brands/' + id)
      .then(brand => plainToInstance(BrandReference, brand))
  }

  export const create = (payload: CreateBrandValidator) => {
    return MerkalySDK.$axios.post<BrandReference>('/inventory/brands/', payload)
      .then(brand => plainToInstance(BrandReference, brand))
  }

  export const update = (id: IdBrandValidator, payload: UpdateBrandValidator) => {
    return MerkalySDK.$axios.patch<BrandReference>('/inventory/brands/' + id, payload)
      .then(brand => plainToInstance(BrandReference, brand))
  }

  export const remove = (id: IdBrandValidator) => {
    return MerkalySDK.$axios.delete<void>('/inventory/brands/' + id)
  }
}

export default Brand
