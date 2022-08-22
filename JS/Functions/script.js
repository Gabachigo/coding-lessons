//function scope
let subject

function createThought() {
  subject = 'study'
  return subject
}

console.log(subject)
console.log(createThought())
console.log(subject)
