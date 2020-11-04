// 1.函数预编译过程this -> window
// 2.全局作用域里this -> window
// 3.call/apply 可以改变函数运行时this指向
// 4.obj.func();func()里面的this指向obj

// function test(c) {
//   var a = 123
//   function b() {

//   }
// }
// test(1)
// 预编译：
// AO {
//   arguments: [1],
//   this: window,
//   c: 1,
//   a: undefined,
//   b: function(){}
// }

// Arguments
// 1.arguments.callee 函数自身引用
// function test1() {
//   console.log(arguments.callee);
// }

// var num = (function (n) {
//   if (n == 1) { return 1 }
//   return n * arguments.callee(n - 1)
// })(10)

// console.log(num);

// // 2.func.caller
// function test2() {
//   demo()
// }

// function demo() {
//   console.log(demo.caller)
// }

// test2()