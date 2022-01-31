import Account from './account/index'
import SDK from './app'
import Inventory from './inventory/index'
import Store from './store/index'

export default class AdminSDK extends SDK {
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
