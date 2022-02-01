import { join } from 'path'
import { $InventoryPath, CreatePropertyValidator, UpdatePropertyValidator } from '@merkaly/api/src/inventory'
import { PropertyEntity } from '@merkaly/api/src/inventory/properties'
import PropertyReference from './property.reference'

const route = (...path: string[]) => join($InventoryPath, PropertyEntity.$path, ...path)

export default class Property {
  public static readonly find = () => $nuxt.$axios.get<PropertyReference[]>(route())

  public static readonly read = (id: string) => $nuxt.$axios.get<PropertyReference>(route(id))

  public static readonly create = (payload: CreatePropertyValidator) => $nuxt.$axios.post<PropertyReference>(route(), payload)

  public static readonly update = (id: string, payload: UpdatePropertyValidator) => $nuxt.$axios.put<PropertyReference>(route(id), payload)

  public static readonly remove = (id: string) => $nuxt.$axios.delete<void>(route(id))
}
