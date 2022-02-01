import Account from './account/index'
import SDK from './sdk'

// import Inventory from './inventory/index'

export class ManagerSDK extends SDK {
	public get account () {
		return {
			organizations: Account.organizations(),
			users: Account.users(),
			roles: Account.roles()
		}
	}

	// public get inventory () {
	// 	return {
	// 		products: Inventory.products(),
	// 		properties: Inventory.properties(),
	// 		categories: Inventory.categories(),
	// 		brands: Inventory.brands()
	// 	}
	// }
}
