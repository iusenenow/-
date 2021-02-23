// Timeouts & Intervals
function greet(name, age) {
  console.log(`Hello, my name is ${name}, and I am ${age} years old.`)
}

const timeout = setTimeout(greet, 2000, 'Vishwas', 39)

clearTimeout(timeout)

function greet2(name) {
  console.log(`Hello, ${name}`)
}

const interval = setInterval(greet2, 2000, 'Vishwas')

clearInterval(interval)

// throttle function

function throttle(fn, time) {
  let throttled
  return function () {
    if (!throttled) {
      fn.apply(this, arguments)
      throttled = true
      setTimeout(() => {
        throttled = false
      }, time)
    }
  }
}

const logger = args => console.log('Log data', args)

const throttleLogger = throttle(logger, 2000)

throttleLogger(1)
throttleLogger(2)
throttleLogger(3)
throttleLogger(4)
throttleLogger(5)
throttleLogger(6)
throttleLogger(7)
throttleLogger(8)

// debounce function
function debounce(fn, wait) {
  let timer
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, wait)
  }
}

const debouncedLogger = debounce(logger, 2000)

debouncedLogger(1)
debouncedLogger(2)
debouncedLogger(3)
debouncedLogger(4)
debouncedLogger(5)
debouncedLogger(6)
debouncedLogger(7)
debouncedLogger(8)


// Promise and fetch
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('Resolving an asynchronous request. 哈哈哈哈哈哈哈哈哈哈'), 1000)
// })

// promise.then(response => response + '嚯嚯嚯嚯嚯').then(secondResponse => console.log(secondResponse))

// function getUsers(onSuccess) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (onSuccess) {
//         resolve([
//           { id: 1, name: 'Jerry' },
//           { id: 2, name: 'Elaine' },
//           { id: 3, name: 'George' }
//         ])
//       } else {
//         reject('Failed to fetch data. 笨蛋')
//       }
//     }, 1000)
//   })
// }

// getUsers(true).then(response => console.log(response)).catch(error => console.log(error)).finally(console.log('This runs anyway.'))

// fetch('https://api.github.com/users/iusenenow')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error))

// Async & Await
// const getUser = async () => {
//   try {
//     const response = await fetch('https://api.github.com/users/iusenenow')
//     const data = await response.json()
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getUser()

// Real example:
// Get search data from web page form
const getFormData = () => {
  return {
    firstName: "Bruce",
    lastName: "Lee",
    categories: ["nerdy"]
  }
}

// Get search URL
const getRequestURL = (requestData) => {
  return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`
}

// Get joke
const getJoke = async (url) => {
  const response = await fetch(url)
  const data = await response.json()
  const joke = data.value.joke
  postJokeToPage(joke)
}

// Display joke
const postJokeToPage = (joke) => {
  console.log(joke);
}

// Procedual "workflow" function
const processJokeRequest = async () => {
  const requestData = getFormData()
  const requestURL = getRequestURL(requestData)
  await getJoke(requestURL)
  console.log("finished!");
}