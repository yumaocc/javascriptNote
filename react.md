## 初始化项目
https://create-react-app.bootcss.com/
```
npx create-react-app my-app
```
redux创建
npm install redux

react-redux创建
npm install react-redux











 ## reducer返回的时候使用新的数组，不然不会更新页面


**这里是放注意事项的地方**
hook：
useState   更新视图
useEffect  挂在完成使触发，参数是一个回调函数和一个数组  （useEffect(()=>{}),[]）,写在函数内部和return之前，数组里面写你要检测的数据(不写检测全部，空数据一个都不检测)
useEffect(()=>{
    return () =>{

    }
}),useEffect里面在嵌套一个函数表示销毁阶段执行
createContext  :创建上下文空间,创建了上下文空间之后会获得两个标签Provider(提供者) 和Consumer(消费者)，创建上下文空间需要写在import后面，不再是组件里面了，而且不要给 createCtontext赋值(const numContext = createContext()) <numContext.Provider/>和<numContext.Provider>

1，视图更新： class组件使用：state  函数组件使用：useState，原生js可以直接对一个数修改，但是jsx不行，那要求你使用state或者useState

2，注意hook只能用在函数的最顶层
3，定义的函数也必须在顶级组件的里面，可以在return后面也可以在前面，没区别。

4，调用子组件，只需要把子组件的名字写成一个标签即可(只是同一个文件下调用),
5，父组件和子组件的参数传递：顶级组件和子组件之间可以传参数，num={123 val={fs}}可以传很多个,子组件可以使用props接受
6，子组件和父组件的参数传递：定义一个函数，函数里面是想要的操作，然后把函数传给子组件，然后子组件调用，触发父组件的函数(子组件传父组件，其实真正在工作的永远是父组件,如果定义的函数需要传参数，调用的时候需要使用箭头函数)


## react 路由：不同路由的地址展示不同的页面


1，创建路由
import {BrowserRouter} from 'react-router-dom'引入
<BrowserRouter>
    <App />
  </BrowserRouter>,用BrowserRouter标签包裹最外层，创建路由环境

  import { NavLink, useRoutes ，Route ,Routes} from "react-router-dom" 引入

  <NavLink className='home' to='/home'>Home</NavLink>使用NavLink或者Link标签创建路由连接

<Routes>
    <Route to='/home' element={<Home />}><Route>注册路由，Route必须被Routes包裹

<Routes>
上下两种注册路由方法完全相同
因为标签太多，他麻烦，可以使用路由表
let element = useRoutes([{
    to:'/home',
    element: <Home / >
}])

{element}注册路由

**一般路由表用一个单独的文件来写