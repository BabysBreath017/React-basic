
// 在React中，状态被认为是只读的，应替换它而不是修改它，直接修改状态不能引发视图更新

import { useState } from 'react'

function App() {
  let [count, setCount] = useState(0)
  // 1. 
  const handleClick = () => {
    // 直接修改 无法引发视图更新
    // count++
    // console.log(count)
    // 只有调用配套的 setCount方法才能引发视图更新
    setCount(count + 1)
  }

  // 2.修改{对象}状态，应该传给一个全新的对象来进行修改
  const [form, setForm] = useState({ name: 'jack' })

  const changeForm = () => {
    // 错误写法：直接修改
    // form.name = 'john'
    // 正确写法：调用setFrom方法 传入一个全新的对象
    setForm({
      ...form,
      name: 'john'
    })
  }

  return (
    <div>
      {/* 1 */}
      <button onClick={handleClick}>{count}</button>
      {/* 2 */}
      <button onClick={changeForm}>修改form{form.name}</button>
    </div>
  )
}

export default App
