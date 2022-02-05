import { join } from 'path'
import { $AccountPath } from '@merkaly/api/src/account'
import {
  CreateOrganizationValidator,
  OrganizationEntity,
  UpdateOrganizationValidator
} from '@merkaly/api/src/account/organizations'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import OrganizationReference from './organization.reference'

export const basePath = (...path: string[]) => join($AccountPath, OrganizationEntity.$path, ...path)

export default function Organization ($axios: NuxtAxiosInstance) {
  function find (): Promise<OrganizationReference[]> {
    return $axios.get(basePath())
  }

  function read (id: string): Promise<OrganizationReference> {
    return $axios.get(basePath(id))
  }

  function create (payload: CreateOrganizationValidator): Promise<OrganizationReference> {
    return $axios.post(basePath(), payload)
  }

  function update (id: string, payload: UpdateOrganizationValidator): Promise<OrganizationReference> {
    return $axios.patch(basePath(id), payload)
  }

  function remove (id: string): Promise<void> {
    return $axios.delete(basePath(id))
  }

  return { find, read, create, update, remove }
}
