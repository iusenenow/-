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
console.log(obj3)
obj3.prop3()
// 4.factory function with closures
// 5.JS Class