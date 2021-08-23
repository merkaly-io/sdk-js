import { $AccountPath } from '@merkaly/api/src/account'
import {
	CreateOrganizationValidator,
	OrganizationEntity,
	UpdateOrganizationValidator
} from '@merkaly/api/src/account/organizations'
import { join } from 'path'
import axios from '../../app.axios'
import OrganizationReference from './organization.reference'

export const route = (...path: string[]) => join($AccountPath, OrganizationEntity.$path, ...path)

namespace Organization {
  export async function find (): Promise<OrganizationReference[]> {
  	return axios.$get(route())
  }

  export function read (id: string): Promise<OrganizationReference> {
  	return axios.$get(route(id))
  }

  export async function create (payload: CreateOrganizationValidator): Promise<OrganizationReference> {
  	return axios.$post(route(), payload)
  }

  export async function update (id: string, payload: UpdateOrganizationValidator): Promise<OrganizationReference> {
  	return axios.$put(route(id), payload)
  }

  export async function remove (id: string): Promise<void> {
  	return axios.$delete(route(id))
  }
}

export default Organization
