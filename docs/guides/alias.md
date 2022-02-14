# 目录别名

### 释放配置文件

```js
// 控制台
npm run eject
```

- 配置文件在根目录下的 config 目录中

```js
—— config
  —— webpack.config.js
  —— paths.js
```

### 修改自定义模块的路径

```js
// config/paths.js
module.exports = {
  appAssets: resolveApp('src/assets'),
  appComponents: resolveApp('src/components'),
  appConfig: resolveApp('src/config'),
  appPages: resolveApp('src/pages'),
  appRouter: resolveApp('src/router'),
  appStore: resolveApp('src/store'),
  appUtils: resolveApp('src/utils'),
};
```

### 设置自定义模块的别名

```js
// config/webpack.config.js
resolve: {
  alias: {
    '@assets': paths.appAssets,
    '@components': paths.appComponents,
    '@config': paths.appConfig,
    '@pages': paths.appPages,
    '@router': paths.appRouter,
    '@store': paths.appStore,
    '@utils': paths.appUtils,
  }
}
```

### 使用目录别名

```js
import Hello from '@components/Hello' // 使用目标别名

function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}
```