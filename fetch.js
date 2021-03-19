const rootUrl = 'http://jsonplaceholder.typicode.com'
let id = Math.floor(Math.random() * 20) + 1
let url = `${rootUrl}/users/${id}`

console.log(url)


let headers = new Headers()
headers.append('Accept', 'application/json')
let req = new Request(url, {
  method: 'GET',
  headers: headers,
  mode: 'cors'
})

fetch(req)
  .then(response => {
    console.log(response);
    //body: (...)
    //bodyUsed: true/false
    //headers: Headers {}
    //ok: true/false
    //redirected: false
    //status: 200/404/500
    //statusText: "OK" "Not Found"
    //type: "cors"
    //url: "http://jsonplaceholder.typicode.com/users/1
    console.log(response.headers.get('Content-Type'))
    //append() delete() get() has() values() keys() entries() set()
    for (let [key, value] of response.headers) {
      // console.log(`${key} = ${value}`)
    }
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

// 2. Fetch with Request and Headers Objects
// new Request(url, options)
// options - method, headers, body, mode
// methods: GET, POST, PUT, DELETE, OPTIONS

// new Headers()
// headers.append(name, value)
// Content-Type, Content-Length, Accept, Accept-Language, X-Requested-With, User-Agent