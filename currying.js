function sum(a, b, c) {
  return a + b + c
}

// check if number of arguments passed in is greater than the number of arguments the original function has.

// solution 1:
function genericCurryOne(f) {
  return function currify(...args) {
    if (args.length >= f.length) {
      return f.apply(this, args)
    } else {
      return function (...newArgs) {
        return currify.apply(this, args.concat(newArgs))
      }
    }
  }
}

// solution 2:
function genericCurryTwo(f) {
  return function currify(...args) {
    return args.length >= f.length
      ? f.apply(this, args)
      : currify.bind(this, ...args)
  }
}

curriedSum = genericCurryTwo(sum)
console.log(curriedSum(2)(3)(5))
console.log(curriedSum(2, 3)(5))
console.log(curriedSum(2)(3, 5))
console.log(curriedSum(2, 3, 5))