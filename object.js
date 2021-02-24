// Different Ways of Creating Objects in JavaScript
// 1.Object literals
const obj1 = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: function () {
    console.log(this.prop1);
  }
}
// obj1.prop3()


// 2.Object.create() with descriptors
let proto = {
  prop3: function () { console.log(this.prop1) }
}

let obj2 = Object.create(proto, {
  prop1: {
    writable: true,
    enumerable: true,
    configurable: true,
    value: 'value1'
  },
  prop2: {
    writable: true,
    enumerable: false,
    configurable: true,
    value: 'value2'
  }
})

// console.log(obj2);
// console.log(obj2.prop3())

// 3.function + new
function Obj(v1, v2) {
  this.prop1 = v1
  this.prop2 = v2
  this.prop3 = function () {
    console.log(this.prop1);
  }
}

let obj3 = new Obj('value1', 'value2')
// console.log(obj3)
// obj3.prop3()

// 4.factory function with closures
let ObjFF = function (v1, v2) {
  let _prop1 = v1
  let _prop2 = v2
  return {
    prop1: _prop1,
    prop2: _prop2,
    prop3: function () {
      console.log(_prop1);
    }
  }
}

let obj4 = ObjFF('value1', 'value2')
// console.log(obj4);
// obj4.prop3()

// 5.JS Class
class ObjClass {
  constructor(v1, v2) {
    this.prop1 = v1
    this.prop2 = v2
  }
  prop3() { console.log(this.prop1) }
}
let obj6 = new ObjClass('value1', 'value2')
// console.log(obj6);
// obj6.prop3()

// There are many ways to create objects in javascript as below

// 1.Object constructor: The simplest way to create an empty object is using the Object constructor. Currently this approach is not recommended.
//const object = new Object()

// 2.Object's create method: The create method of Object creates a new object by passing the prototype object as a parameter.
//const object = Object.create(null)

// 3.Object literal:
// const object = {}

// 4.Function constructor
function Person(name) {
  var object = {};
  object.name = name;
  object.age = 21;
  return object;
}
var object = new Person("Sudheer");