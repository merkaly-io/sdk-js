import {
  CreateOrganizationValidator,
  FindOrganizationValidator,
  IdOrganizationValidator,
  UpdateOrganizationValidator
} from '@merkaly/api/src/account/organizations/organization.validator'
import { plainToInstance } from 'class-transformer'
import MerkalySDK from '../../sdk'
import OrganizationReference from './organization.reference'

export class Organization {
  public find (params?: FindOrganizationValidator) {
    return MerkalySDK.$axios.get<OrganizationReference[]>('/account/organizations/', { params })
      .then(organizations => organizations.map(organization => plainToInstance(OrganizationReference, organization)))
  }

  public read (id: IdOrganizationValidator) {
    return MerkalySDK.$axios.get<OrganizationReference>('/account/organizations/' + id)
      .then(organization => plainToInstance(OrganizationReference, organization))
  }

  public create (payload: CreateOrganizationValidator) {
    return MerkalySDK.$axios.post<OrganizationReference>('/account/organizations/', payload)
      .then(organization => plainToInstance(OrganizationReference, organization))
  }

  public update (id: IdOrganizationValidator, payload: UpdateOrganizationValidator) {
    return MerkalySDK.$axios.patch<OrganizationReference>('/account/organizations/' + id, payload)
      .then(organization => plainToInstance(OrganizationReference, organization))
  }

  public remove (id: IdOrganizationValidator) {
    return MerkalySDK.$axios.delete<void>('/account/organizations/' + id)
  }
}
