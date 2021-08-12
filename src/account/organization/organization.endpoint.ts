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
  export async function find (): Promise<OrganizationReference[]> {
    return $axios.get(route())
      .then(({ data }) => OrganizationReference.fromArrayOfPlains(data))
  }

  export function read (id: string): Promise<OrganizationReference> {
    return $axios.get(route(id))
      .then(({ data }) => OrganizationReference.fromPlain(data))
  }

  export async function create (payload: CreateOrganizationValidator): Promise<OrganizationReference> {
    return $axios.post(route(), payload)
      .then(({ data }) => OrganizationReference.fromPlain(data))
  }

  export async function update (id: string, payload: UpdateOrganizationValidator): Promise<OrganizationReference> {
    return $axios.put(route(id), payload)
      .then(({ data }) => OrganizationReference.fromPlain(data))
  }

  export async function remove (id: string): Promise<void> {
    return $axios.delete(route(id))
      .then(({ data }) => data)
  }
}

export default Organization
