// 一、数组的定义
// var arr = []
// new Array(length / content) //只传一个数字参数表示新建数组的长度，不能传小数

// 二、数组的读和写
// arr[num] //不可以溢出读：结果undefined
// arr[num] = xxx //可以溢出写: [1, 2, 3, 4, empty, 6]

// 三、数组方法：数组能用的一切方法来源于Array.prototype
//（1）改变原数组的方法
// push, pop, shift, unshift, sort, reverse, slice, splice
//（2）不改变原数组的方法
// concat, join => split, toString, slice

// 1.Add an element to an Array
// const arr = [1, 2, 3]
// arr.push() 在数组的最后一位添加元素，返回数组长度
// Push()方法重写：
// Array.prototype.push1 = function () {
//   for (let i = 0; i < arguments.length; i++) {
//     this[this.length] = arguments[i]
//   }
//   return this.length
// }

// 2.节选Array
// splice()添加负数实参
// splice = function (position) {
//   position += position > 0 ? 0 : this.length
// }

// 3.Sorting an Array
// const arr1 = [1, 3, 4, 5, 10, 23]
// arr1.sort((a, b) => b - a)
// 给一个有序的数组，乱序
// const arr = [1, 2, 3, 4, 5, 6, 7, 8]
// arr.sort(() => Math.random() - 0.5)

// 4.Testing the elements of an Array: every() & some()
// const testArray = [1, 2, 3, -1]
// Every element in the array should match the criteria
// const allPositive = testArray.every(number => number >= 0)
// At least one element in the array matchs the criteria
// const atLeastOnePositive = testArray.some(number => number >= 0)
// console.log(allPositive);
// console.log(atLeastOnePositive);

// 5.Empty an array
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

// 6.Combining and Slicing Array
// const first = [1, 2, 3]
// const second = [4, 5, 6]
// const combined = first.concat(second)
// const slice = combined.slice() // copy an array

// 7.数组查找
// includes() finding primitive element
// find() finding reference type element, return first finding element, return element index

// 8.Iterating an Array数组遍历
// for (let number of numbers) {
//   console.log(number);
// }
// numbers.forEach((number, index) => console.log(index, number))

// 9.Joining & Spliting an Array
// const joinedNumber = numbers.join(',') // return a string
// const joinedNumber1 = numbers.join() // default join with comma
// const joinedNumber2 = numbers.join('')
// const joinedNumber3 = numbers.join('😆')
// console.log(joinedNumber); // 1,2,3,4
// console.log(joinedNumber1); // 1,2,3,4
// console.log(joinedNumber2); // 1234
// console.log(joinedNumber3); // 1😆2😆3😆4

// const message = 'This is my first message'
// const parts = message.split() // return original array
// const parts1 = message.split(' ') // ["This", "is", "my", "first", "message"]
// console.log(parts);
// console.log(parts1);
// const combined = parts1.join('-')
// console.log(combined); // This-is-my-first-message

// 10.Reduce
// const numbers = [1, -1, 2, 3, 5, 12]

// //用for..of循环
// let sum = 0
// for (let number of numbers) {
//   sum += number
// }
// console.log(sum);
// //用reduce方法
// const sum1 = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue
// }, 0)
// //精简版：no second argument, first elem in an array will be the first acc
// const sum2 = numbers.reduce((acc, curr) => acc + curr)
// console.log(sum1, sum2);

// 四、类数组
// function test() {
//   console.log(arguments); // 类数组
//   arguments.push(7) // 报错，类数组不可以用数组方法
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

// 阿里巴巴类数组考题
// const obj4 = {
//   "2": "a",
//   "3": "b",
//   "length": 2,
//   "push": Array.prototype.push
// }
// obj4.push('c')
// obj4.push('d')
// console.log(obj4);

// 五、练习题
// 1.Array from range
// const numbers = arrayFromRange(-10, 10)
// console.log(numbers);

// function arrayFromRange(min, max) {
//   const output = []
//   for (let i = min; i <= max; i++) {
//     output.push(i)
//   }
//   return output
// }

// 2.Includes重写
// Array.prototype.includes1 = function (searchElement) {
//   for (let element of this)
//     if (element === searchElement)
//       return true
//   return false
// }

// 3.Except
// Array.prototype.except = function (excluded) {
//   const output = []
//   for (let element of this)
//     if (!excluded.includes(element))
//       output.push(element)
//   return output
// }

// 4.Moving an Element
// const numbers = [1, 2, 3, 4]

// Array.prototype.move = function (index, offset) {
//   const position = index + offset

//   if (position >= this.length || position < 0) {
//     console.error('Invalid offset!');
//     return
//   }

//   const output = [...this]
//   const element = output.splice(index, 1)[0]
//   output.splice(position, 0, element)
//   return output
// }

// 5.Count Occurrences
const numbers = [1, 2, 3, 4, 1, 4, 5, 6, 7, 5, 6]
Array.prototype.countOccurrences = function (searchElement) {
  return this.reduce((acc, curr) => {
    const occurrence = (curr === searchElement) ? 1 : 0
    return acc + occurrence
  }, 0)
}

// 6.Get Max
Array.prototype.getMax = function () {
  if (this.length === 0) return undefined
  // let max = this[0]
  // for (let i = 1; i < this.length; i++) {
  //   if (this[i] > max)
  //     max = this[i]
  // }
  // return max
  return this.reduce((a, b) => (a > b) ? a : b)
}

// 7.Movies
const movies = [
  { title: 'a', year: 2018, rating: 4.5 },
  { title: 'b', year: 2018, rating: 4.7 },
  { title: 'c', year: 2018, rating: 3 },
  { title: 'd', year: 2017, rating: 4.5 }
]
// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pick their title
const titles = movies
  .filter(movie => movie.year === 2018 && movie.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map(movie => movie.title)