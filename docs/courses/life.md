# 生命周期

### 组件的基本生命周期

```js
class Login extends React.Component {
  constructor(props) { // 0.组件初始化时，首先执行一遍构造函数 constructor
    super(props);
    this.state = {
      age: 0
    };
    this.unmountComponent = this.unmountComponent.bind(this);
    console.log('begin');
  }

  componentWillMount() { // 1.组件挂载前触发
    console.log('1 ==> willMount');
  }

  componentDidMount() { // 3.组件挂载后触发
    console.log('3 ==> didMount');
    this.timer = setInterval(() => {
      let { age } = this.state;
      age += 1;
      this.setState({ age });
    }, 1000);
  }

  componentWillUnmount() { // 4.组件卸载前触发
    console.log('4 ==> willUnmount');
    clearInterval(this.timer);
  }

  unmountComponent(params) {
    ReactDOM.unmountComponentAtNode(document.getElementById('test')); // 卸载组件
  }
  
  render() { // 2.组件挂载后，首先执行一遍 render 函数
    console.log('2 ==> render');
    return (
      <div>
        <span>{ this.state.age }</span>
        <button onClick={this.unmountComponent}>卸载组件</button>
      </div>
    )
  }
}
ReactDOM.render(<Login />, document.getElementById('test'));
```

### 组件的状态更新时的生命周期

```js
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0
    };
    this.addAge = this.addAge.bind(this);
  }

  addAge() { // 触发状态更新
    let { age } = this.state;
    this.setState({
      age: age++
    });
  }

  shouldComponentUpdate() { // 1.状态更新前触发
    console.log('1 ==> shouldComponentUpdate');
    return true; // 必须有返回值，返回 true 时继续状态更新，返回 false 时中断状态更新
  }

  componentWillUpdate() { // 2.状态更新前触发
    console.log('2 ==> componentWillUpdate');
  }

  componentDidUpdate() { // 4. 状态更新后触发
    console.log('4 ==> componentDidUpdate');
  }
  
  render() {
    console.log('3 ==> render'); // 3.每次状态更新，都会重新触发 render
    return (
      <div>
        <span>{ this.state.age }</span>
        <button onClick={this.addAge}>更新年龄</button>
      </div>
    )
  }
}
ReactDOM.render(<Login />, document.getElementById('test'));
```

### 组件强制更新的生命周期

- 强制更新，也就是不改变状态，但仍然要重新渲染

```js
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.force = this.force.bind(this);
  }

  force() {
    this.forceUpdate(); // 强制更新
  }

  shouldComponentUpdate() { // 不会触发
    console.log('Not occur');
    return true; // 返回值没有任何影响
  }

  componentWillUpdate() { // 1.仍然会触发
    console.log('1 ==> componentWillUpdate');
  }

  componentDidUpdate() { // 3.仍然会触发
    console.log('3 ==> componentDidUpdate');
  }
  
  render() { // 2.仍然会触发
    console.log('2 ==> render');
    return (
      <div>
        <button onClick={this.force}>强制更新</button>
      </div>
    )
  }
}
ReactDOM.render(<Login />, document.getElementById('test'));
```

### 父组件 render 时，子组件的生命周期

```js
class A extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'zhangsan'
    };
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({ // 父组件 A 更新数据，触发 render
      name: 'lisi'
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.update}>更新数据</button>
        <B name={this.state.name}/> // 把 state 传给子组件
      </div>
    )
  }
}
class B extends React.Component {
  /*
    1.父组件初始化时，render 虽然传递了 props，但不会触发子组件的 componentWillReceiveProps 生命周期
    2.只有当父组件调用 setState 触发 render 时，才会触发子组件的 componentWillReceiveProps 生命周期
  */
  componentWillReceiveProps(props) { // 子组件接收到父组件的 props 前触发
    console.log('1 ==> componentWillReceiveProps', props); // 其实此时就可以接收到 props
  }

  shouldComponentUpdate() { // 正常触发
    console.log('2 ==> shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() { // 正常触发
    console.log('3 ==> componentWillUpdate');
  }

  componentDidUpdate() { // 正常触发
    console.log('5 ==> componentDidUpdate');
  }

  render() { // 正常触发
    console.log('4 ==> render');
    return (
      <div>
        <div>{this.props.name}</div>
      </div>
    )
  }
}
ReactDOM.render(<A />, document.getElementById('test'));
```

### 17/18版本的生命周期

- componentWillMount => UNSAFE_componentWillMount
- componentWillReceiveProps => UNSAFE_componentWillReceiveProps
- componentWillUpdate => UNSAFE_componentWillUpdate
- componentDidUpdate => UNSAFE_componentDidUpdate

### 17/18版本新的生命周期

```js
```