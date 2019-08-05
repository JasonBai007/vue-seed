import axios from 'axios'
import router from './router'
import {
  Message
} from 'element-ui';

// 构建请求对象
const http = axios.create({
  baseURL: 'api/v1/',
  timeout: 1000 * 5,
  headers: {},
})

// 简单的封装GET方法
http.get = (url, params) => {
  return new Promise((resolve, reject) => {
    http({
      method: 'GET',
      url,
      params: params
    }).then(res => {
      if (res.data.code !== 0) {
        Message.warning(res.data.msg)
        reject()
      } else {
        resolve(res.data.data);
      }
    }).catch(err => {
      reject(err.data)
    })
  })
}

// 简单的封装POST方法
http.post = (url, data) => {
  return new Promise((resolve, reject) => {
    http({
      method: 'POST',
      url,
      data: data
    }).then(res => {
      if (res.data.code !== 0) {
        Message.warning(res.data.msg)
        reject()
      } else {
        resolve(res.data.data);
      }
    }).catch(err => {
      reject(err.data)
    })
  })
}

// 请求拦截器
http.interceptors.request.use(config => {
    // 如果本地存储中有token字段， 就为所有请求加上Authorization请求头
    if (localStorage.token) {
      config.headers["Authorization"] = `Bearer ${localStorage.token}`
    }
    return config;
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  })

// 响应拦截器
http.interceptors.response.use(response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        // 如果后端返回没有权限
        case 401:
          // 清除token信息并跳转到登录页面
          localStorage.clear()
          router.replace("/signin");
      }
    }
    return Promise.reject(error.response.data) // 返回接口返回的错误信息
  })

export default http
