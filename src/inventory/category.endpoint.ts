import CategoryEntity from '@sk-merkaly/server/dist/inventory/category/category.entity'
import * as validator from '@sk-merkaly/server/dist/inventory/category/category.validator'
import $axios from 'axios'
import { join } from 'path'
import AbstractEndpoint from '../abstract.endpoint'

const endpoint: AbstractEndpoint<CategoryEntity> = {
  async find () {
    const { data } = await $axios.get('/categories')

    return data
  },

  async read (id: string) {
    const { data } = await $axios.get(join('/categories', id))

    return data
  },

  async create (payload: validator.default) {
    const { data } = await $axios.post('/categories', payload)

    return data
  },

  async update (id: string, payload: validator.default) {
    const { data } = await $axios.put(join('/categories', id), payload)

    return data
  },

  async remove (id: string) {
    const { data } = await $axios.delete(join('/categories', id))

    return data
  }
}

export default endpoint
