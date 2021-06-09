import BrandEntity from '@sk-merkaly/server/dist/inventory/brand/brand.entity'
import * as validator from '@sk-merkaly/server/dist/inventory/brand/brand.validator'
import $axios from 'axios'
import { join } from 'path'

export const find = async () => {
  const { data } = await $axios.get<BrandEntity[]>('/brands')

  return data
}

export const read = async (id: string) => {
  const { data } = await $axios.get<BrandEntity>(join('/brands', id))

  return data
}

export const create = async (payload: validator.default) => {
  const { data } = await $axios.post<BrandEntity>('/brands', payload)

  return data
}

export const update = async (id: string, payload: validator.default) => {
  const { data } = await $axios.put<BrandEntity>(join('/brands', id), payload)

  return data
}

export const remove = async (id: string) => {
  const { data } = await $axios.delete<void>(join('/brands', id))

  return data
}
