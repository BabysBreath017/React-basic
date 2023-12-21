
// 核心：在子组件中调用父组件中的函数并传递实参

import { useState } from "react"

// 4.在子组件中指向getMsg函数，首先得先接收一下
// 通过把{ onGetSonMsg }解构赋值
function Son({ onGetSonMsg }) {
  // 1.准备Son组件中的数据
  const sonMsg = 'this is son msg'
  return (
    <div>
      this is Son
      {/* 5.解构出来后，把它绑定一个onCLick事件，执行父组件中的函数  */}
      {/* 6.把子组件的数据sonMsg当成一个实参放进去 */}
      <button onClick={() => onGetSonMsg(sonMsg)}>sendMsg</button>
    </div>
  )
}

function App() {
  // 7. 声明一个状态数据，影响视图的变化 
  const [msg, setMsg] = useState('')
  // 2.在父组件中设一个getMsg函数
  const getMsg = (msg) => {
    console.log(msg)
    // 8.把子组件里的msg存进去
    setMsg(msg)
  }
  return (
    <div>
      {/* 9. 在这里渲染一下 */}
      this is App, {msg}
      {/* 3.通过父传子把函数传下去 */}
      <Son onGetSonMsg={getMsg} />
    </div>
  )
}

export default App
