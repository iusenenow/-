// Type        	Result
// Undefined   	"undefined"
// Null	        "object" (see below)
// Boolean     	"boolean"
// Number     	"number"
// BigInt (new in ECMAScript 2020)	"bigint"
// String	      "string"
// Symbol (new in ECMAScript 2015)	"symbol"
// Function object (implements    	"function"
// Any other object	                "object"

// Numbers
// typeof 37 === 'number'
// typeof 3.14 === 'number'
// typeof(42) === 'number'
// typeof Math.LN2 === 'number'
// typeof Infinity === 'number'
// typeof NaN === 'number' // Despite being "Not-A-Number"
// typeof Number('1') === 'number' // Number tries to parse things into numbers
// typeof Number('shoe') === 'number' // including values that cannot be type coerced to a number

// typeof 42n === 'bigint';

// Strings
// typeof '' === 'string'
// typeof 'bla' === 'string'
// typeof `template literal` === 'string'
// typeof '1' === 'string' // note that a number within a string is still typeof string
// typeof (typeof 1) === 'string' // typeof always returns a string
// typeof String(1) === 'string' // String converts anything into a string, safer than toString


// Booleans
// typeof true === 'boolean'
// typeof false === 'boolean'
// typeof Boolean(1) === 'boolean' // Boolean() will convert values based on if they're truthy or falsy
// typeof !!(1) === 'boolean'; // two calls of the ! (logical NOT) operator are equivalent to Boolean()


// Symbols
// typeof Symbol() === 'symbol'
// typeof Symbol('foo') === 'symbol'
// typeof Symbol.iterator === 'symbol'


// Undefined
// typeof undefined === 'undefined'
// typeof declaredButUndefinedVariable === 'undefined'
// typeof undeclaredVariable === 'undefined'


// Objects
// typeof {a: 1} === 'object';

// use Array.isArray or Object.prototype.toString.call to differentiate regular objects from arrays
// typeof [1, 2, 4] === 'object';

// typeof new Date() === 'object'
// typeof /regex/ === 'object'


// The following are confusing, dangerous, and wasteful. Avoid them.
// typeof new Boolean(true) === 'object';
// typeof new Number(1) === 'object';
// typeof new String('abc') === 'object';


// Functions
// typeof function() {} === 'function';
// typeof class C {} === 'function';
// typeof Math.sin === 'function';

// Null
// typeof null === 'object' // This stands since the beginning of JavaScript

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