import { join } from 'path'
import { $AccountPath } from '@merkaly/api/src/account'
import {
  CreateOrganizationValidator,
  OrganizationEntity,
  UpdateOrganizationValidator
} from '@merkaly/api/src/account/organizations'
import axios from '../../app.axios'
import OrganizationReference from './organization.reference'

export const basePath = (...path: string[]) => join($AccountPath, OrganizationEntity.$path, ...path)

namespace Organization {
  export const find = (): Promise<OrganizationReference[]> => axios.$get(basePath())

  export const read = (id: string): Promise<OrganizationReference> => axios.$get(basePath(id))

  export const create = (payload: CreateOrganizationValidator): Promise<OrganizationReference> => axios.$post(basePath(), payload)

  export const update = (id: string, payload: UpdateOrganizationValidator): Promise<OrganizationReference> => axios.$patch(basePath(id), payload)

  export const remove = (id: string): Promise<void> => axios.$delete(basePath(id))
}

export default Organization
