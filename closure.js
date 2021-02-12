// Memorization: Memorization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

function square(num) {
  return num * num
}

function memorizedSquare() {
  let cache = {}
  return function optimizedSquare(num) {
    if (num in cache) {
      console.log("Returning from cache.");
      return cache[num]
    } else {
      console.log("Computing square.");
      const result = square(num)
      cache[num] = result
      return result
    }
  }
}

const memoSquare = memorizedSquare()
console.log(memoSquare(2));
console.log(memoSquare(5));
console.log(memoSquare(5));
console.log(memoSquare(2));
console.log(memoSquare(100));