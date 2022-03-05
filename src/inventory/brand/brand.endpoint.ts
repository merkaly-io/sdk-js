import {
  CreateBrandValidator,
  FindBrandValidator,
  IdBrandValidator,
  UpdateBrandValidator
} from '@merkaly/api/src/inventory/brands/brand.validator'
import { plainToInstance } from 'class-transformer'
import { useAxios } from '../../axios'
import BrandReference from './brand.reference'

export class Brand {
  public find (params?: FindBrandValidator) {
    return useAxios.get<BrandReference[]>('/inventory/brands/', { params })
      .then(brands => brands.map(brand => plainToInstance(BrandReference, brand)))
  }

  public read (id: IdBrandValidator) {
    return useAxios.get<BrandReference>('/inventory/brands/' + id)
      .then(brand => plainToInstance(BrandReference, brand))
  }

  public create (payload: CreateBrandValidator) {
    return useAxios.post<BrandReference>('/inventory/brands/', payload)
      .then(brand => plainToInstance(BrandReference, brand))
  }

  public update (id: IdBrandValidator, payload: UpdateBrandValidator) {
    return useAxios.patch<BrandReference>('/inventory/brands/' + id, payload)
      .then(brand => plainToInstance(BrandReference, brand))
  }

  public remove (id: IdBrandValidator) {
    return useAxios.delete<void>('/inventory/brands/' + id)
  }
}
