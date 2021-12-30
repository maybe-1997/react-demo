# 函数式组件

### props

```js
function MyComponent(props) { // 参数就是传过来的 props
  const { name, age } = props;
  return (
    <ul>
      <li>姓名：{name}</li>
      <li>年龄：{age}</li>
    </ul>
  )
}
MyComponent.propTypes = {
  name: PropTypes.string.isRequired
}
MyComponent.defaultProps = {
  name: 'wangwu'
}
const info = { age: 18 };
ReactDOM.render(<MyComponent {...info}/>, document.getElementById('test'));
```