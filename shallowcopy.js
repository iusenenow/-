// Shallow Cloning 浅拷贝
let obj = {
  name: 'abc',
  age: 123,
  sex: 'female',
  card: ['visa', 'master']
}

function shallowCloneObj(origin, target = {}) {
  for (let key in origin) {
    target[key] = origin[key]
  }
  return target
}

const objShallowClone = shallowCloneObj(obj)

// obj.sex = "male"
// console.log(obj, objShallowClone); // 浅拷贝之原始值拷贝，各自是各自

// obj.card.push('Amax')
// console.log(obj, objShallowClone); // 引用值（数组，对象）拷贝，一改都改

// deep clone 深拷贝
// var obj = {
//   name: "Mike",
//   age: 38,
//   card: ['visa', 'master'],
//   familyTree: {
//     name: 'Nicole',
//     age: 35,
//     son: {
//       name: 'Kale',
//       age: 12
//     }
//   }
// }

// 遍历对象 for(var prop in obj)
// 1.判断是不是原始值 typeof() object
// 2.判断是数组还是对象 instanceof toString constructor
// 3.建立相应的数组或对象

// function deepClone(origin, target = {}) {
//   var toStr = Object.prototype.toString
//   var arrStr = "object Array"

//   for (let key in origin) {
//     if (origin.hasOwnProperty(key)) {
//       if (origin[key] !== "null" && typeof (origin[key]) === 'object') {
//         target[key] = toStr.call(origin[key]) === arrStr ? [] : {}
//         deepClone(origin[key], target[key])
//       } else {
//         target[key] = origin[key]
//       }
//     }
//   }
//   return target
// }

//另一个clone例子
// let obj = {
//   a: 'a',
//   b: 'b',
//   c: {
//     deep: 'try and copy me'
//   }
// }
// let clone = Object.assign({}, obj)
// let clone2 = { ...obj }
// let superclone = JSON.parse(JSON.stringify(obj))

// obj.b = 'big ben'
// obj.c.deep = 'omg, help me'

// console.log(obj);
// console.log(clone) // shallow copy
// console.log(clone2) // shallow copy
// console.log(superclone); // deep clone