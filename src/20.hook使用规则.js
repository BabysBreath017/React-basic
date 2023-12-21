
// useState 不能在以下条件使用
// 1.组件外使用
// 1.if  for 组件内部使用

import { useState } from "react"

// useState('') 报错
function App() {
  // if (Math.random() > 0.5) {
  //   useState()
  // }  报错：React Hooks不能在条件语句中执行，只能在函数组件的顶层进行执行。
  // Hooks需要在React函数组件的最顶层使用，不能在循环、条件语句或嵌套函数内部使用。
  return (
    <div>
      this is app
    </div>
  )
}

export default App