this的指向
## this的指向是在使用时判断的而不是创建时判断的，除了箭头函数
1，全局的this指向window
2,普通函数和匿名函数里this的指向window
3,对象方法里this指向对象本身
4，对象里面存放的如果是另一个对象，另一个对象的this指向另一个对象，而不是最外层的对象
5,构造函数的this指向他的调用者
6，如果使用call绑定null,或者undefined,这次绑定会被取消
7,new绑定高于bind，new不可以和call,apply一起使用
8,箭头函数指向创建时的上一层作用域,箭头函数的指向不可变