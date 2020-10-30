/* 什么是DOM
1. DOM -> Document Object Model
2. DOM定义了表示和修改文档所需的方法。DOM对象即为诉诸对象，由浏览器厂商定义，用来操作html和xml功能的一类对象的集合。也有人称DOM是对HTML以及XML的标准编程接口
*/
// dom对象
// const div = document.getElementsByTagName('div')[0]
// div.style.width = "100px"
// div.style.height = "100px"
// div.style.backgroundColor = "red"

// let count = 0

// div.onclick = function () {
//   count++
//   count % 2 === 1 ? this.style.backgroundColor = 'green' : this.style.backgroundColor = 'red'
// }

// 变加速运动的小方块
// const div = document.createElement('div')

// document.body.appendChild(div)
// div.style.width = "100px"
// div.style.height = "100px"
// div.style.backgroundColor = "coral"
// div.style.position = "absolute"
// div.style.left = "0"
// div.style.top = "0"

// let speed = 1

// let timer = setInterval(function () {

//   speed += speed / 10
//   div.style.left = parseInt(div.style.left) + speed + "px"
//   div.style.top = parseInt(div.style.top) + speed + "px"

//   if (parseInt(div.style.top) > 800 && parseInt(div.style.left) > 800) {
//     clearInterval(timer)
//   }
// }, 50)

/* DOM基本操作
document代表整个文档
.getElementById()
.getElementsByTagName()
.getElementsByClassName()
.querySelector()
.querySelectorAll()
*/

// const div = document.querySelectorAll('div') // Nodelist can use forEach method
// div.forEach(element => {
//   console.log(element)
// });

// const div2 = document.getElementsByTagName('div') // HTMLCollection can not use forEach method
// Array.from(div2).forEach(element => {
//   console.log(element)
// });

// const a = document.getElementsByTagName('a')[0]

// a.href = "https://www.google.com"
// a.textContent = "Google"

// Access Elements in the DOM
// const demoId = document.getElementById("demo")
// demoId.style.border = "7px solid coral"

// const demoClass = document.getElementsByClassName("demo")

// console.log(demoClass) // HTMLCollection

// // for (i = 0; i < demoClass.length; i++) {
// //   demoClass[i].style.border = "7px solid coral"
// // }

// Array.from(demoClass).forEach(elem => { elem.style.border = "7px solid lightblue" })

// const demoTag = document.getElementsByTagName("article")

// console.log(demoTag); // HTMLCollection

// for (i = 0; i < demoTag.length; i++) {
//   demoTag[i].style.border = "7px solid lightgreen"
// }

// Array.from(demoTag).forEach(demo => demo.style.border = "7px solid lightgreen")

// const demoQuery = document.querySelector("#demo-query")

// demoQuery.style.border = "7px solid crimson"

// const demoQueryAll = document.querySelectorAll(".demo-query-all")

// console.log(demoQueryAll); // NodeList

// demoQueryAll.forEach(demo => demo.style.border = "7px solid pink")

// for (let element of demoQueryAll) {
//   element.style.border = "7px solid red"
// }

// Traverse the DOM:
/*
  Property	                Node	     Node-Type
  document	               #document	DOCUMENT_NODE
  document.documentElement	html	    ELEMENT_NODE
  document.head	            head	    ELEMENT_NODE
  document.body	            body	    ELEMENT_NODE

  Parent-Nodes:
  Property	       Gets
  parentNode	     Parent Node
  parentElement	   Parent Element Node

  Children-Nodes:
  Property	          Gets
  childNodes	        Child Nodes
  firstChild	        First Child Node
  lastChild	          Last Child Node
  children	          Element Child Nodes
  firstElementChild	  First Child Element Node
  lastElementChild  	Last Child Element Node

  Sibling-Nodes
  Property	                Gets
  previousSibling	          Previous Sibling Node
  nextSibling	              Next Sibling Node
  previousElementSibling	  Previous Sibling Element Node
  nextElementSibling	      Next Sibling Element Node
*/

/*
Creating New Nodes
Property/Method	    Description
createElement()	    Create a new element node
createTextNode()	  Create a new text node
node.textContent	  Get or set the text content of an element node
node.innerHTML	    Get or set the HTML content of an element
*/

// const paragraph = document.createElement("p")

// paragraph.textContent = "I'm a brand new paragraph."

// Alternate method: innerHTML
// While this will work and is a common method of adding content to an element, there is a possible cross-site scripting (XSS) risk associated with using the innerHTML method, as inline JavaScript can be added to an element. Therefore, it is recommended to use textContent instead, which will strip out HTML tags.

// console.log(paragraph);

// const text = document.createTextNode("I'm a new text node.")

// console.log(text);

// Inserting Nodes into the DOM
/*
Property/Method	        Description
node.appendChild()	    Add a node as the last child of a parent element
node.insertBefore(newNode, nextSibling)	    Insert a node into the parent element before specified sibling node
node.replaceChild(newNode, oldNode)	    Replace an existing node with a new node
*/

/*
Removing Nodes from the DOM
Method	              Description
node.removeChild()	  Remove child node
node.remove()	        Remove node
*/

const link = document.querySelector('a')
const message = document.querySelector('.error')

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk')
link.setAttribute('style', 'text-decoration:none;color:#fff;background-color:coral;font-size:2rem')
link.innerText = 'The Net Ninja Website'

console.log(message.getAttribute('class'))

message.setAttribute('class', 'success')
message.setAttribute('style', 'font-size:1rem;text-align:center')
