
var str = "get-element-by-id";

function stringToCamel(str) {
 var temp = str.split("-");//把字符串分割为字符串数组
 console.log(temp);
  // for循环第二个单词到最后一个单词，并转换单词首字母为大写
 for (var i = 1; i < temp.length; i++) {
   temp[i][0].toUpperCase()
 }
 return temp.join("");
}
console.log(stringToCamel(str));

asdfa