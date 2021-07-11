import CategoryEntity from '@merkaly/api/dist/inventory/categories/category.entity'
import * as validator from '@merkaly/api/dist/inventory/categories/category.validator'
import $axios from 'axios'
import { join } from 'path'

export const find = async () =>
  $axios.get<CategoryEntity[]>('/categories')

export const read = async (id: string) =>
  $axios.get<CategoryEntity>(join('/categories', id))

export const create = async (payload: validator.default) =>
  $axios.post<CategoryEntity>('/categories', payload)

export const update = async (id: string, payload: validator.default) =>
  $axios.put<CategoryEntity>(join('/categories', id), payload)

export const remove = async (id: string) =>
  $axios.delete<void>(join('/categories', id))
