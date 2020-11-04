// 数组的定义
// var arr = []
// new Array(length / content) //只传一个数字参数表示新建数组的长度，不能传小数
// 字面量

// 数组的读和写
// arr[num] //不可以溢出读：结果undefined
// arr[num] = xxx //可以溢出写

// 数组的常用方法
// 数组能用的一切方法来源于Array.prototype
// 1.改变原数组
// push, pop, shift, unshift, sort, reverse, splice

// arr.push() 在数组的最后一位添加数据，返回数组长度

Array.prototype.push1 = function () {
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i]
  }
}

const arr = [1, 2, 3]

// 2.不改变原数组
// concat, join => split, toString, slice