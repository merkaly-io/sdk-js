import { $InventoryPath } from '@merkaly/api/src/inventory'
import { CategoryEntity, CreateCategoryValidator, UpdateCategoryValidator } from '@merkaly/api/src/inventory/categories'
import { join } from 'path'
import axios from '../../app.axios'
import CategoryReference from './category.reference'

const route = (...path: string[]) => join($InventoryPath, CategoryEntity.$path, ...path)

namespace Category {
  export async function find () {
    return axios.$get<CategoryReference[]>(route())
  }

  export async function read (id: string) {
    return axios.$get<CategoryReference>(route(id))
  }

  export async function create (payload: CreateCategoryValidator) {
    return axios.$post<CategoryReference>(route(), payload)
  }

  export async function update (id: string, payload: UpdateCategoryValidator) {
    return axios.$put<CategoryReference>(route(id), payload)
  }

  export async function remove (id: string) {
    return axios.$delete<void>(route(id))
  }
}

export default Category
