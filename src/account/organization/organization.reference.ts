import {
  OrganizationBranding,
  OrganizationEntity,
  OrganizationMemberEntity
} from '@merkaly/api/src/account/organizations'
import $axios from 'axios'
import { join } from 'path'
import AppReference from '../../app.reference'
import { route } from './organization.endpoint'

export default class OrganizationReference extends AppReference<OrganizationEntity> {

  public name: string
  public display_name: string
  public branding: OrganizationBranding
  public members: OrganizationMemberEntity[] = []

  protected get $route () {
    return route(this.id, OrganizationMemberEntity.$path)
  }

  public getMembers () {
    return $axios.get<OrganizationMemberEntity[]>(this.$route)
      .then(({ data: members }) => (this.members = members))
  }

  public addMember (id: string) {
    return $axios.post<OrganizationMemberEntity>(this.$route, { id })
      .then(({ data: member }) => (this.members.push(member)))
  }

  public removeMember (id: string) {
    return $axios.delete<OrganizationMemberEntity[]>(join(this.$route + id))
      .then(({ data }) => (this.members = data))
  }
}
