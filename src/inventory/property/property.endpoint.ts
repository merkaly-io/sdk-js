import {
  CreatePropertyValidator,
  FindPropertyValidator,
  IdPropertyValidator,
  UpdatePropertyValidator
} from '@merkaly/api/src/inventory/properties/property.validator'
import MerkalySDK from '../../sdk'
import PropertyReference from './property.reference'

namespace Property {
  export const find = (params?: FindPropertyValidator) => {
    return MerkalySDK.$axios.get<PropertyReference[]>('/inventory/properties/', { params })
  }

  export const read = (id: IdPropertyValidator) => {
    return MerkalySDK.$axios.get<PropertyReference>('/inventory/properties/' + id)
  }

  export const create = (payload: CreatePropertyValidator) => {
    return MerkalySDK.$axios.post<PropertyReference>('/inventory/properties/', payload)
  }

  export const update = (id: IdPropertyValidator, payload: UpdatePropertyValidator) => {
    return MerkalySDK.$axios.patch<PropertyReference>('/inventory/properties/' + id, payload)
  }

  export const remove = (id: IdPropertyValidator) => {
    return MerkalySDK.$axios.delete<void>('/inventory/properties/' + id)
  }
}

export default Property
