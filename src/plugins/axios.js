import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Swal from 'sweetalert2'
import store from '../store'
import router from '../router'

export const api = axios.create({
  baseURL: process.env.VUE_APP_API
})

// axios攔截器
// axios 呼叫回應時 -> 攔截器 -> 呼叫的地方的 trycatch
api.interceptors.response.use(res => {
  // 成功
  return res
  // 失敗
}, error => {
  if (error.response) {
    if (error.response.status === 401) {
      if (error.config.url !== '/users/extend') {
        const originalRequest = error.config
        return api.post('/users/extend', {}, {
          headers: {
            authorization: 'Bearer ' + store.state.user.token
          }
        }).then(({ data }) => {
          store.commit('user/extend', data.result.token)
          originalRequest.headers.authorization = 'Bearer ' + store.state.user.token
          return axios(originalRequest)
        }).catch(error => {
          store.commit('user/logout')
          router.push('/login')
          return Promise.reject(error)
        })
      }
    }
  } else {
    // 連結失敗 & 請求逾時
    if (error.code === 'ECONNABORTED' && error.message.includes('timeout')) {
      Swal.fire({
        icon: 'error',
        title: '錯誤',
        text: '請求逾時'
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: '錯誤',
        text: '網路不穩'
      })
    }
  }
  return Promise.reject(error)
})

Vue.use(VueAxios, { axios, api })
