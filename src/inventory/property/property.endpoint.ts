import {
  CreatePropertyValidator,
  FindPropertyValidator,
  IdPropertyValidator,
  UpdatePropertyValidator
} from '@merkaly/api/src/inventory/properties/property.validator'
import { useAxios } from '../../axios'
import PropertyReference from './property.reference'

export class Property {
  public find (params?: FindPropertyValidator) {
    return useAxios.get<PropertyReference[]>('/inventory/properties/', { params })
  }

  public read (id: IdPropertyValidator) {
    return useAxios.get<PropertyReference>('/inventory/properties/' + id)
  }

  public create (payload: CreatePropertyValidator) {
    return useAxios.post<PropertyReference>('/inventory/properties/', payload)
  }

  public update (id: IdPropertyValidator, payload: UpdatePropertyValidator) {
    return useAxios.patch<PropertyReference>('/inventory/properties/' + id, payload)
  }

  public remove (id: IdPropertyValidator) {
    return useAxios.delete<void>('/inventory/properties/' + id)
  }
}
