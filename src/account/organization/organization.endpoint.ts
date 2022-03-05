import { Account } from '@merkaly/api'
import { plainToInstance } from 'class-transformer'
import MerkalySDK from '../../sdk'
import OrganizationReference from './organization.reference'
import Validator = Account.Organization.Validator

export class Organization {
  public find (params?: Validator.FindOrganizationValidator) {
    return MerkalySDK.$axios.get<OrganizationReference[]>('/account/organizations/', { params })
      .then(organizations => organizations.map(organization => plainToInstance(OrganizationReference, organization)))
  }

  public read (id: Validator.IdOrganizationValidator) {
    return MerkalySDK.$axios.get<OrganizationReference>('/account/organizations/' + id)
      .then(organization => plainToInstance(OrganizationReference, organization))
  }

  public create (payload: Validator.CreateOrganizationValidator) {
    return MerkalySDK.$axios.post<OrganizationReference>('/account/organizations/', payload)
      .then(organization => plainToInstance(OrganizationReference, organization))
  }

  public update (id: Validator.IdOrganizationValidator, payload: Validator.UpdateOrganizationValidator) {
    return MerkalySDK.$axios.patch<OrganizationReference>('/account/organizations/' + id, payload)
      .then(organization => plainToInstance(OrganizationReference, organization))
  }

  public remove (id: Validator.IdOrganizationValidator) {
    return MerkalySDK.$axios.delete<void>('/account/organizations/' + id)
  }
}
