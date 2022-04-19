var ajax = () => {
    //创建ajax对象
    let r = new XMLHttpRequest()
    console.log('r0', r.readyState)
    //请求方法和请求地址
    r.open('POST', 'http://localhost:8085/todo/delete/3', true)
    console.log('r1', r.readyState)

    //设置发送数据的格式
    r.setRequestHeader('Content-Type', 'application/json')

    //注册响应函数
    r.onreadystatechange = function () {
        //存有 XMLHttpRequest 的状态。从 0 到 4 发生变化,4表示请求完成，且响应就绪
        // https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/readyState
        console.log('r', r)
        console.log('readyState', r.readyState)
        if (r.status === '200' && r.readyState === 4) {
            console.log('成功', r.response)
            // console.log(r.response,'未解码')
            // let cc = JSON.parse(r.response)

        }
    }
    let account = {
        username: 'gua',
        password: '123'
    }
    let data = JSON.stringify(account)
    r.send(data)

}

ajax()
console.log(11)


// Promise 
// 异步 IO，需要等待
// fetch https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch
var post = () => {
    let account = {
        username: 'gua',
        password: '123'
    }
    console.log('start')
    fetch('https://httpbin.org/post', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(account),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.log('Error:', error);
    });
}

post()


console.log(22)


var get = ()=>{
    const url  = `https://autumnfish.cn/search?keywords='哈'`
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
}

//字符串拼接
var paramsToQueryString = (params)=>{
    const keys = Object.keys(params)
    let s = ''
    for (let index = 0; index < keys.length; index++) {
        const key = keys[index];
        const value = params[key]
        const item = `${key}=${value}`
        s = s + '&' + item
    }
    const r = s.slice(1)
    return r
}

// 封装    注意get发放的数据需要放在url后面，上面的函数可以将对象变成规定要求的字符串
var get = (baseUrl, params)=>{
    const query = paramsToQueryString(params)
    const url = baseUrl + "?" + query
    return fetch(url)
    .then(response => response.json())
}





get('http://localhost:8085/todo/all','').then(res =>{
    console.log(res,'res')//res是一个装了所有todo的数组，
})







// post
var post = (baseUrl, data) => {
    return fetch(baseUrl, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
}


// // =========== todo 调用
// const todo = {
//     "id": 1,
//     "task": "eating",
//     "task_id": 2,
//     "time": "2017/4/10 下午11:41:15"
// }
// add
// const hostName =  'http://localhost:8085/todo/add'
// const hostName =  'http://localhost:8085/todo/all'
// const hostName =  'http://localhost:8085/todo/update/:id'
const hostName =  'http://localhost:8085/todo/delete/:1'
post(hostName, {
    task: '你好哇',
    "time": "2022/4/10 下午11:41:15",
    "task_id": 2,
})


