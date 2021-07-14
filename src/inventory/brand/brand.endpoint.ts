import * as validator from '@merkaly/api/dist/inventory/brands/brand.validator'
import $axios from 'axios'
import { join } from 'path'
import BrandReference from './brand.reference'

export const find = async () =>
  $axios.get<BrandReference[]>('/brands')

export const read = async (id: string) =>
  $axios.get<BrandReference>(join('/brands', id))

export const create = async (payload: validator.default) =>
  $axios.post<BrandReference>('/brands', payload)

export const update = async (id: string, payload: validator.default) =>
  $axios.put<BrandReference>(join('/brands', id), payload)

export const remove = async (id: string) =>
  $axios.delete<void>(join('/brands', id))
