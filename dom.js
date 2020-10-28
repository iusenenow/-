/* 什么是DOM
1. DOM -> Document Object Model
2. DOM定义了表示和修改文档所需的方法。DOM对象即为诉诸对象，由浏览器厂商定义，用来操作html和xml功能的一类对象的集合。也有人称DOM是对HTML以及XML的标准编程接口


*/
// dom对象
const div = document.getElementsByTagName('div')[0]
div.style.width = "100px"
div.style.height = "100px"
div.style.backgroundColor = "red"

let count = 0

div.onclick = function () {
  count++
  count % 2 === 1 ? this.style.backgroundColor = 'green' : this.style.backgroundColor = 'red'
}