import { join } from 'path'
import { $InventoryPath, CreatePropertyValidator, UpdatePropertyValidator } from '@merkaly/api/src/inventory'
import { PropertyEntity } from '@merkaly/api/src/inventory/properties'
import PropertyReference from './property.reference'

const route = (...path: string[]) => join($InventoryPath, PropertyEntity.$path, ...path)

namespace Property {
  export const find = () => {
    return $nuxt.$api.$get<PropertyReference[]>(route())
  }

  export const read = (id: string) => {
    return $nuxt.$api.$get<PropertyReference>(route(id))
  }

  export const create = (payload: CreatePropertyValidator) => {
    return $nuxt.$api.$post<PropertyReference>(route(), payload)
  }

  export const update = (id: string, payload: UpdatePropertyValidator) => {
    return $nuxt.$api.$put<PropertyReference>(route(id), payload)
  }

  export const remove = (id: string) => {
    return $nuxt.$api.$delete<void>(route(id))
  }
}

export default Property
