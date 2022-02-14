# 网络请求 

### 安装 axios

```js
npm i axios -S
```

### 封装 aioxs 模块

```js
// src/utils/request.js
import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'development' ? '/' : ''; // 这里的基本路径是根据 mock 的请求路径来设置
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
    return res.data; // 想请求的数据都在响应的 data 字段中，所以这里直接把 data 字段返回
  },
  error => {
    console.log('请求出错', error);
  }
)

export default service;
```

### 封装 API 模块

```js
// src/api/index.js
import request from '../utils/request';

export const getInfoApi = (params = {}) => {
  return request({
    url: '/get/info',
    method: 'GET',
    params
  })
}
```
