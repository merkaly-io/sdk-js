import { join } from 'path'
import { $AccountPath } from '@merkaly/api/src/account'
import {
  CreateOrganizationValidator,
  OrganizationEntity,
  UpdateOrganizationValidator
} from '@merkaly/api/src/account/organizations'
import OrganizationReference from './organization.reference'

export const basePath = (...path: string[]) => join($AccountPath, OrganizationEntity.$path, ...path)

export default class Organization {
  public static readonly find = (): Promise<OrganizationReference[]> => $nuxt.$axios.get(basePath())

  public static readonly read = (id: string): Promise<OrganizationReference> => $nuxt.$axios.get(basePath(id))

  public static readonly create = (payload: CreateOrganizationValidator): Promise<OrganizationReference> => $nuxt.$axios.post(basePath(), payload)

  public static readonly update = (id: string, payload: UpdateOrganizationValidator): Promise<OrganizationReference> => $nuxt.$axios.patch(basePath(id), payload)

  public static readonly remove = (id: string): Promise<void> => $nuxt.$axios.delete(basePath(id))
}
