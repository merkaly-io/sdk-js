import {
  $AccountPath,
  CreateOrganizationValidator,
  OrganizationEntity,
  UpdateOrganizationValidator
} from '@merkaly/api/src/account'
import $axios from 'axios'
import { join } from 'path'
import OrganizationReference from './organization.reference'

export const route = (...path: string[]) => join($AccountPath, OrganizationEntity.$path, ...path)

namespace Organization {
  export const find = async (): Promise<OrganizationReference[]> =>
    $axios.get(route())
      .then(({ data }) => OrganizationReference.fromArrayOfPlains(data))

  export const read = (id: string): Promise<OrganizationReference> =>
    $axios.get(route(id))
      .then(({ data }) => OrganizationReference.fromPlain(data))

  export const create = async (payload: CreateOrganizationValidator): Promise<OrganizationReference> =>
    $axios.post(route(), payload)
      .then(({ data }) => OrganizationReference.fromPlain(data))

  export const update = async (id: string, payload: UpdateOrganizationValidator): Promise<OrganizationReference> =>
    $axios.put(route(id), payload)
      .then(({ data }) => OrganizationReference.fromPlain(data))

  export const remove = async (id: string): Promise<void> =>
    $axios.delete(route(id))
      .then(({ data }) => data)
}

export default Organization
