import { $InventoryPath } from '@merkaly/api/src/inventory'
import { CategoryEntity, CreateCategoryValidator, UpdateCategoryValidator } from '@merkaly/api/src/inventory/categories'
import { join } from 'path'
import axios from '../../app.axios'
import CategoryReference from './category.reference'

const route = (...path: string[]) => join($InventoryPath, CategoryEntity.$path, ...path)

namespace Category {
  export async function find (): Promise<CategoryReference[]> {
    return axios.$get(route())
  }

  export async function read (id: string): Promise<CategoryReference> {
    return axios.$get(route(id))
  }

  export async function create (payload: CreateCategoryValidator): Promise<CategoryReference> {
    return axios.$post(route(), payload)
  }

  export async function update (id: string, payload: UpdateCategoryValidator): Promise<CategoryReference> {
    return axios.$put(route(id), payload)
  }

  export async function remove (id: string): Promise<void> {
    return axios.$delete(route(id))
  }
}

export default Category
