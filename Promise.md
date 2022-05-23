一，Promise是一个构造函数，可以用new实例化一个新的对象
* 1,Promise的优点
    支持链式调用
    指定回调函数的方式更加灵活
* 2,promiseState, 是Promise的一个属性，表示promise的状态，分别有三种
    pending :待定
    resolved；成功
    rejected：失败
    pending可以转换成resolved或rejected ，但pending不可逆。一但转换就永远是那个结果。
* PromiseResult
    里面保存的了成功或者失败的结果
promise 的方法
    * resolve  如果传入一个普通的值，会将它转换成一个promise对象，如果传入的是一个promise对象，那么那个状态由传入promise决定
    * reject ,他不会受传入的参数影响
    * promise.all([promise])  promise.all的状态由 [promise]决定，里面的结果都是成功，那么他的结果就是成功，并且用一个数组返回所有成功的值。如果有一个失败， 那他就是失败，并且返回失败的结果值
    * promise.race([promise]) 他返回第一个改变状态的promise ，值就是第一个promise的值，状态也是他的状态
promise 的关键问题
* 如果改变promise 的状态
    resolve 将pending ==> resolved 
    reject  将 pending ==> rejected
    throw 抛出错误
* promise 指定多个成功/失败回调函数，都会调用吗
    * 当promise 状态改变的时候都会调用
* 改变promise的状态和指定回调函数谁先谁后
    当resolve是一个同步任务的时候，resolve先改变状态，然后才指定回调
    当resolve是一个异步任务的时候，先指定回调，然后再改变状态
* promise.then 返回的是一个新的promise对象，那么then的状态是由谁决定，
    有新的promise决定
* 异常穿透 
    调用多个then方法，最后调用catch,就叫做异常穿透，多个then的是失败回调都是由最后一个catch来处理
* 中断链式调用
    中断的方法有且只有一个，就是放回一个pending状态的promise对象
例子
let p = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let n = parseInt(100 * Math.random())
        if(n <= 30){
            resolve()//将promise状态设置为成功，并返回括号里的内容
        }else{
            reject()//将promise状态设置会失败，并返回括号里的内容
        }
    }, 1000);
})
p.then(
    () => console.log('成功'),
    ()=>console.log('失败')
)//then方法可以可以到得promise的结果，then是一个函数，接受两个参数，第一个接受resolve的结果，即成功，第二个接受reject即失败

    
