import axios from "axios"

const request = axios.create({
  baseURL: "http://geek.itheima.net/",
})

//添加响应拦截器
request.interceptors.response.use(
  res => {
    return res.data
  },
  err => {
    return Promise.reject(err)
  }
)

export default request
