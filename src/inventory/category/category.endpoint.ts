import {
  CreateCategoryValidator,
  UpdateCategoryValidator
} from '@merkaly/api/src/inventory/categories/category.validator'
import CategoryReference from './category.reference'

namespace Category {
  export const find = (): Promise<CategoryReference[]> => {
    return $nuxt.$api.$get('/inventory/categories/')
  }

  export const read = (id: string): Promise<CategoryReference> => {
    return $nuxt.$api.$get('/inventory/categories/' + id)
  }

  export const create = (payload: CreateCategoryValidator): Promise<CategoryReference> => {
    return $nuxt.$api.$post('/inventory/categories/', payload)
  }

  export const update = (id: string, payload: UpdateCategoryValidator): Promise<CategoryReference> => {
    return $nuxt.$api.$patch('/inventory/categories/' + id, payload)
  }

  export const remove = (id: string): Promise<void> => {
    return $nuxt.$api.$delete('/inventory/categories/' + id)
  }
}

export default Category
