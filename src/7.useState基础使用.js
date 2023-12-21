
// useState是一个React Hook（函数），它允许我们向组件添加个状态变量，从而控制影响组件的渲染结果
// 和普通JS变量不同的是，状态变量一旦发生变化组件的视图UI也会跟着变化（数据驱动视图）


// 1.useState实现一个计数器按钮
// 1.1 调用useState添加一个状态变量，而useState从哪里来，是通过导入useState获得
import { useState } from 'react'
function App() {
  // 1.2 通过数组解构赋值
  // count 状态变量
  // setCount 修改状态变量的方法
  // useState(0)里面的参数作为count的初始值
  // useState是一个函数，返回值是一个数组
  const [count, setCount] = useState(0)

  // 2. 点击事件回调
  // 2.1 count要想变化的话，就要调一下setCount
  const handleClick = () => {
    // 作用: 
    // 1. 用传入的新值修改count
    // 2. 重新使用新的count渲染UI
    setCount(count + 1)
  }
  return (
    <div>
      {/* 1.3 初始值0-->换成count，只要count值发生变化，这里就会跟着变 */}
      {/* 2.2 绑定事件 */}
      <button onClick={handleClick}>{count}</button>
    </div>
  )
}

export default App
