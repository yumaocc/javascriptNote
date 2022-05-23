
1,什么事immutable
    immutable Data 一但创建，就不能被更改的数据。对immutable对象的增加删除修改的操作都会返回一个新的immutable对象。
    主要原理是采用了(Persistent Date Structure)持久化数据结构，就是每次修改后我们都会得到一个新的版本，且旧版本可以完好保留，也就是用旧数据创建新数据时，要保证旧数据不可变。同时为了避免深度复制把所有节点都复制一次，从而导致的内存消耗，immutable使用了(Structural Sharing)结构共享，就是对于本次没有操作的部分，我们可以直接把相应的旧的节点拷贝过去，这就是解构共享

2，immutable的优点
    降低对象复杂度：使用immutable之后可以降低原生js对象复杂度的问题，使我们状态变成可预测的。
    节省内存：immutable使用结构共享机制，所以会尽量复用内存
    方便回溯：immutable每次创建一个新的对象，且对象不可变，那么变更的记录就能被保存下来，应用的状态就变的可控，可追溯，方便撤销和重做的功能实现
3，缺点


数据结构
    List
        创建： let arr = List([1,2,3,4,]) ===   let arr = List.of(1,2,3,4,s)
        api: 判断长度： arr.size  
             赋值： let arr2 = arr.set(下标，date)
             取值： let arr3 = arr.get(下标)
             拷贝： let arr1 = arr.set()
             删除：let arr2 = arr.delete(下标)
             插入： let arr2 = arr.insert(下标，date)
             更新：let arr3 = arr.update(下标，callback) 
             清空：let arr2 = arr.clear()
             设置长度：setSize
             二维List let arr = List([
                 List([1,2,3,4]),
                 List([1,2,3,4]),
                 List([1,2,3,4]),
             ])
             setIn([一维下标，二维下标]，新的值)
            同理还有deleteIn,insertIn ,updateIn
            groupBy对List进行分类
            concat连接List
            flatten 拍平List

        特点：下标可以是负数，表示从右往左取值
        对象的操作都差不多

原生对象或数组的转换
    fromJS()将原生数组转换成immutable对象或者数组
    toJs()将immutable装换成原生对象或者数组
