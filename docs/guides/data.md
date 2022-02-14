# 数据模拟

### 安装 mock.js

```js
npm i mockjs --save-dev
```

### 创建 mock 模块文件

```js
// src/mock/index.js
import Mock from 'mockjs';

/*
  @params
  url：请求路径
  method：请求方法
  object：返回的数据，会放在响应的 data 字段
*/
export default Mock.mock('/get/info', 'get', {
  success: true,
  name: 'zhangsan'
})
```

### 引入 mock 模块

```js
// src/index.js
import './mock'
```

### mock 数据解析

```js
res: {
  config: {...},
  data: {
    success: true,
    name: 'zhangsan'
  },
  status: 200
}
```

### 使用 axios 请求 mock 数据

```js
import React, { useState, useEffect } from 'react'
import { getInfoApi } from '../api'

export default function Hello(props) {
  let [info, setInfo] = useState(null);
  useEffect(() => {
    getInfoApi().then(data => { // 拦截器做了处理，所以这里可以直接拿到 data
      setInfo(data.name);
    })
  })
  return (
    <div>
      {info}
    </div>
  )
}
```