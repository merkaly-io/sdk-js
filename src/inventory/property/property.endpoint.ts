import { join } from 'path'
import { $InventoryPath, CreatePropertyValidator, UpdatePropertyValidator } from '@merkaly/api/src/inventory'
import { PropertyEntity } from '@merkaly/api/src/inventory/properties'
import axios from '../../app.axios'
import PropertyReference from './property.reference'

const route = (...path: string[]) => join($InventoryPath, PropertyEntity.$path, ...path)

export default class Property {
  public static readonly find = () => axios.$get<PropertyReference[]>(route())

  public static readonly read = (id: string) => axios.$get<PropertyReference>(route(id))

  public static readonly create = (payload: CreatePropertyValidator) => axios.$post<PropertyReference>(route(), payload)

  public static readonly update = (id: string, payload: UpdatePropertyValidator) => axios.$put<PropertyReference>(route(id), payload)

  public static readonly remove = (id: string) => axios.$delete<void>(route(id))
}
