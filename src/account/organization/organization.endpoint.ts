import AccountModule from '@merkaly/api/src/account/account.module'
import OrganizationModule from '@merkaly/api/src/account/organizations/organization.module'
import * as validator from '@merkaly/api/src/account/organizations/organization.validator'
import $axios from 'axios'
import { join } from 'path'
import OrganizationReference from './organization.reference'

const route = (...path: string[]) => join(AccountModule.$path, OrganizationModule.$path, ...path)

namespace Organization {
  export const find = async () => $axios.get<OrganizationReference[]>(route())

  export const read = async (id: string) => $axios.get<OrganizationReference>(route(id))

  export const create = async (payload: validator.CreateOrganizationValidator) => $axios.post<OrganizationReference>(route(), payload)

  export const update = async (id: string, payload: validator.UpdateOrganizationValidator) => $axios.put<OrganizationReference>(route(id), payload)

  export const remove = async (id: string) => $axios.delete<void>(route(id))
}

export default Organization
