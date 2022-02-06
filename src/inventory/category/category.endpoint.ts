import { join } from 'path'
import { $InventoryPath } from '@merkaly/api/src/inventory'
import { CategoryEntity, CreateCategoryValidator, UpdateCategoryValidator } from '@merkaly/api/src/inventory/categories'
import CategoryReference from './category.reference'

const route = (...path: string[]) => join($InventoryPath, CategoryEntity.$path, ...path)

namespace Category {
  export const find = (): Promise<CategoryReference[]> => {
    return $nuxt.$request.$get(route())
  }

  export const read = (id: string): Promise<CategoryReference> => {
    return $nuxt.$request.$get(route(id))
  }

  export const create = (payload: CreateCategoryValidator): Promise<CategoryReference> => {
    return $nuxt.$request.$post(route(), payload)
  }

  export const update = (id: string, payload: UpdateCategoryValidator): Promise<CategoryReference> => {
    return $nuxt.$request.$put(route(id), payload)
  }

  export const remove = (id: string): Promise<void> => {
    return $nuxt.$request.$delete(route(id))
  }
}

export default Category
