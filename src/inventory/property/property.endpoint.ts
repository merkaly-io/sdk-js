import { $InventoryPath, CreatePropertyValidator, UpdatePropertyValidator } from '@merkaly/api/src/inventory'
import { PropertyEntity } from '@merkaly/api/src/inventory/properties'
import { join } from 'path'
import axios from '../../app.axios'
import PropertyReference from './property.reference'

const route = (...path: string[]) => join($InventoryPath, PropertyEntity.$path, ...path)

namespace Property {
  export async function find () {
    return axios.$get<PropertyReference[]>(route())
  }

  export async function read (id: string) {
    return axios.$get<PropertyReference>(route(id))
  }

  export async function create (payload: CreatePropertyValidator) {
    return axios.$post<PropertyReference>(route(), payload)
  }

  export async function update (id: string, payload: UpdatePropertyValidator) {
    return axios.$put<PropertyReference>(route(id), payload)
  }

  export async function remove (id: string) {
    return axios.$delete<void>(route(id))
  }
}

export default Property
