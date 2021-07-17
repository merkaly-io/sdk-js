import API from '@merkaly/api'

interface OrganizationBranding {
  logo_url: string
  colors: string
}

export default class OrganizationReference extends API.Account.Organization.Entity {
  public branding: OrganizationBranding
}
