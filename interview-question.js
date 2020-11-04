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