##  什么事proxy
-   proxy代理，就是将一个对象做一层封装，然后可以通过proxy身上的api捕获我们对一个对象的所有操作(增删改查)，并进行控制。
-   proxy Api:
    - get(target,propName){} 捕获我们的读取操作,他有两个形参，第一个是原对象，propName 读取的属性名
    - set(target,propName,value) 捕获我们的修改和新增操作，第一个是原对象，propName 读取的属性名 ，value新的值
    - deleteProperty(target,propName) 捕获我们的删除操作，第一个是原对象，propName 读取的属性名 
##  反射(Reflect)对被代理的对象的属性进行操作
-   Reflect的api和proxy一一对应