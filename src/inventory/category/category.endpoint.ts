import {
  CreateCategoryValidator,
  FindCategoryValidator,
  IdCategoryValidator,
  UpdateCategoryValidator
} from '@merkaly/api/src/inventory/categories/category.validator'
import { plainToInstance } from 'class-transformer'
import useAxios from '../../../hooks/useAxios'
import CategoryReference from './category.reference'

namespace Category {
  export const find = (params?: FindCategoryValidator) => {
    return useAxios.$get<CategoryReference[]>('/inventory/categories/', { params })
      .then(categories => categories.map(category => plainToInstance(CategoryReference, category)))
  }

  export const read = (id: IdCategoryValidator) => {
    return useAxios.$get<CategoryReference>('/inventory/categories/' + id)
      .then(category => plainToInstance(CategoryReference, category))
  }

  export const create = (payload: CreateCategoryValidator) => {
    return useAxios.$post<CategoryReference>('/inventory/categories/', payload)
      .then(category => plainToInstance(CategoryReference, category))
  }

  export const update = (id: IdCategoryValidator, payload: UpdateCategoryValidator) => {
    return useAxios.$patch<CategoryReference>('/inventory/categories/' + id, payload)
      .then(category => plainToInstance(CategoryReference, category))
  }

  export const remove = (id: IdCategoryValidator) => {
    return useAxios.$delete<void>('/inventory/categories/' + id)
  }
}

export default Category
