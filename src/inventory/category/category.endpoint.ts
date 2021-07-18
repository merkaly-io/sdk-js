import CategoryModule from '@merkaly/api/src/inventory/categories/category.module'
import * as validator from '@merkaly/api/src/inventory/categories/category.validator'
import InventoryModule from '@merkaly/api/src/inventory/inventory.module'
import $axios from 'axios'
import { join } from 'path'
import CategoryReference from './category.reference'

export const find = async () =>
  $axios.get<CategoryReference[]>(join(InventoryModule.$path, CategoryModule.$path))

export const read = async (id: string) =>
  $axios.get<CategoryReference>(join(InventoryModule.$path, CategoryModule.$path, id))

export const create = async (payload: validator.CreateCategoryValidator) =>
  $axios.post<CategoryReference>(join(InventoryModule.$path, CategoryModule.$path), payload)

export const update = async (id: string, payload: validator.UpdateCategoryValidator) =>
  $axios.put<CategoryReference>(join(InventoryModule.$path, CategoryModule.$path, id), payload)

export const remove = async (id: string) =>
  $axios.delete<void>(join(InventoryModule.$path, CategoryModule.$path, id))
