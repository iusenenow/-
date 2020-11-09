// 隐式转换
// 1.isNaN() -> Number()
// console.log(isNaN("NaN")); // true
// console.log(isNaN("abc")); // true
// isNaN('abc') 先用Number('abc')转换得：NaN

// 2.++/-- +/-(一元正负) -> Number()
// 3.+
// 4.-*/% -> Number()
// 5.&&||! 与或非
// 6.< > <= >=
// 7.== !=
// 8.=== !==

// console.log(b); // Uncaught ReferenceError: b is not defined
// console.log(typeof (b)); // undefined
// console.log(typeof (typeof (b))); // string
// typeof (NaN) // number
// typeof (null) // object

// var a = "123abc"
// typeof (+a) // number
// typeof (!!a) // boolean
// typeof (a + "") // string
// 1 == "1" // true
// NaN == NaN // false
// NaN == undefined // false
// "11" + 11 // 1111
// 1 === "1" // false
// parseInt("123abc") // 123 parseInt截断数字
// var num = 123123.3456789
// console.log(num.toFixed(3)) // 123123.346 四舍五入