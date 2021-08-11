import { $InventoryPath, CreatePropertyValidator, UpdatePropertyValidator } from '@merkaly/api/src/inventory'
import { PropertyEntity } from '@merkaly/api/src/inventory/properties'
import $axios from 'axios'
import { join } from 'path'
import PropertyReference from './property.reference'

const route = (...path: string[]) => join($InventoryPath, PropertyEntity.$path, ...path)

namespace Property {
  export const find = async () =>
    $axios.get<PropertyReference[]>(route())

  export const read = async (id: string) =>
    $axios.get<PropertyReference>(route(id))

  export const create = async (payload: CreatePropertyValidator) =>
    $axios.post<PropertyReference>(route(), payload)

  export const update = async (id: string, payload: UpdatePropertyValidator) =>
    $axios.put<PropertyReference>(route(id), payload)

  export const remove = async (id: string) =>
    $axios.delete<void>(route(id))
}

export default Property
