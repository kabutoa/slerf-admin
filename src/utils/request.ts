import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    if (config.showLoading) {
      window.$loadingBar?.start()
    }

    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    window.$loadingBar?.finish()
    return Promise.reject(error)
  },
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    if (response.config.showLoading) {
      window.$loadingBar?.finish()
    }

    const { success, message: msg, data } = response.data
    if (!success) {
      window.$message?.error(msg)
      return Promise.reject(msg)
    }
    return data
  },
  (error) => {
    window.$loadingBar?.finish()
    window.$message?.error(error.message)
    return Promise.reject(error)
  },
)

const request = <T>(config: AxiosRequestConfig): Promise<T> => {
  if (config.method === 'GET') {
    config.params = config.data
    delete config.data
  }
  if (config.method === 'POST') {
    config.headers = {
      'Content-Type': 'application/json;charset=UTF-8',
    }
  }
  return instance(config)
}

export default request
