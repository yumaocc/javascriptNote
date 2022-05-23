
//队列--------------------
let Queue = function(){
    this.data = []
}
//入队
Queue.prototype.enqueue = function(element){
    this.data.push(element)
}
//出队
Queue.prototype.dequeue = function(){
    return this.data.splice(0,1)
}

//栈----------------

let Stack = function() {
    this.data = []
}
//添加一个元素
Stack.prototype.push = function(e){
    this.data.push(e)
}
//删除最新添加的元素
Stack.prototype.pop = function() {
    let index = this.data.length-1
    return this.data.splice(index,1)
}

//仅返回最新添加的元素
Stack.prototype.top = function() {
    let index = this.data.length - 1
    return this.data[index]
}


//链表------------

let Node = function(e){
    this.element = e
    this.next = null
}

let n1 = new Node(1)
let n2 = new Node(2)
let n3 = new Node(3)
n1.next = n2
n2.next = n3
let n = n1
while(n != null){
    log('遍历链表',n.element)
    n = n.next
}

let LinkedList = function(){
    this.head = new Node()
    this._length = 0
}
//在链表末尾增加一个元素
LinkedList.prototype.addend = function(e){
    let node = new Node(e)
    let n = this.head
    while(n.next != null){
        n.next = node

        this._length++
    }

}
//返回一个元素的index
LinkedList.prototype.indexOf = function(e){
    let index = -1
    let n = this.head
    let i = 0
    while(n.next != null){
        if(e === n.element){
            index = i
            break
        }
        n= n.next
        i++
    }
}

//返回链表的长度
LinkedList.prototype._length = function(){
    return this._length
}


