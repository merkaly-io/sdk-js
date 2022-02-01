import { join } from 'path'
import { $InventoryPath } from '@merkaly/api/src/inventory'
import { CategoryEntity, CreateCategoryValidator, UpdateCategoryValidator } from '@merkaly/api/src/inventory/categories'
import axios from '../../app.axios'
import CategoryReference from './category.reference'

const route = (...path: string[]) => join($InventoryPath, CategoryEntity.$path, ...path)

namespace Category {
  export const find = (): Promise<CategoryReference[]> => axios.$get(route())

  export const read = (id: string): Promise<CategoryReference> => axios.$get(route(id))

  export const create = (payload: CreateCategoryValidator): Promise<CategoryReference> => axios.$post(route(), payload)

  export const update = (id: string, payload: UpdateCategoryValidator): Promise<CategoryReference> => axios.$put(route(id), payload)

  export const remove = (id: string): Promise<void> => axios.$delete(route(id))
}

export default Category
