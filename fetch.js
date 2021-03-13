//let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

// if (response.ok) {
//   let json = await response.json()
// } else {
//   alert("HTTP-Error" + response.status)
// }

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))