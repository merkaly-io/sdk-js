import {
  CreateCategoryValidator,
  FindCategoryValidator,
  IdCategoryValidator,
  UpdateCategoryValidator
} from '@merkaly/api/src/inventory/categories/category.validator'
import { plainToInstance } from 'class-transformer'
import MerkalySDK from '../../sdk'
import CategoryReference from './category.reference'

namespace Category {
  export const find = (params?: FindCategoryValidator) => {
    return MerkalySDK.$axios.get<CategoryReference[]>('/inventory/categories/', { params })
      .then(categories => categories.map(category => plainToInstance(CategoryReference, category)))
  }

  export const read = (id: IdCategoryValidator) => {
    return MerkalySDK.$axios.get<CategoryReference>('/inventory/categories/' + id)
      .then(category => plainToInstance(CategoryReference, category))
  }

  export const create = (payload: CreateCategoryValidator) => {
    return MerkalySDK.$axios.post<CategoryReference>('/inventory/categories/', payload)
      .then(category => plainToInstance(CategoryReference, category))
  }

  export const update = (id: IdCategoryValidator, payload: UpdateCategoryValidator) => {
    return MerkalySDK.$axios.patch<CategoryReference>('/inventory/categories/' + id, payload)
      .then(category => plainToInstance(CategoryReference, category))
  }

  export const remove = (id: IdCategoryValidator) => {
    return MerkalySDK.$axios.delete<void>('/inventory/categories/' + id)
  }
}

export default Category
