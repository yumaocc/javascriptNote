### 网站
- mdn：https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-content

### 快捷键
- 电脑
    - 三指拖移
    - 双指滚动
    - 单指确定
    - 单指双击选中，三击选中一行
    - 四指切换窗口
- vscode
    - 多使用智能提示

- 网站
    - 阮一峰：https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
- 视频
    - JS： https://space.bilibili.com/282190994/channel/seriesdetail?sid=397417



js笔记
<!-- < srcipt > < /srcipt> 用来引入js代码 -->
<!-- 为了提升网页加载速度，一般将js代码放在最后 -->
<!-- js的变量没有强类型，变量的类型跟着值本身的类型发生变化。-->
<!-- 变量提升，当变量定义放在输出语句后面时，js会在解析时自动将
变量提升。 -->
<!-- let 和 const 定义变量不会有变量提升，var定义变量会有变量提升 -->
<!-- const 一般用来定义常量，不可以修改（在同一个作用域不能修改，在不同的作用域可以修改），let 一般用来定义变量，可以修改。 -->
<!-- let 和 const 在同一个作用域不能重复声明，var可以 -->
<!-- Object.freeze(变量名)锁死变量，使其不可以被修改 -->
<!-- 传值 ，将目标对象复制一份给你，传址，将目标对象的地址给你。 -->
<!-- 严格模式： "use strict" 严格模式：必须要按照语言标准进行代码书写。 -->
<!-- 严格模式只会向下查找问题，不会向上，严格模式也会作用于子作用域。 -->



运算符和流程控制
<!-- 在长运算中 ++i会先进行计算，i++会后进行计算  -->
<!-- 当两个不同类型的值进行比较时，js会自动进行数据类型的转换 -->
<!-- &&与  两边都为真时为真 ，或|| 一边为真时为真 -->
<!-- 三元表达式  let a = ture ? 3 : 5 问号前面的值为真 将3赋值给a，问号前面的值为假将后面的5赋值给a -->
<!-- 判断一个值得类型使用：typeof  ,instanceof加一个类型判断这个值是否有这个类型 -->
<!-- 转义符 在字符串中双引号表示字符串的范围，字符串中不能出现双引号，这时可以使用\将双引号编程普通字符 -->
<!-- 字符串的连接`$(字符串)$(字符串)`==字符串 + 字符串 -->



数组
const a = [1,2,3,4,5]
<!-- a.length 求数组的长度 ，应为数组长度是一个数字，所以可以将数组长度赋值给一个变量-->
<!-- a.push()可以在数组的末尾为数组增加元素。可以同时添加多个元素用逗号分隔。新元素可以是一个任意类型 -->
<!-- ("字符串".includes（”字符串“）)判断前面一个字符串是否包含后面的字符串 ,返回结果为true和false-->
字符串
<!-- 字符串变量名.slice(开始下标，结束下标)可以对字符串进行切片，数组也可以使用。也可以省略一个下标，那样就可以从开始下标取到末尾 -->





事件dom

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>上课用品 5</title>
</head>
<body>
    <div class="login-form">
        <input id="id-input-username" type="text" value="gua">
        <br>
        <input id="id-input-password" type="text">
    </br>
        <input id="id-button" type="button" value="dd">
    </div>
    <div>
        <span class="radio-button active">html</span>
        <span class="radio-button active">js</span>
        <span class="radio-button active">css</span>
    </div>


   <script>
var pwd = document.querySelectot('#id-input-password')
var button = document.querySelector('#id-button')
var body = document.querySelector('body')
//获取body标签
var form = document.querySelector('.login-form')
//获取.login-form标签
var user = document.querySelector('#id-input-username')
//获取#id-input-username标签

var userValue = user.getAttribute('value')
//获取user里面的value属性的默认值

var userValue = user.value
//可以获取最新的值

user.value = "瓜gugagua"
//修改user里面value的值

user.hasAttribute('value')
//检查user里面特定的属性

user.removeAttribute('id')
//删除user里面的id属性

user.attributes
//获取user里面的所有属性

操作元素


var button = document.createElement('button')
//创建一个元素 <button> </button>
    button.innerHTML  = '注册用户'
//给这个元素增加信息 <button>注册用户</buttona>
    let form = document.querySelector('.login-form')//里面的选择器一定要按照要求来，class必须要加点，id 必须加#
    form.appendChild(button)//这里不要加引号
//为form增加一个子标签
// form.removeChild(button)
//可以调用父元素来删除一个标签
    button.remove()
//删除一个元素，和上面的form.removeChild(button)效果一样，注意：是remove,没有后面Child
事件
事件是处理响应的一个机制
//这个响应来自用户的的操作（点击，按键，滚动，鼠标移动）
//绑定一个事件
let loginButton = document.querySelector('#button')
    //获取button标签
    
    let clicked = function (){
        console.log('点击了一下')
    }
    loginButton.addEventListener('click',clicked)
    //给button标签绑定一个点击的事件，点击之后就会执行括号里面的第二个参数，注意：第一个参数不能错，不然会不执行第二个参数
    //addEventListener是绑定事件，‘click’代表点击操作
  绑定多个事件
  
  let buttons = document.querySelectorAll('.radio-button')
    //获取所有的.radio-button，返回值是一个数组
    for(let i = 0; i < buttons.length ;i++){
        let button = buttons[i]
        button.addEventListener('click',function(even){
            let self = even.target//通过target知道是第几个元素
            cc()//清除其他的active
            self.classList.add('active')//为我们点击的这个元素增加一个acrive类别
        })
    } 
    let cc = function(){
        let active = document.querySelector('.active')//找到active元素
        if(active != null){//判断他是否拥有active
            active.classList.remove("active") //如果有就讲active删除
        }
    }
  </script>
</body>
</html>


数据类型
<!-- Array.isArray()确定一个变量是不是数组，是则返回true,不是则返回false -->


<!-- 多行字符串，即只用字符串模板，使用之后可以换行 -->
<!-- 转义符：反斜杠\
\n  空格
\t  多个空格
\\   \
\'   '
以此类推 -->
<!-- String  : 讲一个变量转换成字符类型 -->
<!-- Math.floor  函数可以把小数转换成整数 -->
高阶函数
<!-- 即函数可以作为参数传递 -->
匿名函数
<!-- 即没有函数名，可以直接使用 -->



<!-- dom.innerHTML : 创建一个新的标签，

dom.insertAdjacentHTMl('beforeend',添加的标签)可以在变量名之后添加一个标签

dom.classList.remove(className)：删除一个列表的class

dom.classList.add(className) : 给一个列表增加一个class

dom.classList.contains(className)v: 检查一个列表是否纯在一个css -->



本地存储
<!-- localStorage可以将数据存储在本地，只能存储字符串且localStorage是一个对象， -->
<!-- 使用方法 ： localStorage.name = 'gua'   name 是key, -->
<!-- 将数组转为字符串的术语是  序列化 -->
<!-- 将字符串转换为数组的术语是反序列化 -->
let a = [1,23,4,,5]
let cc = JSON.stringify(a)  将数组序列化
let ss = JSON.parse(cc)     将数组反序列化

<!-- let todoss = []
todoss.splice(index,1):spice可以删除一个数组中指定下标的值，index等于下标，1表示删除一个， -->


event是点击对象所返回的值
<!-- let button = event.target   获取点的击位置，并将他赋值给button
let cell = button.parentElement   获取点击位置的父元素，并将它赋值给cell
let cells = cell.parentElement.children   获取所有cell父元素所有的子元素，并将其变成一个数组赋值给cells -->

<!-- dom.remove(),删除这个标签 -->

变量名的命名方法

<!-- 对于一个返回数据的函数，用名词 -->
<!-- 对于一个执行动作的函数，用动词 -->
<!-- 临时的段变量，用短名字 -->
<!-- 作用周期长的变量，用场景词 -->
函数的默认参数和多参数
<!-- 
let gua = function(a,b="gua){
    console.log(a,b)
} 

gua(1,2)
结果 1   2
gua(1)
结果  1 ，’gua‘

可以不给参数直接调用，没有值得参数是undefined
,也可以给多个参数，只是无法使用

不定的长度的多参数使用函数定义如下
let gw = function(a,b){
    argument 是一个特殊变量,是系统自带的
    只在函数内部才有
    他是一个独特的类型，单他用起来像一个数组
    console.log('多参数'，arguments)
}
-->


数组对象的比较，深拷贝和浅拷贝

<!-- 
== 这个运算符，对于基本数据类型，是比较值是否相同
对于array objuect 是比较两个变量是否为同一变量
而不是比较两个变量的值相等
 -->
 比较数组相等的基本办法
 <!-- 
 1，用JSON转成字符串判断字符是否相等
 2，用循环比较两个数组的元素是否相等
  -->

  深拷贝和浅拷贝
  <!-- 
    let c = [1,2,3]
    let d = c
    浅拷贝，只是改变了变量的名字，指向的东西还是同一个


    d[0] = 'gua'
    loc(c)
    结果[’gua',2,3]

    let e = []
    for(let i = 0 ;i < c.length ;i++){
        e.push(c[i])
    }
    c[0] = '瓜‘
    log('c and e ',c,e)
    结果  c = ’”gua"，2,3‘
          e = '"瓜",2,3'
    深拷贝，创建一个型的数组，将老数组的值一一用push添加到新数组
    ，改变新数组的值也不会影响老数组的值
   -->



dom
<!-- mouseout:表示鼠标移出
     mouseover:表示鼠标移入
     closest(className)，去寻找父元素中的拥有className的标签，并返回标签。

 
 -->
 无限定时函数
 <!-- setInterval接受两个参数，
        第一个参数是函数
        第二个参数是以毫秒为单位的时间
         定时执行函数-->

css动画
<!-- transition用于制作动画过度
        值分别是：动画的属性 和   动画的时间  延迟时间
        例子： transition: widht 2s 1s -->

data-name
<!-- name是可以自定义的。
可以通过data-name = '#id' 将两个不同的标签关联起来 -->

获取一个dom的标签名
<!-- element.tagName -->

轮播图
<!--  -->
定时执行函数,执行一次
<!-- setTimeout(参数一，参数二)
参数一是一个需要执行的函数，参数二是以毫秒为单位的数字（表示延迟执行的时间）

注意：这个参数只会执行一次 -->

这两个函数都会返回一个定时id，可以用clearInterval(id),停止函数。

无限执行的定时函数
<!-- setInterval(参数一，参数二)
参数一是需要执行的函数，参数二是以毫秒为单位的数字（表示延迟执行的时间）
注意：这个函数会无限执行，除非使用 -->






html5
<!-- 语义化标签：acticle  footer   header  nav   section -->
<!-- 视频和音频标签  video和  audio  -->
<!-- 本地离线存储 localStorage  and    sessionStorage -->
<!-- 新增表单特性控件  calendar（日历）  email  color -->
<!-- 用于绘图的canvas（画布）标签用于游戏 -->
<!-- 用于高性能图形的  WebGL ()-->


HTML5 语义化
<!-- 
<!DOCTYPE html>
<html lang="en">
<head>
   
    <title>标题</title>
</head>
<body>
    <header>头部</header>
    <nav>导航</nav>
    <article>文章
        <section>区域</section>
    </article>
    <aside>侧栏</aside>
    <footer>页脚</footer>
</body>
</html>
 -->



如何控制播放器
<!--  
1，播放  dom.play()
2,暂停   dom.pause()
3, 自动播放 dom.autoplay
4, 换歌  dom.src= '音频路径'通过重新给src赋值可以实现换歌，但是路径要完整
5, 调整音量大小 dom.volume = numbernumber的值为0到1
6， 歌曲时间  dom.duration  以秒为单位
7， 现在歌曲的时间  dom.currentTime,这个是可以赋值的
7, 查看现在的歌曲名称和路径 dom.currentSrc
9, 播放倍速 dom.playbackRate = number

特殊时间 canplay,即在歌曲加载完成会发生的时间和click一样使用




-->

移动网页

<!-- 手机网页和电脑网页的技术是一样的
      区别在屏幕尺寸和交互方式
 -->





 es6   node.js

<!-- 有了node之后js就可以脱离浏览器运行 -->
<!--  es6是js语言的一个最新版本（更新的版本是es7）-->
es6新增的东西
<!--
1，let
2，const  的值只能在声明的时候赋值，之后就不可以赋值。但是可以添加数组（push）

3,字符串模板

4，set 类型（集合）set中的元素永远不重复 定义 ： let s = new Set()， has === includes ,添加还是add，size===length,delete删除属性
5，map 类型

6，...  扩展符号，将一个数组展开

7,解包  let [a,b] = [1,2] ,结果a = 1 b = 2
8，函数的默认参数   函数可以设置一个默认参数，在不赋值的情况下，他结果就是默认参数，传值之后的结果就是你传的值  let c =function(b,a='1') c(1) ,结果 1 ，’1‘ c(1,2)结果1,2

9，可变参数 let foo = function(a,...name)  foo(1,2,3,4)  结果a=1 name = 2,3,4


10，箭头函数  如果要多参数，必须用...  ，没有arguments对象，this的值是绑定的。有默认的return  如果没有return  就会默认返回最后一个变量


11，新增函数   -->


node

<!--  -->
  


特殊函数： 字符串.split('&') 将&两测得字符切割并相加
         Object.keys(param) param是一个对象，这个函数可以将一个对象变成数组
 

 13课

 1，http协议
 2，AJAX 浏览器提供的用于发送接受http请求的标准库
 3，BOM 浏览器对象模型


https://www.zhihu.com/signin?next=%2F
https://www.zhihu.com/cc
 <!-- 网址组成的四部分
 1，协议    http,https(https是加密的http)
 2，主机    zhihu.com，g.cn之类的网址
 3，端口    HTTP协议默认的端口是80
 4，路径    上面的 /signin?next=%2F  和 /cc 是路径-->

 <!-- ip相当于一个地址，端口是收信人，端口是一个16位的数字 -->


 http协议
 <!-- 一个传输协议，协议就是双方都遵守的规矩
 
 1，为什么叫超文本传输协议呢，因为收发的事文本信息
 2，浏览器（客户端）按照规定的格式发送文本数据（请求）到服务器
 3，服务器解析请求，按照规定的格式返回文本数据到浏览器
 4，浏览器解析得到的数据，并做相应的处理 -->
 请求和返回的数据格式，一般分为4部分
 
 <!--
    1，请求行或者响应行
    2，header(请求的Header中host 字段是必须的，其他都是可选)
    3，\r\n\r\n(连续的连个换行回车符，用来分隔header和Body)
    4,Body（可选） 
 -->
    ‘GET / HTTP/1.1\r\nhost:g.cn\r\n’这个没有body
    打印结果如下
    GET /HTTP/1.1
    Host:g.cn

    <!-- 其中GET是请求方法（还有POST等，这就是一个表示字符串而已） -->
    <!-- / 是请求路径（这代表根路径） -->
    <!-- HTTP/1.1 中，1.1是版本号，通用了20年 -->

    前端掌握HTTP协议有什么用

    <!--  
    可以用JS动态抓取内容构建页面
    比如动态评论，加载数据
    比如天气预报程序
    比如壁纸图片库
    浏览器提供了使用HTTP协议收发数据的结构，名为AJAX
    -->


    BOM，浏览器 对象模型
    <!-- 
    location   管理URL
    navigator   管理浏览器
    history     管理历史记录
    screen      管理屏幕
    window      管理浏览器所有的东西 -->

history.length  历史页面的个数
history.back() 后退一个页面
history.forward() 前进一个页面
history.go(参数)  go 就是点几次的意思，正数前进，负数后退


history.pushState(null,'title','/profile') : 用于改变页面的
url，但不做页面跳转
第一个  自定义对象
第二个   新页面的标题
第三个   新页面的地址

history.replaceState  作用和history.pushState作用一样，但不会生成历史记录



 ajax 
 1，定义ajax变量
 2，给ajax数据传输设置一些规定
 3，页面对我发送的数据进行处理，执行一些操作

 <!-- ajax就像登录界面，使用ajax发送一些数据(发送数据的格式由后端规定)给服务器，然后服务器执行一些操作，比如创建用户，验证用户之类，然后返回一些东西给你，比如说登录成功呀，创建成功呀当然ajax太麻烦被淘汰了，现在都使用fetch代替了，操作发放如下 -->
 
 
 post方式<!--
    var post = (baseUrl, data) => {
    console.log('start', baseUrl)
    return fetch(baseUrl, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
}post用函数封装起来了，所以直接调用就可以了，第一个参数是网址，第二个是发送的数据
   -->

   get
   <!--



    var get = (baseUrl, params)=>{
    const query = paramsToQueryString(params)
    const url = baseUrl + "?" + query
    return fetch(url)
    .then(response => response.json())
}
get方法发送的数据需要写在url后面用问号连接，其他使用方法都和post一样使用
   
     -->



     15面向对象

面向过程就是分析出问题的步骤，把这些步骤用函数一一实现，使用的时候在依次调用


<!--
1，类是一个模板，可以用这个模板制造无数个对象
2，对象Object是一个实例，而类是一个虚拟的东西
3，类，就是语言提供的自定义数据类型的机制，也就是自定义对象
4， 
let Student = function (name, height){
            this.name = name
            this.height = height
        }
        let s1 = new Student('gua',169)
    Student就是一个类
    s1是一个对象
    new是一个套路，可以生成一个新的对象
    this也是套路，照着写就行

5，可以给类增加一些方法（es5）
    给类兴义方法（标准库中Stringhe length）
    
    Student.prototype.greeting = function(){
        console.log(`hello ,i,${this.name}`)
    }
    prototype是一个套路记下来就行，就是用来给对象或者类增加方法的
    **给类添加的方法，所有实例也就是对象都可以使用，但给对象添加方法就只有对象自己可以用-->
<!--(es6)

class Student{
    constructor(name,height){
        this.name = name
        this.height = height
    }

    greeting(){
        console.log(`hello, Im${this.name})
    }
    update(name,age){
        this.name = name
        this.age = age
    }
}   
  -->

  this
    所谓"构造函数"，其实就是一个普通函数，但是内部使用了this变量。对构造函数使用new运算符，就能生成实例，**并且this变量会绑定在实例对象上。其实就是this代表实例对象**

  在构造函数中，this等于实例对象，在普通函数中this等于函数的调用者

  apply:
        apply(空号为空值，默认是window调用)是函数的一个方法，作用是改变函数的调用对象。它的第一个参数就表示改变后的调用这个函数的对象。因此，这时this指的就是这第一个参数。

  <!-- 
  
class end{
    constructor(usename){
        console.log(this)
        this.clasname = usename
        console.log(this,'1')
    }
    sing(){
        console.log('唱歌')
    }
}
let ldh = new end('刘德华')
 -->
**  这ldh调用了end类，所以this就等于ldh，谁调用this this就等于谁。
constructor里面的this=== 实例对象 ，方法里面的this=== 方法的调用者
**

继承
class Father{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    money(){
        console.log('1000块钱')
    }
}

class Son extends Father { ** 使用关键字extends即可继承父类的方法**
    constructor(){
        super()  **super()必须放在this之前**super的主要作用就是调用父元素的构造函数，父类的方法必须使用父类的属性，所以super另一个作用就是将子类的属性传递给父类，从而进行使用父类的一些方法
    }
}
 
let son = new Son('1')

在继承中有一个就行原则，即父类和子类都有同一个方法，程序会直接执行子类的方法，即就近原则，
想要调用父类的方法，要使用super关键字，使用方法如下

super也可以调用父类的普通函数(方法)，即 super.父类的方法()



19课
promise
lodash  : 用来处理数据的一个库，
jquery  : 用来处理页面的
@@
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="http://cdn.bootcss.com/jquery/3.2.1/jquery.js"></script>
</head>
<body>
    <div id="gua">
        <div class="gua-cell">
            <span class="gua-title">gua</span>
        </div>
        <div class="gua-cell">
            <span class="gua-title">gw</span>
        </div>
    </div>


    <script>

    </script>
</body>
</html>
jquery语法：
1,普通选择符： document.querySelector === $


2,find:查找子元素  $('#gua').find('span'),查找所有#gua的多有span 


3,siblings：查找同胞元素

4,closest,   parent
closest  :寻找祖先元素
parent : 寻找父元素
dom操作
5,append;  $('#gua').append('<h1>hello</h1>')=== $('#gua')[0] +=innerHTML**$得到的结果是一个jquery对象，后面加上一个【0】才是dom

6,remove(),用法和dom的remove相同

7，empty: 删除

8,show:展示影藏的元素 hide: 影藏元素   toggle

class操作
1，addClass  removeClass

2,toggleClass() ;切换括号中的css，有则删除，无则添加

属性，特征操作
1，attr  prop  data

attr操作普通属性

prop 操作bool

dataset.key === $('#gua').data('name') jquery会将字符串的数字自动转换成数字

2,removeAttr删除一个属性

取值
1，val() ===.value
2,text() === innerText
3,html() === .innerHTML

事件
1，点击事件 === on
2,event.target


数组方法
1，each   方法规定为每个匹配元素规定运行的函数。
2,map

闭包：

@@



promise 是抽象异步处理以及对其进行各种操作的组件，
简而言之就是让异步操作变得简单





20课-数据结构与算法分析

<!-- 
1，数据结构就是存储数据的方式

2，算法分析是对一个算法时间的大致估计

 -->


@@
 时间，空间复杂度
 
 1，复杂度是对一个操作的大致估计
 2，复杂度从小到大依次如下
 <!-- 复杂度用大O记法，来描述(大O记法是描述算法复杂度的符号) -->
 
 五种常见时间复杂度(复杂度是指算法随着数据规模增长的变化)
 
 O(1)
 常数复杂度，最快速的算法。
 取数组第1000000个元素
 字典和集合的存取都是O(1)
 数组的存取是O(1)

 O(logN)
 对数复杂度，最快速的算法
 假设有一个有序数组，以二分法查找
 当数据是1024的时候，我们只需要10次找到想要的数据

 O(n)
 线性复杂度
 假设有一个数组，以遍历的方式在其中查找元素
 当数据是1024的时候，我们最坏的情况需要1024次才能确定想要的数据是否在里面

 O(nlogN)
 求两个数组交集，其中一个是有序数组
 A数组每隔一元素都需要在B数组中进行查找
 每次查找如果使用二分法则复杂度是lgN，一共要查找N次

 O(N²)
 平方复杂度
 求两个无序数组的交集
@@

@@
数据结构
======
针对常用的操作，我们发明了一套常用的数据结构
四大数据结构(他自己发明的，不能拿去讲道理)

1，数组
    连续的一块内存
    读取元素的时间O(1)
    插入，删除是O(n)

2,链表
    手拉手的盒子，一个盒子只能访问左右手的盒子
    以下标方式读取元素的时间是0(n)
    插入，删除是O(1)
    栈和队列是链表的特定场景应用(不用链表也可以)

3，字典(对象/哈希表/Map)
    把字符串转为数字作为下标存储到容器数组中
    字符串转化为数字的算法都是O(1)
    所以字典的存取操作都是O(1)
    除非对数据有顺序要求，费泽字典永远是最佳选择
    
    字符串转化为数字的算法
        1,确定数据规模，这样可以确定容器数组的大小Size
        2,把字符当做N进制数字得到结果
             'gua' 被视为 g *  1 + u * 10 + a * 100 得到结果n
             n % Size 作为字符串在数组中的下标
              通常Size会选择一个素数
@@

@@
4，搜索树又称二叉搜索树(我们只用，不写，甚至只是隐含再用，你并不知道你用的是树)
@@

@@
面向对象  的多态和继承性
    js没有多态，继承公共部分。
@@

21课

1，css3的新特性
@@  1,transform
    2,box-shadow  text-shadow
    3,border-radius
    4,opacity
    5,rgba

2，css3动画和动态效果
1，transition  简单的动画效果
2，keyframes  关键帧动画
keyframes使用方法：现在定义
@keyframes name{
    0%{
        样式
    }
    100%{
        样式
    }
}
使用：
.gua:hover{
    animation: 1s name
}

动画播放结束触发的事件：animationend
动画播放一轮后触发的事件：animationiteration


零散知识点
let todo = JSON.parse(localStorage.sumTodo || "[]")，JSON在读到空字符时会报错，null，undefiend 时同理
 

