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
function inherit(Target, Origin) {
  function middleFunction() { } // 中间函数
  middleFunction.prototype = Origin.prototype
  Target.prototype = new middleFunction()
  Target.prototype.constructor = Target
  Target.prototype.uber = Origin.prototype
}

Father.prototype.lastName = "Zhang"
function Father() { }
function Son() { }

inherit(Son, Father)
const son = new Son()
const father = new Father()

Son.prototype.firstName = "Wei" // Father不继承Son的prototype
console.log(son.firstName, father.firstName); // Wei undefined

// Shallow Cloning
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

class Character {
  constructor(name, weapon) {
    this.name = name
    this.weapon = weapon
  }
  attack() {
    console.log(this.name + ' Attacks with ' + this.weapon + '.')
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon)
    this.type = type
  }
}

const dolby = new Elf('Dolby', 'cloth', 'house')

dolby.attack()