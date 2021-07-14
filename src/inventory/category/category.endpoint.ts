import * as validator from '@merkaly/api/dist/inventory/categories/category.validator'
import $axios from 'axios'
import { join } from 'path'
import CategoryReference from './category.reference'

export const find = async () =>
  $axios.get<CategoryReference[]>('/categories')

export const read = async (id: string) =>
  $axios.get<CategoryReference>(join('/categories', id))

export const create = async (payload: validator.default) =>
  $axios.post<CategoryReference>('/categories', payload)

export const update = async (id: string, payload: validator.default) =>
  $axios.put<CategoryReference>(join('/categories', id), payload)

export const remove = async (id: string) =>
  $axios.delete<void>(join('/categories', id))
