import { Inventory } from '@merkaly/api'
import $axios from 'axios'
import { join } from 'path'
import CategoryReference from './category.reference'

const route = (...path: string[]) => join(Inventory.$path, Inventory.Category.Entity.$path, ...path)

namespace Category {
  export const find = async () =>
  	$axios.get<CategoryReference[]>(route())

  export const read = async (id: string) =>
  	$axios.get<CategoryReference>(route(id))

  export const create = async (payload: Inventory.Category.validators.CreateCategoryValidator) =>
  	$axios.post<CategoryReference>(route(), payload)

  export const update = async (id: string, payload: Inventory.Category.validators.UpdateCategoryValidator) =>
  	$axios.put<CategoryReference>(route(id), payload)

  export const remove = async (id: string) =>
  	$axios.delete<void>(route(id))

}

export default Category
