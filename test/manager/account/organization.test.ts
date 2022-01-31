import {
	CreateOrganizationValidator,
	UpdateOrganizationValidator
} from '@merkaly/api/src/account/organizations/organization.validator'
import faker from 'faker'
import OrganizationReference from '../../../src/account/organization/organization.reference'
import ManagerSDK from '../../../src/sdk.manager'

describe('Manager > Account > Organization', () => {
	const $merkaly = new ManagerSDK()
	let organization: OrganizationReference
	const createValidator: CreateOrganizationValidator = {
		name: faker.lorem.word(12),
		display_name: faker.company.companyName(),
		logo_url: faker.image.avatar(),
		primary_color: faker.internet.color(),
		secondary_color: faker.internet.color()
	}

	beforeAll(async () => {
		organization = await $merkaly.account.organizations.create(createValidator)

		expect(organization.id.startsWith('org_')).toBeTruthy()
	})
	// beforeAll(async () => $merkaly.$auth.login({
	//   username: String(process.env.username),
	//   password: String(process.env.password)
	// }))

	describe('when an organization is created', () => {

		test('should retrieve the created organization', async () => {
			const createdOrg = await $merkaly.account.organizations.read(organization.id)

			expect(createdOrg.name).toEqual(createValidator.name)
			expect(createdOrg.display_name).toEqual(createValidator.display_name)
			expect(createdOrg.branding.logo_url).toEqual(createValidator.logo_url)
			expect(createdOrg.branding.colors.primary).toEqual(createValidator.primary_color)
			expect(createdOrg.branding.colors.page_background).toEqual(createValidator.secondary_color)
		})

		test('should retrieve all organizations including the created organization', async () => {
			const organizations = await $merkaly.account.organizations.find()

			expect(organizations).toEqual(expect.arrayContaining([expect.objectContaining(organization)]))

		})

		test('should update the created organization', async () => {
			const updateValidator: UpdateOrganizationValidator = {
				display_name: faker.company.companyName(),
				logo_url: faker.image.avatar(),
				primary_color: faker.internet.color(),
				secondary_color: faker.internet.color()
			}

			const updatedOrg = await $merkaly.account.organizations.update(organization.id, updateValidator)

			expect(updatedOrg.display_name).toEqual(updateValidator.display_name)
			expect(updatedOrg.branding.logo_url).toEqual(updateValidator.logo_url)
			expect(updatedOrg.branding.colors.primary).toEqual(updateValidator.primary_color)
			expect(updatedOrg.branding.colors.page_background).toEqual(updateValidator.secondary_color)
		})

	})

	afterAll(async () => {
		await $merkaly.account.organizations.remove(organization.id)
		const removedOrganization = await $merkaly.account.organizations.read(organization.id)

		expect(removedOrganization).toBeFalsy()
	})
})
