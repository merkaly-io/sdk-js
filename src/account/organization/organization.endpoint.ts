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

export default class Organization {
  public static readonly find = (): Promise<OrganizationReference[]> => axios.$get(basePath())

  public static readonly read = (id: string): Promise<OrganizationReference> => axios.$get(basePath(id))

  public static readonly create = (payload: CreateOrganizationValidator): Promise<OrganizationReference> => axios.$post(basePath(), payload)

  public static readonly update = (id: string, payload: UpdateOrganizationValidator): Promise<OrganizationReference> => axios.$patch(basePath(id), payload)

  public static readonly remove = (id: string): Promise<void> => axios.$delete(basePath(id))
}
