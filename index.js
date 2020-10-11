// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('draw')
    }
  }
}

const circleOne = createCircle(5.6)

// circleOne.draw()
// console.log(circleOne.radius)

function Circle(radius) {
  this.radius = radius
  this.draw = function () {
    console.log('draw')
  }
}

const circleTwo = new Circle(3)

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
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter(num => !B.has(num))
console.log(c)
let d = b.filter(num => !A.has(num))
console.log(d)