import PropertyEntity from '@sk-merkaly/server/dist/inventory/property/property.entity'
import * as validator from '@sk-merkaly/server/dist/inventory/property/property.validator'
import $axios from 'axios'
import { join } from 'path'
import AbstractEndpoint from '../abstract.endpoint'

const endpoint: AbstractEndpoint<PropertyEntity> = {
  async find () {
    const { data } = await $axios.get('/properties')

    return data
  },

  async read (id: string) {
    const { data } = await $axios.get(join('/properties', id))

    return data
  },

  async create (payload: validator.default) {
    const { data } = await $axios.post('/properties', payload)

    return data
  },

  async update (id: string, payload: validator.default) {
    const { data } = await $axios.put(join('/properties', id), payload)

    return data
  },

  async remove (id: string) {
    const { data } = await $axios.delete(join('/properties', id))

    return data
  }
}

export default endpoint
