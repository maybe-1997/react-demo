# 函数式组件

### props

```js
// 父组件 App.js
import Hello from '@components/Hello'
function App() {
  return (
    <div>
      <Hello name='zhangsan' /> // 父组件给子组件传递 props
    </div>
  );
}

// 子组件 Hello.js
import React from 'react'
export default function Hello(props) { // 子组件的第一个参数，就是父组件传过来的 props
  props.name = 'lisi'; // 报错，子组件无法修改 props
  return (
    <div>
      hello
      {props.name} // 子组件使用传递过来的 props
    </div>
  )
}
```

### 状态

- 使用```useState```在函数式组件中，使用 state

```js
import React, { useState } from 'react'

export default function Hello(props) {
  /*
    1.useState 接收一个参数作为初始值
    2.useState 返回一个数组，第一个元素是状态，初始值为 useState 的参数值；第二个元素是修改状态的方法
  */
  let [state, setState] = useState({
    name: 'zhangsan',
    age: 18
  });
  return (
    <div>
      { state.name }
      { state.age }
      <button onClick={() => setState({
        name: 'lisi',
        age: 19
      })}>更改信息</button>
    </div>
  )
}
```

### 事件行为

```js
import React from 'react'

export default function Hello(props) {
  function logSomething() { // 定义一个方法
    console.log('something');
  }
  return (
    <div>
      <button onClick={logSomething}>获取信息</button> // 绑定方法到事件中
    </div>
  )
}
```

### refs

```js
import React, { useRef } from 'react'

export default function Hello(props) {
  let mark = useRef(); // 创建元素唯一的标识
  function getContent() {
    console.log(mark.current.innerText); // 元素保存在 ref 的 current 属性中
  }
  return (
    <div>
      <span ref={mark}>内容</span> // 用 ref 去标识元素
      <button onClick={getContent}>获取信息</button>
    </div>
  )
}
```

### 生命周期

```js
import React, { useEffect } from 'react'

export default function Hello(props) {
  useEffect(() => { // useEffect 的第一个回调，会在组件挂载后执行
    const timer = setInterval(() => {
      console.log('111');
    }, 1000);
    return () => { // 第一个回调中，返回的回调，会在组件即将被卸载时执行
      clearInterval(timer);
    }
  });
  return (
    <div>
      Hello
    </div>
  )
}
```