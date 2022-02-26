import {
  CreatePropertyValidator,
  UpdatePropertyValidator
} from '@merkaly/api/src/inventory/properties/property.validator'
import PropertyReference from './property.reference'

namespace Property {
  export const find = () => {
    return $nuxt.$api.$get<PropertyReference[]>('/inventory/properties/')
  }

  export const read = (id: string) => {
    return $nuxt.$api.$get<PropertyReference>('/inventory/properties/' + id)
  }

  export const create = (payload: CreatePropertyValidator) => {
    return $nuxt.$api.$post<PropertyReference>('/inventory/properties/', payload)
  }

  export const update = (id: string, payload: UpdatePropertyValidator) => {
    return $nuxt.$api.$put<PropertyReference>('/inventory/properties/' + id, payload)
  }

  export const remove = (id: string) => {
    return $nuxt.$api.$delete<void>('/inventory/properties/' + id)
  }
}

export default Property
