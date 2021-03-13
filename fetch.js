//let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

// if (response.ok) {
//   let json = await response.json()
// } else {
//   alert("HTTP-Error" + response.status)
// }

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => console.log(response.headers.get('Content-Type')))
//  .then(data => console.log(data))