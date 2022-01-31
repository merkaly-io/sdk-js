import { OrganizationEntity } from '@merkaly/api/src/account/organizations/organization.entity'
import { CreateOrganizationValidator } from '@merkaly/api/src/account/organizations/organization.validator'
import faker from 'faker'
import ManagerSDK from '../../../src/sdk.manager'

describe('Manager > Account > Organization', () => {
	ManagerSDK.setBaseUrl(String(process.env.baseUrl))
	const $merkaly = new ManagerSDK()

	// beforeAll(async () => $merkaly.$auth.login({
	//   username: String(process.env.username),
	//   password: String(process.env.password)
	// }))

	describe('when an organization is created', () => {
		let organization: OrganizationEntity
		const payload: CreateOrganizationValidator = {
			name: faker.lorem.word(12),
			display_name: faker.company.companyName(),
			logo_url: faker.image.avatar(),
			primary_color: faker.internet.color(),
			secondary_color: faker.internet.color()
		}

		beforeAll(async () => {
			organization = await $merkaly.account.organizations.create(payload)

			expect(organization.id.startsWith('org_')).toBeTruthy()
		})

		test('should retrieve the created organization', async () => {
			const createdOrg = await $merkaly.account.organizations.read(organization.id)

			expect(createdOrg.name).toEqual(payload.name)
			expect(createdOrg.display_name).toEqual(payload.display_name)
			expect(createdOrg.branding.logo_url).toEqual(payload.logo_url)
			expect(createdOrg.branding.colors.primary).toEqual(payload.primary_color)
			expect(createdOrg.branding.colors.page_background).toEqual(payload.secondary_color)
		})

		test('should retrieve all organizations including the created organization', async () => {
			const organizations = await $merkaly.account.organizations.find()

			expect(organizations).toEqual(expect.arrayContaining([expect.objectContaining(organization)]))

		})

		afterAll(async () => {
			await $merkaly.account.organizations.remove(organization.id)
			const removedOrganization = await $merkaly.account.organizations.read(organization.id)

			expect(removedOrganization).toBeFalsy()
		})
	})

})
