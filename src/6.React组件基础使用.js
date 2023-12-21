// 1. 定义组件
// 一个组件就是首字母大写的函数，内部存放了组件的逻辑和视图UI，渲染组件只需要把组件当成标签书写即可

// function Button(){
//   return <Button>click me!</Button>
// }

// 用箭头函数
const Button = () => {
  // 后面会在这写业务逻辑组件逻辑
  return <button>click me!</button>
}

function App() {
  return (
    <div className="App">
      {/* 2. 使用组件（渲染组件） */}
      {/* 自闭和 */}
      <Button />
      {/* 成对标签 */}
      <Button></Button>
    </div>
  )
}

export default App
