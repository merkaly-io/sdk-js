import { Account } from '@merkaly/api'
import $axios from 'axios'
import { join } from 'path'
import OrganizationReference from './organization.reference'

export const route = (...path: string[]) => join(Account.$path, Account.Organization.Entity.$path, ...path)

namespace Organization {
  export const find = async () => $axios.get<OrganizationReference[]>(route())

  export const read = async (id: string) => $axios.get<OrganizationReference>(route(id))

  export const create = async (payload: Account.Organization.validators.CreateOrganizationValidator) => $axios.post<OrganizationReference>(route(), payload)

  export const update = async (id: string, payload: Account.Organization.validators.UpdateOrganizationValidator) => $axios.put<OrganizationReference>(route(id), payload)

  export const remove = async (id: string) => $axios.delete<void>(route(id))
}

export default Organization
