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
