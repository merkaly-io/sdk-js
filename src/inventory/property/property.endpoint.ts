import InventoryModule from '@merkaly/api/src/inventory/inventory.module'
import PropertyModule from '@merkaly/api/src/inventory/properties/property.module'
import * as validator from '@merkaly/api/src/inventory/properties/property.validator'
import $axios from 'axios'
import { join } from 'path'
import PropertyReference from './property.reference'

export const find = async () =>
  $axios.get<PropertyReference[]>(join(InventoryModule.$path, PropertyModule.$path))

export const read = async (id: string) =>
  $axios.get<PropertyReference>(join(InventoryModule.$path, PropertyModule.$path, id))

export const create = async (payload: validator.default) =>
  $axios.post<PropertyReference>(join(InventoryModule.$path, PropertyModule.$path), payload)

export const update = async (id: string, payload: validator.default) =>
  $axios.put<PropertyReference>(join(InventoryModule.$path, PropertyModule.$path, id), payload)

export const remove = async (id: string) =>
  $axios.delete<void>(join(InventoryModule.$path, PropertyModule.$path, id))
