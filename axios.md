## axios
基本写法

baseURL； ‘http://127.0.0.1:8000’ baseURL将自动加在url前面，除非url是一个绝对路径
axios({
    url: , 请求地址
    method: , 请求方法
    responseType: ,可选 ，响应类型
    data: , 请求体
    headers: , 请求头
})

## 跨域

一，同源策略
同源策略是一种规定，它是浏览器最核心也是最基本的安全功能。所谓的同源策略即“http协议 +域名 + 端口号 ”三者相同，即使两个不同的域名指向同一个ip地址，也非同源

二，同源策略的限制有
Cookie,LocalStorage,indexedDB等储存内容
DOM节点
AJAX请求，可以发出去，但会被浏览器拦截

单有三个标签是允许跨域请求资源，即<img src=xxx>  <link src=xxx> <script src=xxx>

三，跨域
当协议，子域名 ，主域名，端口号中任意一个不相同时，都不算做同域。不同的域之间相互请求资源，就算做跨域

四，跨域问题解决
JSONP
1，如何实现跨域：JSONP可以利用<script src=xxx > 的特性实现跨域请求,网页可以得到从其他来源动态产生的JSON数据，单JSONP请求一定要对方的服务器做支持才可以。
2，JSONP和AJAX的对比：JSONP和AJAX相同，都是客务端发送请求，但是AJAX属于同源策略，JSONP属于非同源策略（跨域请求）
3，JSONP的优缺点：JSONP的优点是简单兼容性好，可以解决主流浏览器跨域访问资源的问题。缺点是仅支持get方法，具有局限性，不然很容遭受到XXS的攻击
4，JSONP实现原理：声明一个回调函数，其函数名(如show)当做参数值，要传递给跨域请求数据的服务器，函数形参为要获取目标数据(服务器返回的data)。
创建一个<script>标签，把那个跨域的API数据接口地址，赋值给script的src,还要在这个地址中向服务器传递该函数名（可以通过问号传参:?callback=show）。
服务器接收到请求后，需要进行特殊的处理：把传递进来的函数名和它需要给你的数据拼接成一个字符串,例如：传递进去的函数名是show，它准备好的数据是show('我不爱你')。
最后服务器把准备的数据通过HTTP协议返回给客户端，客户端再调用执行之前声明的回调函数（show），对返回的数据进行操作。

CORS
1,CORS需要后端和前端同时支持，即可实现跨域
浏览器会自动进行CORS通信，实现CORS通信的关键是后端。只要后端实现了CORS，就可以实现跨域。

服务端设置 Access-Control-Allow-Origin 就可以开启 CORS。 该属性表示哪些域名可以访问资源，如果设置通配符则表示所有网站都可以访问资源。

虽然CORS和前端没什么关系，单通过这种方式解决跨域问题的话，会在发出请求的时候出现两种情况，分别是 简单请求 和 复杂请求
    满足一下条件就属于简单请求
    1，使用get post head 
    2，Content-Type === text/plain
    multipart/form-data
    application/x-www-form-urlencoded
    复杂请求：不满足上述条件就可以复杂请求
    复杂的CORS请求，会在正式通信前，增加一次HTTP查询请求，称为 ‘预检请求’ ，该请求方法是option ，通过请求来判断服务器是否支持跨域请求
Node中间件代理（两次跨域）
实现原理：同源策略是浏览器需要执行的标准，而如果是服务器向服务器发起跨域请求就不需要遵同源策略
实现步骤：
    将请求发送给代理服务器
    代理服务器发给我们需要请求的服务器
    服务器将响应解构返回给代理服务器
    代理服务器将结果返回给我们
注意浏览器向代理服务器发请求也需要遵守同源策略

nginx反向代理
原理类似于Node中间件，需要你搭建一个中转nginx服务器，用于发送请求。
使用nginx反向代理实现跨域，是最简单的方式。只要修改nginx 的配置即可实现跨域问题，支持所有浏览器，支持session，不需要修改任何代码，并且不会影响服务器性能
实现思路：通过nginx配置一个代理服务器（域名与domain1相同，端口不同）做跳板机，反向代理访问domain2接口，并且可以顺便修改cookie中domain信息，方便当前域cookie写入，实现跨域登录。