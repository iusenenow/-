// 一、函数定义
// 1.函数声明 Function Statement/Declaration
// function bar() { return 3 } // function is only declared here.
// bar() // funcion invoked

// // 2.函数表达式 Function Expression
// // 1)匿名函数表达式
// let x = function (a, b) { return a * b }
// // After a function expression has been stored in a variable, the variable can be used as a function. Functions stored in variables do not need function names. They are always invoked (called) using the variable name:
// x() // function invoked

// // 2)命名函数表达式：忽略函数名: abc无作用
// var test = function abc() {
//   console.log("a");
// }
// test.name // abc

// // 3.Function Expression VS Function Statement
// // Function Expression
// console.log(foo()) // ERROR! foo wasn't loaded yet
// var foo = function () { return 5 }

// // Function Declaration
// console.log(foo()); // Alerts 5. Declarations are loaded before any code can run.
// function foo() { return 5 }

// Function declarations load before any code is executed while Function expressions load only when the interpreter reaches that line of code.
// Similar to the var statement, function declarations are hoisted to the top of other code. Function expressions aren’t hoisted, which allows them to retain a copy of the local variables from the scope where they were defined.

// 4.Benefits of Function Expressions
// There are several different ways that function expressions become more useful than function declarations.
// 1)As closures
// 2)As arguments to other functions
// 3)As Immediately Invoked Function Expressions (IIFE)

// 二、arguments //是一个类数组，实参列表。arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

// arguments.length //The number of arguments that were passed to the function.

// 求实参长度：arguments.lenght
function sum(a, b) {
  console.log(arguments.length) // 3
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
sum(11, 2, 9)

// 求形参长度：函数名.length
console.log(sum.length); // 4