import * as validator from '@sk-merkaly/server/dist/inventory/category/category.validator'
import $axios from 'axios'
import { join } from 'path'

export const find = async () => {
  const { data } = await $axios.get('/categories')

  return data
}

export const read = async (id: string) => {
  const { data } = await $axios.get(join('/categories', id))

  return data
}

export const create = async (payload: validator.default) => {
  const { data } = await $axios.post('/categories', payload)

  return data
}

export const update = async (id: string, payload: validator.default) => {
  const { data } = await $axios.put(join('/categories', id), payload)

  return data
}

export const remove = async (id: string) => {
  const { data } = await $axios.delete(join('/categories', id))

  return data
}
