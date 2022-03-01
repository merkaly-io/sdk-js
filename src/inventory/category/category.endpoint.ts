import {
  CreateCategoryValidator,
  FindCategoryValidator,
  IdCategoryValidator,
  UpdateCategoryValidator
} from '@merkaly/api/src/inventory/categories/category.validator'
import { plainToInstance } from 'class-transformer'
import CategoryReference from './category.reference'

namespace Category {
  export const find = (params?: FindCategoryValidator) => {
    return $nuxt.$api.$get<CategoryReference[]>('/inventory/categories/', { params })
      .then(categories => categories.map(category => plainToInstance(CategoryReference, category)))
  }

  export const read = (id: IdCategoryValidator) => {
    return $nuxt.$api.$get<CategoryReference>('/inventory/categories/' + id)
      .then(category => plainToInstance(CategoryReference, category))
  }

  export const create = (payload: CreateCategoryValidator) => {
    return $nuxt.$api.$post<CategoryReference>('/inventory/categories/', payload)
      .then(category => plainToInstance(CategoryReference, category))
  }

  export const update = (id: IdCategoryValidator, payload: UpdateCategoryValidator) => {
    return $nuxt.$api.$patch<CategoryReference>('/inventory/categories/' + id, payload)
      .then(category => plainToInstance(CategoryReference, category))
  }

  export const remove = (id: IdCategoryValidator) => {
    return $nuxt.$api.$delete<void>('/inventory/categories/' + id)
  }
}

export default Category
