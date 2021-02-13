// 一、函数定义
// 1.函数声明 Function Statement/Declaration
// function bar() { return 3 } // function is only declared here.
// bar() // funcion invoked

// // 2.函数表达式 Function Expression
// // 1)匿名函数表达式
// let x = function (a, b) { return a * b }
// After a function expression has been stored in a variable, the variable can be used as a function. Functions stored in variables do not need function names. They are always invoked (called) using the variable name:
// x() // function invoked

// 2)命名函数表达式：忽略函数名: abc无作用
// var test = function abc() {
//   console.log("a");
// }
// test.name // abc

// 3.Function Expression VS Function Statement
// Function Expression
// console.log(foo()) // ERROR! foo wasn't loaded yet
// var foo = function () { return 5 }

// Function Declaration
// console.log(foo()); // Alerts 5. Declarations are loaded before any code can run.
// function foo() { return 5 }

// Function declarations load before any code is executed while Function expressions load only when the interpreter reaches that line of code.
// Similar to the var statement, function declarations are hoisted to the top of other code. Function expressions aren’t hoisted, which allows them to retain a copy of the local variables from the scope where they were defined.

// 4.Benefits of Function Expressions
// There are several different ways that function expressions become more useful than function declarations.
// 1) as closures
// 2) as arguments to other functions
// 3) as Immediately Invoked Function Expressions (IIFE)

// 二、arguments //是一个类数组，实参列表。arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

// arguments.length //The number of arguments that were passed to the function.

// 求实参长度：arguments.length
// 求形参长度：函数名.length
function sum(a, b) {
  console.log('实参:', arguments.length) // 3
  console.log('形参:', sum.length)
  for (var i = 0; i < arguments.length; i++)
    console.log(arguments[i]);
  if (sum.length > arguments.length) {
    console.log('形参多了')
  } else if (sum.length < arguments.length) {
    console.log("实参多了");
  } else {
    console.log("相等");
  }
}

// sum(11, 2, 9)

function add(a, b, c, d) {
  for (var i = 0; i < arguments.length; i++) console.log(arguments[i])
  if (add.length > arguments.length) console.log('形参多了')
  else if (add.length < arguments.length) console.log('实参多了')
  else console.log('实参形参相等')
}

// add(3, 4, 5, 6)

// 例题：
// 1.实现n的阶乘
// const n = parseInt(window.prompt("Input"))

// 1）for循环
// function mul() {
//   let sum = 1;
//   for (let i = 1; i <= n; i++) sum *= i
//   return sum
// }

// 2）递归 Recursion：
// 一、找规律；二、找出口，否则无限死循环
// 递归只有一点好处：让代码变得更加简洁
// n! = n * (n - 1)!
// function mul(n) {
//   if (n === 1 || n === 0) return 1
//   return n * mul(n - 1)
// }

// console.log(mul(n));

// 2.斐波那契数列 Fibonacci sequence：
function fb(n) {
  if (n <= 0) return "n should greater than 0."
  if (n == 1 || n == 2) return 1
  return fb(n - 1) + fb(n - 2)
}

// console.log(fb(3))
// console.log(fb(10))