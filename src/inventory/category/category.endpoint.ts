import { $InventoryPath } from '@merkaly/api/src/inventory'
import { CategoryEntity, CreateCategoryValidator, UpdateCategoryValidator } from '@merkaly/api/src/inventory/categories'
import $axios from 'axios'
import { join } from 'path'
import CategoryReference from './category.reference'

const route = (...path: string[]) => join($InventoryPath, CategoryEntity.$path, ...path)

namespace Category {
  export const find = async () =>
    $axios.get<CategoryReference[]>(route())

  export const read = async (id: string) =>
    $axios.get<CategoryReference>(route(id))

  export const create = async (payload: CreateCategoryValidator) =>
    $axios.post<CategoryReference>(route(), payload)

  export const update = async (id: string, payload: UpdateCategoryValidator) =>
    $axios.put<CategoryReference>(route(id), payload)

  export const remove = async (id: string) =>
    $axios.delete<void>(route(id))

}

export default Category
