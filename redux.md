# 依赖： npm install redux      npm install  react-redux

#   为什么不直接使用redux
    每个组件都需要单独导入store
    在根组件上的写法不友好

1,redux的特点
    跨组件共享状态

2，redux的三个核心概念
    store
    action
    reducer

3，react-redux
    派发钩子：useDispatch({})
    获取数据钩子：useSelector((state) => state)

reducer的分离与合并
    因为实际应用的时候reducer可以类别不同或者太长，可以将一个reducer写成多个
    然后使用redux里面的一个钩子将多个reducer合并成一个
     合并钩子：combineReducers

4，redux中间件  redux-thunk
 #   依赖 npm install redux-thunk
    在不算坏原来代码的前提下，引入额外的代码来拓展功能
    redux中间件的位置是dispatch 之后和reducer之前

    redux 不允许我的们的action是一个函数，只能是一个对象
    但是redux-thunk允许我们使用函数，可以使用函数，就可以做ajax请求之类的操作

    使用方法
    引入 thunk
    在redux中引入applyMiddleware
    const store = createStore(reducer,applyMiddleware(thunk))