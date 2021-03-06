// 原型：
// 1.定义：原型是function对象的一个属性，它定义了构造函数制造出的对象的共有祖先。通过该构造函数产生的对象，可以继承该原型的属性和方法。原型也是对象。
// 2.利用原型特点和概念，可以提取共有属性。
// 3.对象如何查看原型：隐式属性__proto__。
// 4.对象如何查看对象的构造函数：constructor。可手动更改

// Car.prototype 原型
// Car.prototype = {} 是祖先
function Car(color, owner) {
  this.owner = owner
  this.color = color
}
// Car.prototype.height = 1400
// Car.prototype.length = 4900
// Car.prototype.brand = "BMW"
// 因为原型是一个对象，所以可以写成：
Car.prototype = {
  height: 1400,
  length: 4900,
  brand: 'BMW'
}

let car1 = new Car('red', 'teresa')
let car2 = new Car('blue', 'wei')

// 原型链：
// 1.如何构成原型链？
// 2.原型链上的属性的增删改查。
// 3.绝大多数对象最终都会继承自Object.prototype。Object.create(null)
// 4.Object.create(原型)

// let obj = Object.create(null)
// obj.toString = function () {
//   return "哈哈哈哈哈哈哈"
// }
// document.write(obj) // document.write()调用toString方法后再打印至HTML

// Call, Bind & Apply 借用别人的函数实现自己的功能
// function Person(name, age, sex) {
//   this.name = name
//   this.age = age
//   this.sex = sex
// }

// let obj = {}
// call的第一个参数obj让Person的this发生改变，即：this.name => obj.name，this.age => obj.age
// call需要吧实参按照形参的个数传进去，apply需要传一个arguments
// Person.call(obj, 'zhang', '100')

// function Student([...args], tel, grade) {
//   console.log(this); // {}
//   Person.apply(this, [...args])
//   console.log(this); // {name: "Troy", age: 10, sex: "female"}
//   this.tel = tel
//   this.grade = grade
// }

// let person = new Person('deng', 100)
// let newStudent = new Student("Troy", 10, "female", 123, 2020)

// 继承发展史
// 1.传统形式：原型链
// 过多继承了没用的属性

// Grand.prototype.lastName = "Zhang"
// function Grand() { }
// const grand = new Grand()

// Father.prototype = grand
// function Father() {
//   this.firstName = 'Wei'
// }
// const father = new Father()

// Son.prototype = father
// function Son() { }
// const son = new Son()

// 2.借用构造函数：call(),apply(),bind()
// 不能继承借用构造函数的原型
// 每次构造函数都要多走一个函数

// 3.共享/共有原型
// 不能随便改动自己的原型
// Father.prototype.lastName = "Zhang"
// function Father() { }

// function Son() { }
// Son.prototype = Father.prototype
// const son = new Son()
// const father = new Father()

// 4.圣杯模式
// function inherit(Target, Origin) {
//   function middleFunction() { } // 中间函数
//   middleFunction.prototype = Origin.prototype
//   Target.prototype = new middleFunction()
//   Target.prototype.constructor = Target
//   Target.prototype.uber = Origin.prototype
// }

// 上面的function的高端写法：
// const inherit2 = (function () {
//   const middleFunction = function () { }
//   return function (Target, Origin) {
//     middleFunction.prototype = Origin.prototype
//     Target.prototype = new middleFunction()
//     Target.prototype.constructor = Target
//     Target.prototype.uber = Origin.prototype
//   }
// })()

// Father.prototype.lastName = "Zhang"
// function Father() { }
// function Son() { }

// inherit2(Father, Son)
// const son = new Son()
// const father = new Father()

//Son.prototype.firstName = "Wei" // Father不继承Son的prototype
//console.log(son.firstName, father.firstName); // Wei undefined

//方法的连续调用
// const deng = {
//   smoke() {
//     console.log("Smoking");
//     return this
//   },
//   drink() {
//     console.log("drinking");
//     return this
//   },
//   gamble() {
//     console.log("gambling");
//     return this
//   }
// }

//对象的枚举（遍历）
// 1.for in
// const obj = {
//   name: "Wei",
//   age: 36,
//   sex: "male",
//   height: 190,
//   weight: 60,
//   __proto__: {
//     lastName: "Zhang"
//   }
// }

// Object.prototype.abc = "123"

// for (let key in obj) {
//   console.log(key, obj[key]);
// }

// 2.obj.hasOwnProperty()
// for (let key in obj) {
//   if (obj.hasOwnProperty(key)) {
//     console.log(obj[key]);
//   }
// }

// 3.in
// console.log('height' in obj)
// console.log('lastName' in obj)

// 4.instanceof
// A instanceof B => A对象是不是B构造函数构造出来的，看A对象的原型链上有没有B的原型

// 区别Array和Object的方法
// 1.contructor
// 2.instanceof
// 3.tostring.call()
// Object.prototype.toString.call([]) //"[object Array]"
// Object.prototype.toString.call(123) //"[object Number]"
// Object.prototype.toString.call({}) //"[object Object]"


// leo.hasOwnProperty('name')

// for (let key in leo) {
//   if (leo.hasOwnProperty(key)) {
//     console.log(`Key: ${key} Value: ${leo[key]}`)
//   }
// }

// Prototypal inheritance
function Person(name) {
  this.name = name
}

Person.prototype.sayMyName = function () { console.log(`My name is ${this.name}`) }
Person.prototype.eat = function (food) { console.log(`I'm eating ${food}`) }
Person.prototype.sleep = function () { console.log("Sleeping") }

function Programmer(name, language) {
  Person.call(this, name)
  this.language = language
}

Programmer.prototype = Object.create(Person.prototype)

Programmer.prototype.code = function () { console.log(`I'm coding in ${this.language}`) }

Programmer.prototype.constructor = Programmer

const vishwas = new Programmer('vishwas', 'JavaScript')

