import { NuxtAxiosInstance } from '@nuxtjs/axios'
import axios from 'axios'

// @ts-ignore
const useAxios: NuxtAxiosInstance = axios.create()

export default useAxios
