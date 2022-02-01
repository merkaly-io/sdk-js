import { join } from 'path'
import { $InventoryPath } from '@merkaly/api/src/inventory'
import { CategoryEntity, CreateCategoryValidator, UpdateCategoryValidator } from '@merkaly/api/src/inventory/categories'
import axios from '../../app.axios'
import CategoryReference from './category.reference'

const route = (...path: string[]) => join($InventoryPath, CategoryEntity.$path, ...path)

export default class Category {
  public static readonly find = (): Promise<CategoryReference[]> => axios.$get(route())

  public static readonly read = (id: string): Promise<CategoryReference> => axios.$get(route(id))

  public static readonly create = (payload: CreateCategoryValidator): Promise<CategoryReference> => axios.$post(route(), payload)

  public static readonly update = (id: string, payload: UpdateCategoryValidator): Promise<CategoryReference> => axios.$put(route(id), payload)

  public static readonly remove = (id: string): Promise<void> => axios.$delete(route(id))
}
