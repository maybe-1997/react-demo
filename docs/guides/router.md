# 路由配置

### 安装路由库

```js
npm i react-router react-router-dom react-router-config -S
```

- 可能存在版本问题，可以考虑安装非最新的版本

```js
"react-router": "^5.2.0",
"react-router-config": "^5.1.1",
"react-router-dom": "^5.2.0",
```

### 设置路由组件

```js
// src/router/index.js
import Home from '../pages/Home'
import About from '../pages/About'

const routes = [
  {
    path: '/',
    exact: true, // 必须精确匹配，否则所有路由都会匹配到这个组件
    component: Home,
  },
  {
    path: '/about',
    component: About
  }
]

export default routes;
```

### 配置路由

```js
// src/App.js
import { NavLink, Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './router'

function App() {
  return (
    <Router> // 路由包裹
      <div style={{textAlign: 'center'}}>
        <NavLink to='/' replace>首页</NavLink> // 跳转首页按钮
        <NavLink to='/about' replace>关于</NavLink> // 跳转关于页面按钮
        {renderRoutes(routes)} // 渲染路由组件
      </div>
    </Router>
  );
}

export default App;
```

### 启用 history 模式

- 安装 history 库

```js
npm i history -S
```

- 启用 history 模式

```js
// src/App.js
import { createBrowserHistory } from 'history'

const history = createBrowserHistory(); // 创建 createBrowserHistory 实例

function App() {
  return (
    <Router history={ history }> // 启用路由的 history 模式
      <div style={{textAlign: 'center'}}>
        <NavLink to='/' replace>首页</NavLink>
        <NavLink to='/about' replace>关于</NavLink>
        {renderRoutes(routes)}
      </div>
    </Router>
  );
}
```