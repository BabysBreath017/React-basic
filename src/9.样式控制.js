// 行内样式（不推荐）
// <div style={{color:'red'}}>this is div</div>

// class类名控制样式
// 1. 在另一个index.css文件中定义一个类
// .foo{
//   color:red;
// }

// 2.导入样式
import './index.css'

const style = {
  color: 'red',
  // 多单词驼峰写法
  fontSize: '50px'
}

function App() {
  return (
    <div>
      {/* 1.行内样式控制 */}
      {/* <span style={{color: 'red',fontSize: '50px'}}>this is span</span> */}
      {/* 分离写法：把样式抽出来写 */}
      <span style={style}>this is span</span>

      {/* 2.通过class类名控制 */}
      {/* 注意这里不能用class，而是用className */}
      <span className="foo">this is class foo</span>
    </div>
  )
}

export default App
