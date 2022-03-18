import { BrandEntity } from '@merkaly/api/src/inventory/brands/brand.entity'
import {
  CreateBrandValidator,
  FindBrandValidator,
  UpdateBrandValidator
} from '@merkaly/api/src/inventory/brands/brand.validator'
import { plainToInstance } from 'class-transformer'
import { useAxios } from '../../../nuxt.axios'
import BrandReference from './brand.reference'

export class Brand {
  public find (params?: FindBrandValidator) {
    return useAxios.get<BrandReference[]>('/inventory/brands/', { params })
      .then(brands => brands.map(brand => plainToInstance(BrandReference, brand)))
  }

  public read (id: BrandEntity['id']) {
    return useAxios.get<BrandReference>('/inventory/brands/' + id)
      .then(brand => plainToInstance(BrandReference, brand))
  }

  public create (payload: CreateBrandValidator) {
    return useAxios.post<BrandReference>('/inventory/brands/', payload)
      .then(brand => plainToInstance(BrandReference, brand))
  }

  public update (id: BrandEntity['id'], payload: UpdateBrandValidator) {
    return useAxios.patch<BrandReference>('/inventory/brands/' + id, payload)
      .then(brand => plainToInstance(BrandReference, brand))
  }

  public remove (id: BrandEntity['id']) {
    return useAxios.delete<void>('/inventory/brands/' + id)
  }
}
