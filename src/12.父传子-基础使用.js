// 父传子 传递流程
// 1. 父组件传递数据  子组件标签身上绑定属性
// 2. 子组件接收数据  props的参数

// 1.创建出一个嵌套关系，定义一个son组件
function Son(props) {  // 4.第二步子组件接收数据，需要props的参数
  // props：对象里面包含了父组件传递过来的所有的数据
  // { name:'父组件中的数据'}
  // 5.在子组件中运用父组件传过来的的数据只需对象.name --> props.name
  console.log(props)
  // props.name = 'new name' 此处就会报错，不允许修改值，只能使用，谁的数据谁负责修改
  return <div>this is son, {props.name}, jsx: {props.child}</div>
}


function App() {
  // 3.在父组件里准备一个数据
  const name = 'this is app name'
  return (
    <div>
      {/* 2.在父组件里把子组件渲染一下 当成一个标签写过来 <son /> */}
      <Son
        // 3.开始传递数据，第一步父组件传递数据，子组件标签身上绑定属性
        name={name}
        //props 可以传递任意数据
        // 数字，布尔值，数组，字符串，对象，函数，JSX
        // props是只读对象，子组件只能读取props中的数据，不能直接进行修改，父组件的数据只能由父组件修改
        age={18}
        isTrue={false}
        list={['vue', 'react']}
        obj={{ name: 'jack' }}
        cb={() => console.log(123)}// 回调函数
        // 当我们把内容嵌套在子组件标签中时，父组件会自动在名为children的prop属性中接受该内容
        child={<span>this is span</span>}//jsx
      />
    </div>
  )
}

export default App
