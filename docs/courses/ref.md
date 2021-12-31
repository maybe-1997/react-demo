# ref

### 字符串形式的 ref（不建议使用）

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.getContent = this.getContent.bind(this);
  }
  getContent() {
    const { content1, content2 } = this.refs; // 获取 ref 标识的所有元素
    console.log(content1.innerText);
    console.log(content2.innerText);
  }
  render() {
    return (
      <div>
        <div ref='content1'>第一个内容</div> // ref 用来标识元素
        <div ref='content2'>第二个内容</div>
        <button onClick={this.getContent}>打印这两个内容</button>
      </div>
    )
  }
}
ReactDOM.render(<MyComponent />, document.getElementById('test'));
```

### 回调形式的 ref

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.getContent = this.getContent.bind(this);
  }
  getContent() {
    const { content1, content2 } = this; // 元素绑定到了 this 的属性上，所以从 this 获取元素
    console.log(content1.innerText);
    console.log(content2.innerText);
  }
  render() {
    return (
      <div>
        /*
          1.第一次渲染时，就执行了 ref 中的回调
          2.在回调中，把 ref 绑定的元素（也就是参数），赋给了 this 的某个属性
        */
        <div ref={currNode => this.content1 = currNode}>第一个内容</div>
        <div ref={currNode => this.content2 = currNode}>第二个内容</div>
        <button onClick={this.getContent}>打印这两个内容</button>
      </div>
    )
  }
}
ReactDOM.render(<MyComponent />, document.getElementById('test'));
```

### API 创建的 ref

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // 创建一个 ref 容器，存储被这个 ref 标识的元素
    this.getContent = this.getContent.bind(this);
  }
  getContent() {
    const { content2 } = this;
    console.log(this.myRef.current.innerText); // 元素在 ref 容器的 current 属性中
    console.log(content2.innerText);
  }
  render() {
    return (
      <div>
        <div ref={this.myRef}>第一个内容</div> // 使用创建的 ref 容器
        <div ref={currNode => this.content2 = currNode}>第二个内容</div>
        <button onClick={this.getContent}>打印这两个内容</button>
      </div>
    )
  }
}
ReactDOM.render(<MyComponent />, document.getElementById('test'));
```