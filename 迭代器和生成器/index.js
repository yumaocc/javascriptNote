
///迭代器
let obj = {
    arr: [1, 2, 3, 4, 5,],
    [Symbol.iterator]() {
        let i = 0
        return {
            next: () => {
                if (i < this.arr.length) {
                    let result = { value: this.arr[i], done: false }
                    i++
                    return result
                } else {
                    return { value: undefined, done: true }
                }
            }
        }
    }
}
let iterator = obj[Symbol.iterator]()
//生成器

function time1() {
    setTimeout(() => {
        let data = '111'
        foo.next(data)
    }, 1000)
}
function time2() {
    setTimeout(() => {
        let data = '11'
        foo.next(data)
    }, 1000)
}
function time3() {
    setTimeout(() => {
        let data = '1'
        foo.next(data)
    }, 1000)
}
function* fn() {
    let s = yield time1()
    let c = yield time2(s)
    let y = yield time3(c)
    console.log(s,c,y)
}
let foo = fn()
foo.next()
