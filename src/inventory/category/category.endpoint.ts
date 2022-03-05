import {
  CreateCategoryValidator,
  FindCategoryValidator,
  IdCategoryValidator,
  UpdateCategoryValidator
} from '@merkaly/api/src/inventory/categories/category.validator'
import { plainToInstance } from 'class-transformer'
import { useAxios } from '../../axios'
import CategoryReference from './category.reference'

export class Category {
  public find (params?: FindCategoryValidator) {
    return useAxios.get<CategoryReference[]>('/inventory/categories/', { params })
      .then(categories => categories.map(category => plainToInstance(CategoryReference, category)))
  }

  public read (id: IdCategoryValidator) {
    return useAxios.get<CategoryReference>('/inventory/categories/' + id)
      .then(category => plainToInstance(CategoryReference, category))
  }

  public create (payload: CreateCategoryValidator) {
    return useAxios.post<CategoryReference>('/inventory/categories/', payload)
      .then(category => plainToInstance(CategoryReference, category))
  }

  public update (id: IdCategoryValidator, payload: UpdateCategoryValidator) {
    return useAxios.patch<CategoryReference>('/inventory/categories/' + id, payload)
      .then(category => plainToInstance(CategoryReference, category))
  }

  public remove (id: IdCategoryValidator) {
    return useAxios.delete<void>('/inventory/categories/' + id)
  }
}
