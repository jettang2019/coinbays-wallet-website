import axios from 'axios'

const systemErrorMsg = '您的服务器走丢了，请稍等几分钟再试'

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 8000
})

instance.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    return config
  },
  (error) => {
    // Toast.fail(systemErrorMsg)
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    const data = response.data
    if (typeof data !== 'object') {
      // Toast.fail(systemErrorMsg)
      return Promise.reject(response)
    }
    if (data.code !== 200) {
      // Toast.info(data.msg)
      return Promise.reject(data.msg)
    }
    return data
  },
  (error) => {
    // Toast.info(systemErrorMsg)
    return Promise.reject(error)
  }
)

export default instance
