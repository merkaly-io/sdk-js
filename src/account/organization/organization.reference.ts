import OrganizationEntity from '@merkaly/api/dist/account/organizations/organization.entity'

interface OrganizationBranding {
  logo_url: string
  colors: string
}

export default class OrganizationReference extends OrganizationEntity {

  public branding: OrganizationBranding
}
