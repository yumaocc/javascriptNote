1,BOM 浏览器对象模型
    1，事件
        load:页面加载完成的事件
        resize:浏览器宽度发生变化的事件
        setTimeout:定时器
        clearTimeout(定时器名称):清除定时器
        setInterval:重复定时器
        cleatInterval(重复定时器名称):清除重复定时器
    2,js代码执行机制
        1,js 是单线程语言，同一个时间只能做一件事
        2，执行顺序
            将同步任务和异步任务做一个区分
                同步任务放到执行栈(主线程)里面按顺序执行，异步任务放到消息队列。
                等同步任务执行完成就开始执行消息队列里的异步任务，执行完所有异步任务后清空消息队列。
##          event loop
                由于主线程不断的重复获取任务，执行任务，再获取任务，在执行，这种机制被称为事件循环(event loop)
        3，location对象
            window对象给我们提供了一个location属性，用于获取或设置筒体的URL，并且可以用于解析URL。因为location返回的是一个对象，所以我们也将这个属性称为location对象
                location.href : 整个url地址
                location.host : 主机或者域名
                location.port : 端口号，如果没有返回空字符串
                location.pathname : 返回路径
                location.search : 返回参数
                location.hash : 返回片段 ,#后面的内容a
                location.assign (url): 重定向并记录浏览器url地址，可以后退
                location.replace(url) : 重定向，单不记录url地址，不能后退
                location.reload() :  === 刷新键，如果参数为true === 强制刷新
##            navigator对象:获取浏览器的信息，和设备信息
##            history对象
                    history.back() : 页面后退
                    history.forward() : 页面前进
                    go(参数) : 前进和后退功能参数是1，前进一个页面，参数是-1 后退一个页面

