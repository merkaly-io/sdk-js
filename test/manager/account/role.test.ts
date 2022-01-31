import { RoleEntity } from '@merkaly/api/src/account/roles/role.entity'
import { CreateRoleValidator } from '@merkaly/api/src/account/roles/role.validator'
import faker from 'faker'
import ManagerSDK from '../../../src/sdk.manager'

describe('Manager > Account > Role', () => {
	ManagerSDK.setBaseUrl(String(process.env.baseUrl))
	const $merkaly = new ManagerSDK()

	// beforeAll(async () => $merkaly.$auth.login({
	//   username: String(process.env.username),
	//   password: String(process.env.password)
	// }))

	describe('when an role is created', () => {
		let role: RoleEntity
		const payload: CreateRoleValidator = {
			name: faker.lorem.word(12),
			description: faker.lorem.paragraph()
		}

		beforeAll(async () => {
			role = await $merkaly.account.roles.create(payload)

			expect(role.id.startsWith('role_')).toBeTruthy()
		})

		test('should retrieve the created role', async () => {
			const createdRole = await $merkaly.account.roles.read(role.id)

			expect(createdRole.name).toEqual(payload.name)
			expect(createdRole.description).toEqual(payload.description)
		})

		test('should retrieve all roles including the created role', async () => {
			const roles = await $merkaly.account.roles.find()

			expect(roles).toEqual(expect.arrayContaining([expect.objectContaining(role)]))

		})

		afterAll(async () => {
			await $merkaly.account.roles.remove(role.id)
			const removedRole = await $merkaly.account.roles.read(role.id)

			expect(removedRole).toBeFalsy()
		})
	})

})
