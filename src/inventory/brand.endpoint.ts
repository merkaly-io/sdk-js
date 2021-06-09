import BrandEntity from '@sk-merkaly/server/dist/inventory/brand/brand.entity'
import * as validator from '@sk-merkaly/server/dist/inventory/brand/brand.validator'
import $axios from 'axios'
import { join } from 'path'

export const find = async () =>
  $axios.get<BrandEntity[]>('/brands')

export const read = async (id: string) =>
  $axios.get<BrandEntity>(join('/brands', id))

export const create = async (payload: validator.default) =>
  $axios.post<BrandEntity>('/brands', payload)

export const update = async (id: string, payload: validator.default) =>
  $axios.put<BrandEntity>(join('/brands', id), payload)

export const remove = async (id: string) =>
  $axios.delete<void>(join('/brands', id))
