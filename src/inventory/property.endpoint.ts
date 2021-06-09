import * as validator from '@sk-merkaly/server/dist/inventory/property/property.validator'
import $axios from 'axios'
import { join } from 'path'

export const find = async () => {
  const { data } = await $axios.get('/properties')

  return data
}

export const read = async (id: string) => {
  const { data } = await $axios.get(join('/properties', id))

  return data
}

export const create = async (payload: validator.default) => {
  const { data } = await $axios.post('/properties', payload)

  return data
}

export const update = async (id: string, payload: validator.default) => {
  const { data } = await $axios.put(join('/properties', id), payload)

  return data
}

export const remove = async (id: string) => {
  const { data } = await $axios.delete(join('/properties', id))

  return data
}
