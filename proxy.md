配置一个代理可以直接在package.json配置，但是要写成字符串 例如 ： “proxy” : "http://127.0.0.1:8000"
配置多个代理需要在src目录下新建一个setupProxy.js文件，不能写成其他名字
const {createProxyMiddleware} = require('http-proxy-middleware')需要使用commJs引入

需要默认导出 一个函数
module.exports = function(app){ //传入一个形参
    app.use(
        createProxyMiddleware(‘/api’,{
            target:'http://47.93.114.103:6688/manage',
            changeOrigin:true,
            pathRewrite:{'^/api':''}
            }
        )
    )
}
1,调用app.use方法，传入proxy进去
2,proxy的第一个参数规定了那些请求需要走代理，如果你的请求里面带有'/api'就会走代理 
3，第二参数是一个配置对象
4,target表示需要转发的服务器地址 
5，changeOrigin : 值是布尔类型 ,作用是：控制服务器收到的请求头中Host字段的值
    true:
    false:
6,pathRewrite:路径重写，将请求里的api去掉