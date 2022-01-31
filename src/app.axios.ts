import $axios from 'axios'
import https from 'https'

const request = $axios.create()
request.interceptors.response.use(({ data }) => data)

namespace axios {
	export const setBaseUrl = (dsn: string, rejectUnauthorized = false) => {
		request.defaults.httpsAgent = new https.Agent({ rejectUnauthorized })
		request.defaults.baseURL = dsn
	}

	export const $get = async <T> (path: string): Promise<T> => request.get(path)

	export const $post = async <T> (path: string, data: unknown): Promise<T> => request.post(path, data)

	export const $patch = async <T> (path: string, data: unknown): Promise<T> => request.patch(path, data)

	export const $put = async <T> (path: string, data: unknown): Promise<T> => request.patch(path, data)

	export const $delete = async <T> (path: string): Promise<T> => request.delete(path)
}

export default axios
