import {
  CreatePropertyValidator,
  FindPropertyValidator,
  IdPropertyValidator,
  UpdatePropertyValidator
} from '@merkaly/api/src/inventory/properties/property.validator'
import MerkalySDK from '../../sdk'
import PropertyReference from './property.reference'

export class Property {
  public find (params?: FindPropertyValidator) {
    return MerkalySDK.$axios.get<PropertyReference[]>('/inventory/properties/', { params })
  }

  public read (id: IdPropertyValidator) {
    return MerkalySDK.$axios.get<PropertyReference>('/inventory/properties/' + id)
  }

  public create (payload: CreatePropertyValidator) {
    return MerkalySDK.$axios.post<PropertyReference>('/inventory/properties/', payload)
  }

  public update (id: IdPropertyValidator, payload: UpdatePropertyValidator) {
    return MerkalySDK.$axios.patch<PropertyReference>('/inventory/properties/' + id, payload)
  }

  public remove (id: IdPropertyValidator) {
    return MerkalySDK.$axios.delete<void>('/inventory/properties/' + id)
  }
}
