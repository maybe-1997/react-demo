# UI组件库

### 安装 antd 库

```js
npm i antd -S
```

### 引入全局样式

```css
/* src/App.css */
@import '~antd/dist/antd.css'
```
```js
// src/App.js
import './App.css'
```

### 按需引入组件

```js
import React from 'react'
import { Button } from 'antd' // 引入按钮组件

export default function Home() {
  return (
    <div>
      Home
      <Button type='dashed'>按钮</Button> // 使用组件
    </div>
  )
}
```