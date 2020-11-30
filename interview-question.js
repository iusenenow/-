// 1.（百度）The values of x,y,z
// var x = 1, y = z = 0

// function add(n) {
//   return n = n + 1
// }

// y = add(x)

// function add(n) {
//   return n = n + 3
// }

// z = add(x)

// console.log(x, y, z);

// 2.（阿里巴巴）console.log的结果是[1,2,3,4,5]的选项是：A&D
// A
// function foo(x) {
//   console.log(arguments)
//   return x
// }
// foo(1, 2, 3, 4, 5)

// B
// function foo(x) {
//   console.log(arguments);
//   return x
// } (1, 2, 3, 4, 5)

// (1, 2, 3, 4, 5)当作数学运算，不报错

// C
// (function foo(x) {
//   console.log(arguments);
//   return x
// })(1, 2, 3, 4, 5)

// D
// function foo() { bar.apply(null, arguments) }
// function bar(x) { console.log(arguments) }
// foo(1, 2, 3, 4, 5)

// bar.apply(null, arguments)相当于bar(arguments)

// 3.结果：
// parseInt(firstArg, secondArg)以secondArg为基底转化firstArg
// parseInt(3, 8) => 3
// parseInt(3, 2) => NaN
// parseInt(3, 0) => 3

// ["1","2","3"].map(parseInt) =>
// ["1","2","3"].map(function(item, index, array){ return parseInt(item, index, array)}) =>
// parseInt("1", 0) => 1 十进制
// parseInt("2", 1) => NaN 不在2-36之间
// parseInt("3", 2) => NaN 二进制，识别不了3，返回NaN
// [1, NaN, NaN]

// 4.看看下面alert的结果是什么？
// function b(x, y, a) {
//   arguments[2] = 10
//   alert(a)
// }
// b(1, 2, 3)
// 结果：10

// 5
// var f = (
//   function f() {
//     return "1"
//   },
//   function g() {
//     return "2"
//   }
// )()

// console.log(typeof f) // string
// 逗号操作符：
// 1, 2 => 2
// var num = (1, 2) => num = 2

// 6
// undefined == null // false
// undefined === null // false
// isNaN("100") // false
// isNaN(234) // false
// isNaN("abc") // true 
// parseInt("1a") == 1 // true

// function myIsNaN(num) {
//   let ret = Number(num)
//   ret += ""
//   if (ret == "NaN") {
//     return true
//   } else {
//     return false
//   }
// }

// 7
// var name = "222"
// var a = {
//   name: "111",
//   say() {
//     console.log(this.name);
//   }
// }
// var fun = a.say
// fun() // "222"
// a.say() // "111"
// var b = {
//   name: "333",
//   say(fun) {
//     fun()
//   }
// }
// b.say(a.say) // "222"
// b.say = a.say
// b.say() // "333"

// 8:运行test()和new test()的结果分别是什么？
// var a = 5
// function test() {
//   a = 0
//   alert(a)
//   alert(this.a)
//   var a
//   alert(a)
// }
// console.log(test()); // 0 5 0
// console.log(new test()); // 0 undefined 0

// 9:
// function print() {
//   console.log(foo); // undefined
//   var foo = 2
//   console.log(foo); // 2
//   console.log(hello); // ReferenceError
// }
// print()

// 10:
// function print() {
//   var test
//   test()
//   function test() {
//     console.log(1);
//   }
// }
// print() // 1

// 11:
// function print() {
//   var x = 1
//   if (x == "1") console.log("One!");
//   if (x === "1") console.log("Two!");
// }
// print() // One!

// 12:
// function print() {
//   var marty = {
//     name: "marty",
//     printName() { console.log(this.name) }
//   }
//   var test1 = { name: "test1" }
//   var test2 = { name: "test2" }
//   var test3 = { name: "test3" }
//   test3.printName = marty.printName
//   var printName2 = marty.printName.bind({ name: 123 })
//   marty.printName.call(test1) // test1
//   marty.printName.apply(test2) // test2
//   marty.printName() // marty
//   printName2() // 123
//   test3.printName() //test3
// }
// print()

// 13
// var bar = { a: "002" }
// function print() {
//   bar.a = "a"
//   Object.prototype.b = "b"
//   return function inner() {
//     console.log(bar.a); // a
//     console.log(bar.b); // b
//   }
// }
// print()()

// 14 Function Parameters
// let f = function (a, b) {
//   arguments.length === f.length ? console.log('We have a match') : console.log('No match')
// }

// f(1) // No match
// f(1, 2) // We have a match
// f(1, 2, 3) // No match

// 15 Async
// let num = 0
// async function increment() {
//   num += await 2 // num = 0 + await 2
//   console.log(num); // 2
// }
// increment()
// num += 1
// console.log(num); // 1

// 16 Closure
// function f1(a) {
//   let b = 2
//   setTimeout(function () {
//     console.log(a, b)
//   }, 1000)
// }

// function f2() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(function () {
//       console.log(i); // 3 3 3
//     }, 1000 * i)
//   }
// }

// function f3() {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(function () {
//       console.log(i); // 1 2 3
//     }, 1000 * i)
//   }
//   // i no longer exists
// }

// function f4() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout((function (x) {
//       console.log(x)
//     }).bind(this, i), 1000 * i)
//   }
// }

// 16 Array: Create an Array that is prepopulated with number between 0-9
let array1 = Array.from({ length: 5 }, item => Math.floor(Math.random() * 10))
// console.log(array1);

let array2 = new Array(5).fill(null).map(item => Math.floor(Math.random() * 10))
// console.log(array2);

// 17 map & parseInt
let result1 = ['1', '7', '11'].map(parseInt)
// console.log(result1); // [1, NaN, 3]
// parseInt(num, radix) //default radix 10
// array.map((val, idx, arr) => {})
let result2 = ['1', '7', '11'].map(item => parseInt(item))
// console.log(result2);
// '1', 0 - default 10 radix
// '7', 1 - 1 is ok as the radix but 7 is illegal => NaN
// '11', 2 - binary as the radix 00000011 in decimal is 3

// 18 Dot notation & square brackets
let sam = { castiel: "mary" }
let dean = {
  john: "crowley",
  mary: "chuck"
}

// console.log(dean[sam.castiel]); // dean['mary'] => chuck
// console.log(dean.sam.castiel); // fail
// console.log(dean[sam['castiel']]); // dean['mary] => chuck
// console.log(dean[sam[castiel]]); // dean[sam[undefined]]

// 19 Integers: Write a function to determine if a number is an integer
function isInt(num) {
  return (!isNaN(num) && parseInt(num) === num)
}
// console.log(isInt(3))
// console.log(isInt(4.5))
// console.log(isInt(1.00000))

// 20 Anagrams
function isAnagram(str1, str2) {
  let sorted1 = str1.split('').sort().join('').toLowerCase()
  let sorted2 = str2.split('').sort().join('').toLowerCase()
  return (sorted1 === sorted2)
}
// console.log(isAnagram('hello', 'lolej'))
// console.log(isAnagram('hello', 'olehl'))

// 20 Calculating Differences
let numberOfArray = [12, 2, 10, 6, 5, 5, 6, 9, 10, 33, 12, 9, 7]
let difference = (function (arr) {
  // remove duplicates with Set
  // pass set back to an array
  // numerical sort
  // calculate difference between first and last digits
  let answer = Array.from(new Set(arr)).sort((a, b) => b - a)
  return answer[0] - answer[answer.length - 1]
})(numberOfArray)
// console.log(difference)

// 21 Palindrome
let palindrome = function (word) {
  let start = word.substring(0, Math.floor(word.length / 2)).toLowerCase()
  let end = word.substring(word.length - Math.floor(word.length / 2)).toLowerCase()
  let flip = end.split('').reverse().join('')
  return start === flip
}

console.log(palindrome('radar'))
console.log(palindrome('redder'))
console.log(palindrome('window'))
console.log(palindrome('wiriw'))