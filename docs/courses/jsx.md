# JSX语法

### 引入脚本

```js
// JS 核心库
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
// 支持 React 操作 DOM
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
// 将 JSX 转为 JS
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
```

### 基本语法

```js
const myId = 'zhangsan';
const myText = 'hello, react';
const Vdom = ( // 第一步：创建虚拟 DOM
  /*
    1.使用 {} 包裹变量表达式
    2.使用 className 定义类名
    3.使用 {{}} 定义 style，里面每个样式的值都必须写成字符串
    4.虚拟 DOM 只能有一个根元素
  */
  <h2 id={myId} className='text'>
    <span style={{fontSize: '100px', background: 'blue'}}>{myText.toUpperCase()}</span>
  </h2>
)
ReactDOM.render(Vdom, document.getElementById('test')); // 第二步：把虚拟 DOM 渲染到页面上
```

### 列表渲染

```js
const data = ['react', 'vue', 'angular'];
const Vdom = (
  <ul>
    {
      data.map((item, index) => { // 遍历数组，渲染成列表
        return <li key={index}>{item}</li> // 每个列表项，都要有唯一的 key 属性
      })
    }
  </ul>
)
ReactDOM.render(Vdom, document.getElementById('test'));
```

### 注释

```js
const Vdom = (
  <h2 id={myId} className='text'>
    {/* 注释 */}
    <span style={{fontSize: '100px', background: 'blue'}}>{myText.toUpperCase()}</span>
  </h2>
)
ReactDOM.render(Vdom, document.getElementById('test'));
```
