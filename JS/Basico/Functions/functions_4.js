//function scope
let subject

function createThought() {
  subject = 'study'
  return subject
}

console.log(subject) // antes da atualizacao
console.log(createThought()) // atualizando
console.log(subject) // atualizado