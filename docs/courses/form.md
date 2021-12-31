# 收集表单数据

### 非受控组件

- 非受控组件，就是对元素节点，现用现取

```js
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault(); // 阻止表单跳转的默认行为
    const { username, password } = this;
    console.log(`用户名是${username.value}，密码是${password.value}`);
  }
  render() {
    return (
      <form onClick={this.handleSubmit}> // 当点击表单时，再获取表单数据，即现用现取
        用户名: <input ref={a => this.username = a} type="text" name='username' />
        <br />
        密码：<input ref={a => this.password = a} type="password" name='password' />
        <br />
        <button>登陆</button>
      </form>
    )
  }
}
ReactDOM.render(<Login />, document.getElementById('test'));
```

### 受控组件

- 受控组件，就是在改变的过程中持续获取节点

```js
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { username, password } = this;
    this.setState({ // 输入框的值每次改变时，就赋给 state
      username: event.target.value
    });
  }
  render() {
    return (
      <form>
        用户名: <input onChange={this.handleChange} type="text" name='username' />
        <br />
        密码：<input type="password" name='password' />
        <br />
        <button>登陆</button>
      </form>
    )
  }
}
ReactDOM.render(<Login />, document.getElementById('test'));
```