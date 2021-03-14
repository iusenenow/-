const rootUrl = 'http://jsonplaceholder.typicode.com'
let id = Math.floor(Math.random() * 20) + 1
let url = `${rootUrl}/users/${id}`

console.log(url)

fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Invalid user ID')
    }
  })
  .then(data => {
    console.log(data)
    let jsonData = JSON.stringify(data)
    console.log(jsonData)
    let output = document.getElementById('output')
    output.textContent = jsonData
  })
  .catch(error => console.log('Error: ', error.message))