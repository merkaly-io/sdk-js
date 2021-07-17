import * as validator from '@merkaly/api/src/inventory/properties/property.validator'
import $axios from 'axios'
import { join } from 'path'
import PropertyReference from './property.reference'

export const find = async () =>
  $axios.get<PropertyReference[]>('/properties')

export const read = async (id: string) =>
  $axios.get<PropertyReference>(join('/properties', id))

export const create = async (payload: validator.default) =>
  $axios.post<PropertyReference>('/properties', payload)

export const update = async (id: string, payload: validator.default) =>
  $axios.put<PropertyReference>(join('/properties', id), payload)

export const remove = async (id: string) =>
  $axios.delete<void>(join('/properties', id))
