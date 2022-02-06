import { join } from 'path'
import { $AccountPath } from '@merkaly/api/src/account'
import {
  CreateOrganizationValidator,
  OrganizationEntity,
  UpdateOrganizationValidator
} from '@merkaly/api/src/account/organizations'
import OrganizationReference from './organization.reference'

export const basePath = (...path: string[]) => join($AccountPath, OrganizationEntity.$path, ...path)

namespace Organization {
  export const find = (): Promise<OrganizationReference[]> => {
    return $nuxt.$request.$get(basePath())
  }

  export const read = (id: string): Promise<OrganizationReference> => {
    return $nuxt.$request.$get(basePath(id))
  }

  export const create = (payload: CreateOrganizationValidator): Promise<OrganizationReference> => {
    return $nuxt.$request.$post(basePath(), payload)
  }

  export const update = (id: string, payload: UpdateOrganizationValidator): Promise<OrganizationReference> => {
    return $nuxt.$request.$patch(basePath(id), payload)
  }

  export const remove = (id: string): Promise<void> => {
    return $nuxt.$request.$delete(basePath(id))
  }
}

export default Organization
