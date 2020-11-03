//（百度）The values of x,y,z
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

//（阿里巴巴）console.log的结果是[1,2,3,4,5]的选项是：A&D
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