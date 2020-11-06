// 数组的定义
// var arr = []
// new Array(length / content) //只传一个数字参数表示新建数组的长度，不能传小数

// 数组的读和写
// arr[num] //不可以溢出读：结果undefined
// arr[num] = xxx //可以溢出写: [1, 2, 3, 4, empty, 6]

// 数组的常用方法
// 数组能用的一切方法来源于Array.prototype

let numbers = [1, 2, 3, 4]

// 1.改变原数组
// push, pop, shift, unshift, sort, reverse, slice, splice

// const arr = [1, 2, 3]
// arr.push() 在数组的最后一位添加数据，返回数组长度
// Array.prototype.push1 = function () {
//   for (let i = 0; i < arguments.length; i++) {
//     this[this.length] = arguments[i]
//   }
//   return this.length
// }

// splice = function (position) {
//   position += position > 0 ? 0 : this.length
// }

// const arr1 = [1, 3, 4, 5, 10, 23]

// arr1.sort((a, b) => b - a)

// 给一个有序的数组，乱序
// const arr = [1, 2, 3, 4, 5, 6, 7, 8]
// arr.sort(() => Math.random() - 0.5)

// 2.不改变原数组
// concat, join => split, toString, slice

// Empty an array


// Solution 1
// numbers = [] // If you have single referrence to the array
// Solution 2
// numbers.length = 0
// Solution 3
// numbers.splice(0, numbers.length)
// Solution 4
// while (numbers.length > 0) {
//   numbers.pop()
// }

// Combining and Slicing Array
// const first = [1, 2, 3]
// const second = [4, 5, 6]
// const combined = first.concat(second)
// const slice = combined.slice() // copy an array

// includes() finding primitive element
// find() finding reference type element, return first finding element, return element index

// Iterating an Array
// for (let number of numbers) {
//   console.log(number);
// }
// numbers.forEach((number, index) => console.log(index, number))

// Joining an Array
const joinedNumber = numbers.join(',') // return a string
const joinedNumber1 = numbers.join() // default join with comma
const joinedNumber2 = numbers.join('')
const joinedNumber3 = numbers.join('😆')
console.log(joinedNumber); // 1,2,3,4
console.log(joinedNumber1); // 1,2,3,4
console.log(joinedNumber2); // 1234
console.log(joinedNumber3); // 1😆2😆3😆4

const message = 'This is my first message'
const parts = message.split() // return original array
const parts1 = message.split(' ') // ["This", "is", "my", "first", "message"]
console.log(parts);
console.log(parts1);







// 类数组
// function test() {
//   console.log(arguments); // 类数组
//   arguments.push(7) // 报错
// }

// test(1, 2, 3, 4, 5, 6)

// const obj3 = {
//   "0": "a",
//   "1": "b",
//   "2": "c",
//   "name": "abc",
//   "length": 3,
//   "push": Array.prototype.push,
//   "splice": Array.prototype.splice
// }

// obj3.push("d")
// console.log(obj3);

// 属性要为索引（数字）属性，必须有length属性，最好加上push
// 好处
// Array.prototype.push = function (target) {
//   this[this.length] = target
//   this.lenght++
// }



// 阿里巴巴考题
// const obj4 = {
//   "2": "a",
//   "3": "b",
//   "length": 2,
//   "push": Array.prototype.push
// }
// obj4.push('c')
// obj4.push('d')
// console.log(obj4);

// 封装type
// typeof([]) -- array
// typeof({}) -- object
// typeof(function) -- object
// typeof(new Number()) -- number Object
// typeof(123) -- number

// 数组去重
// 要求在原型链上编程

Array.prototype.unique = function () {

}