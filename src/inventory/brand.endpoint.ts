import BrandEntity from '@sk-merkaly/server/dist/inventory/brand/brand.entity'
import * as validator from '@sk-merkaly/server/dist/inventory/brand/brand.validator'
import $axios from 'axios'
import { join } from 'path'
import AbstractEndpoint from '../abstract.endpoint'

const endpoint: AbstractEndpoint<BrandEntity> = {
  async find () {
    const { data } = await $axios.get('/brands')

    return data
  },

  async read (id: string) {
    const { data } = await $axios.get(join('/brands', id))

    return data
  },

  async create (payload: validator.default) {
    const { data } = await $axios.post('/brands', payload)

    return data
  },

  async update (id: string, payload: validator.default) {
    const { data } = await $axios.put(join('/brands', id), payload)

    return data
  },

  async remove (id: string) {
    const { data } = await $axios.delete(join('/brands', id))

    return data
  }
}

export default endpoint
