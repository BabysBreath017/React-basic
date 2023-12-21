
// 受控绑定表单
// 使用React组件的状态（useState）控制表单的状态
// React（state）--> state绑定到input的value属性 <input/>(value)
// React（state）把input最新的value值设置给state  <-- <input/>(value)


import { useState } from "react"

// 1. 声明一个react状态 - useState

// 2. 核心绑定流程
// 1. 通过value属性绑定react状态
// 2. 绑定onChange事件 通过事件参数e拿到输入框最新的值 反向修改到react状态身上

function App() {
  const [value, setValue] = useState('')
  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text" />
    </div>
  )
}

export default App
