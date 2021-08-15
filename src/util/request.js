import axios from 'axios'
import { getToken } from './auth'

const instance = axios.create({
	baseURL: 'http://localhost:3009',
	timeout: 5000,
})

// 全局请求拦截
instance.interceptors.request.use(
	function(config) {
		//   如果有token，立马放到请求头里面
		if (getToken()) {
			config.headers.authorization = 'Bearer ' + getToken() //相当于令牌
		}
		return config
	},
	function(error) {
		// Do something with request error
		return Promise.reject(error)
	}
)
// 响应拦截
instance.interceptors.response.use(
	function(response) {
		return response
	},
	function(error) {
		return Promise.reject(error)
	}
)
/**
 * 封装get请求
 * 第一个参数表示请求的url地址
 * 第二个参数表示数据
 * */

export const get = (url, params) => instance.get(url, { params })

// 封装一下post请求
export const post = (url, data) => instance.post(url, data)
export const del = (url, data) => instance.delete(url, data)
export const pput = (url, data) => instance.put(url, data)


export const delmanycart = (data) => post("/api/v1/shop_carts/delmany", data);

export default instance

/*

axios.get('/user', {
    params: {
      ID: 12345
    }
  })

axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
*/
