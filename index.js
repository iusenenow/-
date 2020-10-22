// Factory Function
// function createCircle(radius) {
//   return {
//     radius,
//     draw() {
//       console.log('draw')
//     }
//   }
// }

// const circleOne = createCircle(5.6)

// circleOne.draw()
// console.log(circleOne.radius)

// function Circle(radius) {
//   this.radius = radius
//   this.draw = function () {
//     console.log('draw')
//   }
// }

// const circleTwo = new Circle(3)

// console.log(circleTwo.radius)

// circleTwo.draw()

// Enumerating Properties of an Object
// for (let key in circleTwo) {
//   console.log(key, circleTwo[key])
// }

// Every Object has a constructor property, that references the function that was used to create the Object

// for (let key of Object.keys(circleTwo)) {
//   console.log(key)
// }

// for (let entry of Object.entries(circleTwo)) {
//   console.log(entry)
// }

// Cloning an object
// const another = Object.assign({
//   color: 'yellow'
// }, circleTwo)

// const another = { ...circleTwo, color: 'yellow' }
// console.log(another)

// const callback = n => {
//   return n ** 2 // Exponentiation
// }

// console.log(callback(3))

// function cube(callback, n) {
//   return callback(n) * n
// }

// console.log(cube(callback, 2))

// const numbers = [1, 2, 3, 4]

// const sumArray = arr => {
//   let sum = 0
//   const callback = function (element) {
//     sum += element
//   }
//   arr.forEach(callback)
//   return sum
// }

// console.log(sumArray([1, 2, 3, 4, 5]))

// function sayHello() {
//   console.log('Hello')
// }

// const interval = setInterval(sayHello, 1000)

// setTimeout(() => clearInterval(interval), 5000)

// const languages = [
//   'English',
//   'Finnish',
//   'English',
//   'French',
//   'Spanish',
//   'English',
//   'French',
// ]

// const setOfLanguages = new Set(languages)

// // console.log(setOfLanguages)

// // for (let language of setOfLanguages) {
// //   console.log(language)
// // }

// // setOfLanguages.forEach(language => console.log(language))

// const companies = new Set()
// console.log(companies.size) // 0
// companies.add('Google')
// companies.add('Amazon')
// companies.add('Oracle')
// companies.add('Microsoft')
// companies.add('Facebook')
// console.log(companies.size) // 5
// console.log(companies)

// console.log(companies.delete('Google')) // true
// console.log(companies.size) // 4

// console.log(companies.has('Apple')) // false
// console.log(companies.has('facebook')) // false
// console.log(companies.has('Facebook')) // true

// companies.clear()
// console.log(companies) // {}

// const numbers = [5, 3, 2, 5, 5, 9, 4, 5, 7, 9, 2, 3]
// const setOfNumbers = new Set(numbers)

// console.log(setOfNumbers)

// Union of sets
// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]
// let c = [...a, ...b]

// let A = new Set(a)
// let B = new Set(b)
// let C = new Set(c)

// console.log(C)

// Intersection of sets
// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]

// let A = new Set(a)
// let B = new Set(b)

// let c = a.filter(num => B.has(num))
// console.log(c)
// let C = new Set(c)
// console.log(C)

// Difference of sets
// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]

// let A = new Set(a)
// let B = new Set(b)

// let c = a.filter(num => !B.has(num))
// console.log(c)
// let d = b.filter(num => !A.has(num))
// console.log(d)

// Destructuring Array
// const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

// for (const [country, city] of countries) {
//   console.log(country, city)
// }

// Destructuring Object
// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200
// }

// let { width: w, height: h, area: a, perimeter = 60 } = rectangle
// console.log(w, h, a, perimeter)

// Console
// console.log()
// console.clear()
// console.log("%s is %d years old.", "John", 32) //s stands for string. d stands for digit

// console.log('Console Log')
// console.info('Console Info')
// console.debug('Console Debug')
// console.warn('Console Warn')
// console.error('Console Error')

// console.dir({ user: 'John Smith', age: 36 })
// console.log({ user: 'John Smith', age: 36 })

// let isWorking = false
// console.assert(isWorking, "this is the reason why") // Only show message when the first argument is false

// console.countReset()

// for (let i = 0; i < 10; i++) {
//   console.count()
// }

// console.time()
// setTimeout(() => {
//   console.timeEnd()
// }, 5000)

// console.timeLog()

// async function getUsers() {
//   let response = await fetch('https://jsonplaceholder.typicode.com/users')
//   let data = await response.json()
//   console.table(data, ['name', 'username', 'email'])
// }

// getUsers()

// Error Handling

// let json = '{ "age": 30 }'

// try {
//   let user = JSON.parse(json)

//   if (!user.name) {
//     throw new SyntaxError("Incomplete data")
//   }

// } catch (error) {
//   console.log("JSON Error: " + error.stack)
//   console.log("JSON Error: " + error.name)
//   console.log("JSON Error: " + error.message)
//   console.log("JSON Error: " + error)
// }

// const throwErrorExample = () => {
//   let x = prompt('Enter a number: ')
//   try {
//     if (x === '') throw 'empty'
//     if (isNaN(x)) throw 'not a number'
//     x = Number(x)
//     if (x <= 5) throw 'too low'
//     if (x > 10) throw 'too high'
//   } catch (error) {
//     console.log(error)
//   }
// }

// throwErrorExample()

// Classes Getter & Setter
// class Square {
//   constructor(width) {
//     this.width = width
//     this.height = width
//   }
//   get area() {
//     return this.width * this.height
//   }
//   set area(area) {
//     this.width = Math.sqrt(area)
//     this.height = this.width
//   }
// }

// const square1 = new Square(4)
// console.log(square1.area)
// square1.area = 25
// console.log(square1.area)

// window.localStorage.setItem('firstName', 'Wei')

// const firstName = window.localStorage.getItem('firstName')
// console.log(firstName)

// const skills = ['Html', 'css', 'JavaScript', 'python', 'React']

// window.localStorage.setItem('skills', JSON.stringify(skills))

// let getSkills = window.localStorage.getItem('skills')

// window.addEventListener('storage', e => {
//   if (e.key !== 'now') return
//   alert(e.key)
// })
// localStorage.setItem('now', Date.now())
// localStorage.clear()

// console.log(document.cookie)

// console.log(document.cookie.split(';'))

// prototype
// 1.
// let animal = {
//   eats: true,
//   walk() { console.log('Animal walk') }
// }

// let rabbit = {
//   jumps: true,
//   __proto__: animal
// }

// let longEar = {
//   earlength: 10,
//   __proto__: rabbit
// }

// longEar.walk()

// 2.
// let user = {
//   name: "John",
//   surname: "Smith",

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   }
// };

// let admin = {
//   __proto__: user,
//   isAdmin: true
// };

// console.log(admin.fullName)

// admin.fullName = "Alice Cooper"

// console.log(admin.fullName)
// console.log(user.fullName)

// 3
// let animal = {
//   walk() {
//     if (!this.isSleeping) {
//       alert(`I walk`);
//     }
//   },
//   sleep() {
//     this.isSleeping = true;
//   }
// };

// let rabbit = {
//   name: "White Rabbit",
//   __proto__: animal
// };

// // modifies rabbit.isSleeping
// rabbit.sleep();
// animal.sleep()

// console.log(rabbit.isSleeping)
// console.log(animal.isSleeping)
// animal.walk()

// 4
// let animal = {
//   eats: true
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal
// };

// for (let prop in rabbit) {
//   let isOwn = rabbit.hasOwnProperty(prop)
//   isOwn ? console.log(`Our: ${prop}`) : console.log(`Inherited: ${prop}`)
// }

// 5.bind call apply
// let obj1 = { a: 'a1' }
// let obj2 = { a: 'a2' }

// let Fex = function (a, b) {
//   console.log(this)
//   console.log(a, b)
// }

// Fex.call(obj1, 1, 2)
// Fex.apply(obj2, [1, 2])
// let f = Fex.bind(obj1)
// f(1, 2)

// 6.Implicit binding
// let obj = {
//   a: 1,
//   f() {
//     console.log(this)
//   },
//   g() {
//     console.log(this)
//   }
// }

// obj.f() // this refer to obj
// obj.g() // this refer to obj

// let f3 = obj.f
// f3() // direct reference to function f. - Window

// function addOne() {
//   this.count++
// }

// window.count = 8
// addOne.count = 0
// addOne()
// addOne()
// addOne()

// console.log(addOne.count)
// console.log(window.count)

// function f4() {
//   console.log(this.a)
// }
// let obj1 = {
//   a: 1,
//   f4: f4
// }
// let obj2 = {
//   a: 2,
//   obj1
// }
// let obj3 = {
//   a: 3,
//   f4: obj1.f4
// }

// obj1.f4() // value is 1
// obj2.obj1.f4() // value is 1
// obj3.f4() // value is 3

// 7.arrow function
// obj1 = { a: 1 }

// let f5 = () => {
//   console.log(this)
// }

// f5() // window
// f5.call(obj1) // window

// function f6() {
//   // f6.call(obj1) means the context HERE is obj1
//   return () => {
//     console.log(this.a)
//   }
// }

// let x = f6.call(obj1)
// x()

// Arrow functions cannot be used as constructors

// lexical scoping
// var value = 1

// function foo() {
//   console.log(value)
// }

// function bar() {
//   var value = 2
//   foo()
// }

// bar()

// var scope = "global scope";
// function checkscope() {
//   var scope = "local scope";
//   function f() {
//     return scope;
//   }
//   return f();
// }

// console.log(checkscope())

// Lexical Environments
/* 1. {this} block-scope
   2. Global Scope
   3. Function Scope: function f() { this; }

Execution Context
1. Lexical Environment {scope}
2. Variable Environment
3. this binding
*/

// this.a = "Global Scope"

// var obj = {
//   a: 1,
//   b: function () { console.log(this.a); }
// }

// obj.b()
// var m = obj.b
// m()

// var f = "grapes"

// function food() {
//   console.log(f);

//   var f = "sushi"

//   console.log(f);

// }

// food() // undefined, suhi

// function bigBrother() {
//   function littleBrother() {
//     return 'it is me!';
//   }
//   return littleBrother();
//   function littleBrother() {
//     return 'no me!';
//   }
// }

// console.log(bigBrother()) // no me!

// var heyhey = function doodle() {
//   return 'heyhey'
// }

// console.log(heyhey())
// // console.log(doodle()) // not defined

// function x() {
//   height = 100
//   return height
// }

// console.log(x());

// shallow cloning
// let obj = { a: 'a', b: 'b', c: { deep: 'try and copy me' } }
// let clone = Object.assign({}, obj)
// let clone2 = { ...obj }
// let superclone = JSON.parse(JSON.stringify(obj))

// obj.b = 'big ben'
// obj.c.deep = 'omg, help me'
// console.log(obj);
// console.log(clone) // shallow copy
// console.log(clone2) // shallow copy
// console.log(superclone); // deep clone

// conversion & coercion: 
// coercion: when the type is converted by JavaScript
// conversion: when coder sets the data type
// let myStr = "100"
// let myNum = 100
// myStr = myStr + myNum
// coercion
// myStr = Number(myStr)
// console.log(myStr);
// console.log(typeof (myStr));
// console.log(typeof (myNum));

// HOF
// const multiplyBy = function (num1) {
//   return function (num2) {
//     return num1 * num2
//   }
// }
// const multiplyBy = num1 => num2 => num1 * num2

// console.log(multiplyBy(7)(9))

// const multiplyByTwo = multiplyBy(2)
// const multiplyBySeven = multiplyBy(7)

// console.log(multiplyByTwo(4))
// console.log(multiplyByTwo(9))
// console.log(multiplyBySeven(4))

// Closure:
// 1.Memory Efficient
// function heavyDuty() {
//   const bigArray = new Array(700).fill('Hello')
//   return function (index) {
//     return bigArray[index]
//   }
// }

// const getHeavyDuty = heavyDuty()
// console.log(getHeavyDuty(500))

// 2.Encapsulation
// let view
// function initialize() {
//   let called = 0
//   return function () {
//     if (called > 0) {
//       return
//     } else {
//       view = 'Mountain'
//       called++
//       console.log('View has been set!');
//     }
//   }
// }

// const startOne = initialize()
// startOne()
// console.log(view);

// 九九乘法表: row循环负责换行，column循环负责输出 *
// for (var row = 1; row < 10; row++) {
//   for (var column = 1; column <= row; column++) {
//     document.write("😞")
//   }
//   document.write("<br />")
// }

// document.write("<table>")
// for (var row = 1; row < 10; row++) {
//   document.write("<tr>")
//   for (var column = 1; column <= row; column++) {
//     document.write("<td>" + column + " x " + row + " = " + column * row + "</td>")
//   }
//   document.write("</tr>")
// }
// document.write("</table>")

// document.write("<table>")
// for (var row = 1; row < 10; row++) {
//   document.write("<tr>")
//   for (var blank = 9 - row; blank > 0; blank--) {
//     document.write("<td></td>")
//   }
//   for (var column = row; column > 0; column--) {
//     document.write("<td>" + row + " x " + column + " = " + column * row + "</td>")
//   }
//   document.write("</tr>")
// }
// document.write("</table>")

// 加法运算
// 1.数值+数值
// 88 + NaN = NaN
// Infinity + -Infinity = NaN
// Infinity + Infinity = Infinity
// -Infinity + -Infinity = -Infinity

// 2.数值+数值
// +0 + +0 = +0
// -0 + -0 = -0
// +0 + -0 = +0

// 3.字符串+字符串
// "Hello " + "World" = "Hello World"

// 4.String + Number
// 只要有一个String，结果就是String
// "10" + 10.10 = "1010.1"
// "1" + 2 + 3 + 4 = "1234"
// 1 + 2 + 3 + "4" = "64"
// 1 + (2 + "3") + 4 