import { join } from 'path'
import { $InventoryPath } from '@merkaly/api/src/inventory'
import { BrandEntity, CreateBrandValidator, UpdateBrandValidator } from '@merkaly/api/src/inventory/brands'
import BrandReference from './brand.reference'

export const route = (...path: string[]) => join($InventoryPath, BrandEntity.$path, ...path)

namespace Brand {
  export const find = (): Promise<BrandReference[]> => {
    return $nuxt.$request.get(route())
  }

  export const read = (id: string): Promise<BrandReference> => {
    return $nuxt.$request.get(route(id))
  }

  export const create = (payload: CreateBrandValidator): Promise<BrandReference> => {
    return $nuxt.$request.post(route(), payload)
  }

  export const update = (id: string, payload: UpdateBrandValidator): Promise<BrandReference> => {
    return $nuxt.$request.put(route(id), payload)
  }

  export const remove = (id: string): Promise<void> => {
    return $nuxt.$request.delete(route(id))
  }
}

export default Brand
