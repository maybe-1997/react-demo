# 组件

### 函数式组件

```js
function MyComponent() { // 函数名必须以大写字母开头
  return <h2>这是一个函数式组件</h2> // 返回虚拟 DOM
}
ReactDOM.render(<MyComponent/>, document.getElementById('test')); // 把函数当作组件来渲染
```

### 类式组件

```js
class MyComponent extends React.Component { // 类组件必须继承 React.Component 类
  render() { // 必须实现 render 函数
    return <h2>我是一个类式组件</h2>; // 返回虚拟 DOM
  }
}
ReactDOM.render(<MyComponent/>, document.getElementById('test'));
```