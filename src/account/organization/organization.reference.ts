import { join } from 'path'
import {
  OrganizationBranding,
  OrganizationEntity,
  OrganizationMemberEntity
} from '@merkaly/api/src/account/organizations'
import axios from '../../app.axios'
import AppReference, { EntityType } from '../../app.reference'
import { basePath } from './organization.endpoint'

export default class OrganizationReference extends AppReference implements EntityType<OrganizationEntity> {
  public name: string
  public display_name: string
  public branding: OrganizationBranding
  public members: OrganizationMemberEntity[] = []

  protected get $route () {
    return basePath(this.id, OrganizationMemberEntity.$path)
  }

  public getMembers () {
    return axios.$get<OrganizationMemberEntity[]>(this.$route)
      .then(members => (this.members = members))
  }

  public addMember (ids: string[]) {
    return axios.$post<OrganizationMemberEntity>(join(this.$route, 'members'), ids)
      .then(member => (this.members.push(member)))
  }

  public removeMember (id: string) {
    return axios.$delete<OrganizationMemberEntity[]>(join(this.$route + id))
      .then(members => (this.members = members))
  }
}
