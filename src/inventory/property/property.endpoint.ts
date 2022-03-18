import {
  CreatePropertyValidator,
  FindPropertyValidator,
  UpdatePropertyValidator
} from '@merkaly/api/src/inventory/properties/property.validator'
import { useAxios } from '../../../nuxt.axios'
import PropertyReference from './property.reference'

export class Property {
  public find (params?: FindPropertyValidator) {
    return useAxios.get<PropertyReference[]>('/inventory/properties/', { params })
  }

  public read (id: PropertyReference['id']) {
    return useAxios.get<PropertyReference>('/inventory/properties/' + id)
  }

  public create (payload: CreatePropertyValidator) {
    return useAxios.post<PropertyReference>('/inventory/properties/', payload)
  }

  public update (id: PropertyReference['id'], payload: UpdatePropertyValidator) {
    return useAxios.patch<PropertyReference>('/inventory/properties/' + id, payload)
  }

  public remove (id: PropertyReference['id']) {
    return useAxios.delete<void>('/inventory/properties/' + id)
  }
}
