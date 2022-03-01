import {
  CreatePropertyValidator,
  FindPropertyValidator,
  IdPropertyValidator,
  UpdatePropertyValidator
} from '@merkaly/api/src/inventory/properties/property.validator'
import PropertyReference from './property.reference'

namespace Property {
  export const find = (params?: FindPropertyValidator) => {
    return $nuxt.$api.$get<PropertyReference[]>('/inventory/properties/', { params })
  }

  export const read = (id: IdPropertyValidator) => {
    return $nuxt.$api.$get<PropertyReference>('/inventory/properties/' + id)
  }

  export const create = (payload: CreatePropertyValidator) => {
    return $nuxt.$api.$post<PropertyReference>('/inventory/properties/', payload)
  }

  export const update = (id: IdPropertyValidator, payload: UpdatePropertyValidator) => {
    return $nuxt.$api.$patch<PropertyReference>('/inventory/properties/' + id, payload)
  }

  export const remove = (id: IdPropertyValidator) => {
    return $nuxt.$api.$delete<void>('/inventory/properties/' + id)
  }
}

export default Property
