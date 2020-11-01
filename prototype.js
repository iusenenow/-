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
// 3.绝大多数对象最终都会继承自Object.prototype。
// 4.Object.create(原型)

// Shallow Cloning
let obj = { a: 'a', b: 'b', c: { deep: 'try and copy me' } }
let clone = Object.assign({}, obj)
let clone2 = { ...obj }
let superclone = JSON.parse(JSON.stringify(obj))

obj.b = 'big ben'
obj.c.deep = 'omg, help me'

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