import { join } from 'path'
import { $InventoryPath } from '@merkaly/api/src/inventory'
import { CategoryEntity, CreateCategoryValidator, UpdateCategoryValidator } from '@merkaly/api/src/inventory/categories'
import CategoryReference from './category.reference'

const route = (...path: string[]) => join($InventoryPath, CategoryEntity.$path, ...path)

namespace Category {
  export const find = (): Promise<CategoryReference[]> => {
    return $nuxt.$axios.get(route())
  }

  export const read = (id: string): Promise<CategoryReference> => {
    return $nuxt.$axios.get(route(id))
  }

  export const create = (payload: CreateCategoryValidator): Promise<CategoryReference> => {
    return $nuxt.$axios.post(route(), payload)
  }

  export const update = (id: string, payload: UpdateCategoryValidator): Promise<CategoryReference> => {
    return $nuxt.$axios.put(route(id), payload)
  }

  export const remove = (id: string): Promise<void> => {
    return $nuxt.$axios.delete(route(id))
  }
}

export default Category
