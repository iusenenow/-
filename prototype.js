// Shallow Cloning
let obj = { a: 'a', b: 'b', c: { deep: 'try and copy me' } }
let clone = Object.assign({}, obj)
let clone2 = { ...obj }
let superclone = JSON.parse(JSON.stringify(obj))

obj.b = 'big ben'
obj.c.deep = 'omg, help me'

console.log(obj);
console.log(clone) // shallow copy
console.log(clone2) // shallow copy
console.log(superclone); // deep clone