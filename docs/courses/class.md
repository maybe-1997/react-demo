# 类式组件

### 状态与事件

```js
class MyComponent extends React.Component {
  /*
    组件的状态 state
    1. state 必须写在 constructor 构造函数中
    2. constructor 构造函数中，必须首先继承父类传来的 props
    3. state 必须是一个对象
  */
  constructor(props) {
    super(props);
    this.state = { isHot: true };
    this.changeWeather = this.changeWeather.bind(this); // 绑定组件方法的 this，防止获取不到
  }
  changeWeather() { // 组件的方法
    const { isHot } = this.state;
    this.setState({ // 改变状态，通过 setState 才能让改变的状态同步到页面上
      isHot: !isHot
    });
  }
  render() {
    const { isHot } = this.state;
    /*
      绑定方法到点击事件
      1. on 后面的事件名必须首字母大写，例如 onClick、onBlur
      2. 绑定的方法，方法名后不能携带 ()，否则在第一次渲染时就执行
    */
    return <h2 onClick={this.changeWeather}>今天天气很{ isHot ? '炎热' : '寒冷' }</h2>;
  }
}
ReactDOM.render(<MyComponent/>, document.getElementById('test'));
```

### props

```js
<script src="https://unpkg.com/prop-types@15.6/prop-types.js"></script> // 引入外部库

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(props); // 构造函数的 props 就是传过来的 props
  }
  render() {
    const { name, age } = this.props; // 获取 props
    return (
      <ul>
        <li>姓名：{name}</li>
        <li>年龄：{age}</li>
      </ul>
    )
  }
}
MyComponent.propTypes = { // 对 props 做校验
  name: PropTypes.string.isRequired // 必传，类型必须是字符串
}
MyComponent.defaultProps = { // 设置 props 的默认值
  name: 'wangwu'
}
ReactDOM.render(<MyComponent age={19} />, document.getElementById('test1')); // 分别传 props
const info = { name: 'zhangsan', age: 18 };
ReactDOM.render(<MyComponent {...info}/>, document.getElementById('test2')); // 一次性传 props
```