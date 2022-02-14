import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'development' ? '/' : '';
const TIMEOUT = 5000;

const service = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
});

service.interceptors.request.use(
  config => {
    return config;
  }, 
  error => {
    return Promise.reject(error);
  }
)

service.interceptors.response.use(
  res => {
    if (res.status !== 200) {
      console.log('请求出错，错误的状态码 ===>', res.status);
    }
    return res.data;
  },
  error => {
    console.log('请求出错', error);
  }
)

export default service;