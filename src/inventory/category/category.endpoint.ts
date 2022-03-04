import {
  CreateCategoryValidator,
  FindCategoryValidator,
  IdCategoryValidator,
  UpdateCategoryValidator
} from '@merkaly/api/src/inventory/categories/category.validator'
import { plainToInstance } from 'class-transformer'
import MerkalySDK from '../../sdk'
import CategoryReference from './category.reference'

export class Category {
  public find (params?: FindCategoryValidator) {
    return MerkalySDK.$axios.get<CategoryReference[]>('/inventory/categories/', { params })
      .then(categories => categories.map(category => plainToInstance(CategoryReference, category)))
  }

  public read (id: IdCategoryValidator) {
    return MerkalySDK.$axios.get<CategoryReference>('/inventory/categories/' + id)
      .then(category => plainToInstance(CategoryReference, category))
  }

  public create (payload: CreateCategoryValidator) {
    return MerkalySDK.$axios.post<CategoryReference>('/inventory/categories/', payload)
      .then(category => plainToInstance(CategoryReference, category))
  }

  public update (id: IdCategoryValidator, payload: UpdateCategoryValidator) {
    return MerkalySDK.$axios.patch<CategoryReference>('/inventory/categories/' + id, payload)
      .then(category => plainToInstance(CategoryReference, category))
  }

  public remove (id: IdCategoryValidator) {
    return MerkalySDK.$axios.delete<void>('/inventory/categories/' + id)
  }
}
