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

processJokeRequest()