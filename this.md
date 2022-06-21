this的指向
## this的指向是在使用时判断的而不是创建时判断的，除了箭头函数

    普通函数解全局的this指向window
    对象的this和对象方法的this指向自身(不使用箭头的函数)
    构造函数的this指向new新构造出来的实例
    箭头函数的this指向取决于上一层作用域的this


call,apply,bind
都是改变this的指向，
call和bind传参使用参数列表，apply使用数组，bind会返回一个改变了this指向的函数，而不会直接调用他，call和apply会直接调用
