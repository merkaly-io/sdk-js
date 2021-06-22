import PropertyEntity from '@merkaly/server/dist/inventory/property/property.entity'
import * as validator from '@merkaly/server/dist/inventory/property/property.validator'
import $axios from 'axios'
import { join } from 'path'

export const find = async () =>
  $axios.get<PropertyEntity[]>('/properties')

export const read = async (id: string) =>
  $axios.get<PropertyEntity>(join('/properties', id))

export const create = async (payload: validator.default) =>
  $axios.post<PropertyEntity>('/properties', payload)

export const update = async (id: string, payload: validator.default) =>
  $axios.put<PropertyEntity>(join('/properties', id), payload)

export const remove = async (id: string) =>
  $axios.delete<void>(join('/properties', id))
