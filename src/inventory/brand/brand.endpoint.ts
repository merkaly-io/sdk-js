import BrandModule from '@merkaly/api/src/inventory/brands/brand.module'
import * as validator from '@merkaly/api/src/inventory/brands/brand.validator'
import InventoryModule from '@merkaly/api/src/inventory/inventory.module'
import $axios from 'axios'
import { join } from 'path'
import BrandReference from './brand.reference'

export const find = async () =>
  $axios.get<BrandReference[]>(join(InventoryModule.$path, BrandModule.$path))

export const read = async (id: string) =>
  $axios.get<BrandReference>(join(InventoryModule.$path, BrandModule.$path, id))

export const create = async (payload: validator.CreateValidator) =>
  $axios.post<BrandReference>(join(InventoryModule.$path, BrandModule.$path), payload)

export const update = async (id: string, payload: validator.UpdateValidator) =>
  $axios.put<BrandReference>(join(InventoryModule.$path, BrandModule.$path, id), payload)

export const remove = async (id: string) =>
  $axios.delete<void>(join(InventoryModule.$path, BrandModule.$path, id))
