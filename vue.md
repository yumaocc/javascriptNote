data:
    v-text : 设置标签的文本内容
    v-html : 效果和v-text一样，不过他可以识别标签
methods:
    v-on : 添加事件，可以简写成@（可以用this 拿到data里面的数据）
    
 v-show:控制组件显隐(操作css样式)
 v-if : 控制组件显隐(操作dom元素)
 v-bind ：设置元素的属性（可以简，直接写冒号，不用写前面的v-bind）
 v-for:根据数据生成列表结构
 v-model:获取或设置表单元素的值(双向数据绑定)


    mount:挂在
    umount：卸载
Composition API 组合式api

##  api
    -   ref定义响应式数据，可以直接读取，但是修改时需要使用value，也可以定义引用类型，ref内部会去求助reactive帮他实现代理，使用的数据劫持，实现响应式
    -   reactive作用和ref一样，不过他不能接受基本类型 ,reactive可以直接取值，不用加value ，使用proxy代理对象实现
    slot模板插槽,等于react的children
##  计算属性
    简写：computed接受一个回调函数，返回一个新的数据 ,只读不能修改
    完成写法：computed({ 可以修改
        set(value){

        },
        get() {

        }
    })
## 监听 watch
    watch有三个参数，第一个监视的对象，监视的回调，第三个监视的配置
    监视一个直接写，监视多个写成数组 watch(data,()=>{})

    watchEffect参数是一个回调函数，他会监视他内部所使用的值，必须是基本类型的值

##  声明周期



##  自定义hook
    