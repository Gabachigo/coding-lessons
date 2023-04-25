const input = document.querySelector('input')
const button = document.querySelector('button')

function print() {
  console.log('click')
}

input.onkeydown = function(event) {
  console.log(event.currentTarget.value)
}

button.addEventListener('click', print)

button.onclick = function() {
  window.open('https://www.google.com')
}

// input.onkeydown = function(event) {
//   if ( event.keyCode == 87 ) {
//     console.log("moving")
//   }
// }