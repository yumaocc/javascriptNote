// let str = 'a=1&b=2&c=123&d=xxx'


// let strT = function (str) {
//     let arr = []
//     let number = '0123456789'
//     let check = function (s, string) {
//         let sum = 0
//         for (let i = 0; i < string.length; i++) {
//             if (s === string[i]) {
//                 sum++
//             }
//         }
//         return sum
//     }
//     let obj = {}
//     let c = str.split('&')
//     for (let i = 0; i < c.length; i++) {
//         let s = c[i].split('=')//
//         arr.push(s)
//     }
//     let newString = arr.flat(2)
//     for (let i = 0; i < arr.length; i++) {//为什么要在这里定义数组，而不是下面push的时候定义。因为如果这push的时候定义，第二个a出现的时候，会重新定义一个数组，不会再是之前定义的数组，可以试一下
//         let s = arr[i]
//         if (check(s[0], newString) > 1) {
//             obj[s[0]] = []
//         }
//     }

//     for (let i = 0; i < arr.length; i++) {
//         let s = arr[i]

//         if (check(s[0], newString) > 1) {//如果直接在这里定义数组，会出现上面所说的问题

//             obj[s[0]].push(parseInt(s[1]))
//         }
//         else if (s[1] != '' && number.includes(s[1])) {//这里加判断主要是因为number.includes检查空字符串也会为真，所以要多加一个判断
           
//             obj[s[0]] = parseInt(s[1])
//         }
//         else {
//             obj[s[0]] = s[1]
//         }
//     }
//     return obj
// }
// console.log(strT(str))


// a1 表示第一个a
const queryParse = (query) => {
    const pairs = query.split('&')
    const r = {}
    pairs.forEach((p,index) => {
        const [key,value] = p.split('=')
        const isInt = !isNaN(parseInt(value))
        const data = isInt? parseInt(value) : value //
        if(r[key]){ //直接看这里，a1 没有赋值，所以是undefined，条件不成立，b1 也还没有赋值，所以和a1一样, c1也还没有赋值，所以和a1一样 。轮到a2，a1的时候是给a赋值了的，所以a1在这里是成立的
            r[key] = [ r[key], data]//所以a2会到这里进行赋值，data是a2的值，a1的值就是r[key],第一次的时候付过值了嘛。因为r[key]有值，满足if(里面的条件)所以相同的值第二次赋值都实在这里进行赋值，
        }else{//
            r[key] = data//a1最终会在这里赋值，b1最终会在这里赋值，c1最终会在这里赋值，不同key的值都会在这里赋值
        }
    });
    return r 
}
const t = 'a=1&b=2&c=&d=xxx&a=4'
queryParse(t)