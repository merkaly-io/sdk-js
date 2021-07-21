import { $path as InventoryPath } from '@merkaly/api/src/inventory'
import { $path as InventoryPropertiesPath } from '@merkaly/api/src/inventory/properties'
import * as validator from '@merkaly/api/src/inventory/properties/property.validator'
import $axios from 'axios'
import { join } from 'path'
import PropertyReference from './property.reference'

const route = (...path: string[]) => join(InventoryPath, InventoryPropertiesPath, ...path)

namespace Property {
  export const find = async () =>
    $axios.get<PropertyReference[]>(route())

  export const read = async (id: string) =>
    $axios.get<PropertyReference>(route(id))

  export const create = async (payload: validator.default) =>
    $axios.post<PropertyReference>(route(), payload)

  export const update = async (id: string, payload: validator.default) =>
    $axios.put<PropertyReference>(route(id), payload)

  export const remove = async (id: string) =>
    $axios.delete<void>(route(id))
}

export default Property
