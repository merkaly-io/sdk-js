import Account from './account/index'
import Inventory from './inventory/index'
import SDK from './sdk'
import Store from './store/index'

export class AdminSDK extends SDK {
	public get inventory () {
		return {
			products: Inventory.products(),
			brands: Inventory.brands(),
			properties: Inventory.properties(),
			categories: Inventory.categories()
		}
	}

	public get account () {
		return {
			users: Account.users(),
			roles: Account.roles()
		}
	}

	public get store () {
		return {
			orders: Store.orders(),
			carts: Store.carts()
		}
	}
}
