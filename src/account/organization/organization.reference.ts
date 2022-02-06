import { join } from 'path'
import {
  OrganizationBranding,
  OrganizationEntity,
  OrganizationMemberEntity
} from '@merkaly/api/src/account/organizations'
import { basePath } from './organization.endpoint'

export default class OrganizationReference extends OrganizationEntity {
  public name: string
  public display_name: string
  public branding: OrganizationBranding
  public members: OrganizationMemberEntity[] = []

  protected get $route () {
    return basePath(this.id, OrganizationMemberEntity.$path)
  }

  public getMembers () {
    return $nuxt.$request.$get<OrganizationMemberEntity[]>(this.$route)
      .then(members => (this.members = members))
  }

  public addMember (ids: string[]) {
    return $nuxt.$request.$post<OrganizationMemberEntity>(join(this.$route, 'members'), ids)
      .then(member => (this.members.push(member)))
  }

  public removeMember (id: string) {
    return $nuxt.$request.$delete<OrganizationMemberEntity[]>(join(this.$route + id))
      .then(members => (this.members = members))
  }
}
