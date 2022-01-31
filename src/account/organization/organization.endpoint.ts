import { $AccountPath } from '@merkaly/api/src/account'
import {
	CreateOrganizationValidator,
	OrganizationEntity,
	UpdateOrganizationValidator
} from '@merkaly/api/src/account/organizations'
import { join } from 'path'
import axios from '../../app.axios'
import OrganizationReference from './organization.reference'

export const basePath = (...path: string[]) => join($AccountPath, OrganizationEntity.$path, ...path)

namespace Organization {
	export const find = async (): Promise<OrganizationReference[]> => axios.$get(basePath())

	export const read = (id: string): Promise<OrganizationReference> => axios.$get(basePath(id))

	export const create = async (payload: CreateOrganizationValidator): Promise<OrganizationReference> => axios.$post(basePath(), payload)

	export const update = async (id: string, payload: UpdateOrganizationValidator): Promise<OrganizationReference> => axios.$patch(basePath(id), payload)

	export const remove = async (id: string): Promise<void> => axios.$delete(basePath(id))
}

export default Organization
