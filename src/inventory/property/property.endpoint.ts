import {
  CreatePropertyValidator,
  FindPropertyValidator,
  IdPropertyValidator,
  UpdatePropertyValidator
} from '@merkaly/api/src/inventory/properties/property.validator'
import useAxios from '../../../hooks/useAxios'
import PropertyReference from './property.reference'

namespace Property {
  export const find = (params?: FindPropertyValidator) => {
    return useAxios.$get<PropertyReference[]>('/inventory/properties/', { params })
  }

  export const read = (id: IdPropertyValidator) => {
    return useAxios.$get<PropertyReference>('/inventory/properties/' + id)
  }

  export const create = (payload: CreatePropertyValidator) => {
    return useAxios.$post<PropertyReference>('/inventory/properties/', payload)
  }

  export const update = (id: IdPropertyValidator, payload: UpdatePropertyValidator) => {
    return useAxios.$patch<PropertyReference>('/inventory/properties/' + id, payload)
  }

  export const remove = (id: IdPropertyValidator) => {
    return useAxios.$delete<void>('/inventory/properties/' + id)
  }
}

export default Property
