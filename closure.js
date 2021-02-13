// Memorization: Memorization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

//Implement a function called memorizedSquare which will calculate the square of a number for the first time and for the subsequent times, will return from cache the already computed result.
function square(num) {
  return num * num
}

function memorizedSquare() { //Create a function called memorizedSquare
  let cache = {} // Create a variable in scope of this function that can store data between executions. Return a function from memorizedSquare
  return function optimizedSquare(num) { // Function being returned should compute the square if its for the first time and should return the already computed result if its already present.
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

//Generic implementation
function memorize(callback) {
  let cache = {}
  return function () {
    const arr = Array.from(arguments)
    const key = arr.toString()
    console.log(key);
    if (key in cache) {
      console.log("Returning from cache.");
      return cache[key]
    } else {
      console.log("Computing square.");
      const result = callback(...arr)
      cache[key] = result
      console.log(cache);
      return result
    }
  }
  
}

const memoSquare = memorizedSquare()
// console.log(memoSquare(2));
// console.log(memoSquare(5));
// console.log(memoSquare(5));
// console.log(memoSquare(2));
// console.log(memoSquare(100));



const memorizeAdd = memorize((a, b) => a + b)

console.log(memorizeAdd(2, 4));
console.log(memorizeAdd(2, 4));