import axios, { AxiosError } from 'axios'
import {
  ElNotification
} from 'element-plus'
import {
  store
} from '../store'
import router from '../router'

const request = axios.create({
  baseURL: '/',
  timeout: 30000
})

const err = (error: AxiosError) => {
  if (error.response && error.response.status === 401) {
    const isLoginPage = (): boolean => router.currentRoute.value.path === '/login'

    if (!isLoginPage()) {
      ElNotification({
        type: 'error',
        message: '鉴权失败,请重新登录!'
      })
      // router.push('/login')
    }
  } else {
    if (error.message && error.message.includes('timeout')) {
      ElNotification({
        type: 'error',
        message: '网络连接超时，请检查您的网络!'
      })
    } else {
      ElNotification({
        type: 'error',
        message: '服务器异常，请联系管理员!'
      })
    }
  }
  return Promise.reject(error)
}

request.interceptors.request.use((config) => {
  const token = store.state.token || localStorage.getItem('token')
  if (token) {
    config.headers.token = token
  }
  config.headers['Content-Type'] = 'application/json;charset=UTF-8'
  return config
}, err)

request.interceptors.response.use((res) => {
  return res.data
}, err)

export {
  request
}
