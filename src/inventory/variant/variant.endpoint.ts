import { CreateVariantValidator, UpdateVariantValidator } from '@merkaly/api/src/inventory/variants/variant.validator'
import { plainToInstance } from 'class-transformer'
import { useAxios } from '../../../nuxt.axios'
import VariantReference from './variant.reference'

export class Variant {
  public find () {
    return useAxios.get<VariantReference[]>('/inventory/variants/')
      .then(variants => variants.map(variant => plainToInstance(VariantReference, variant)))
  }

  public read (id: VariantReference['id']) {
    return useAxios.get<VariantReference>('/inventory/variants/' + id)
      .then(variant => plainToInstance(VariantReference, variant))
  }

  public create (payload: CreateVariantValidator) {
    return useAxios.post<VariantReference>('/inventory/variants/', payload)
      .then(variant => plainToInstance(VariantReference, variant))
  }

  public update (id: VariantReference['id'], payload: UpdateVariantValidator) {
    return useAxios.patch<VariantReference>('/inventory/variants/' + id, payload)
      .then(variant => plainToInstance(VariantReference, variant))
  }

  public remove (id: VariantReference['id']) {
    return useAxios.delete<void>('/inventory/variants/' + id)
  }
}
