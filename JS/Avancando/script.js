/**
Declaracao de variaveis
*/

// Declaracao/declaration
var personName

// assignment/atribuicao de valores
personName = "Davi"

// que tip de dado foi colocado na variavel
console.log(typeof personName)

/** 
Agrupamento de declaracoes
*/

let personAge, isHuman

personAge = 18
isHuman = true

console.log(personName, personAge, isHuman)

// multiplos argumentos na funcao
// separado por uma ','
// concatenando variaveis
console.log('O', personName, 'tem', personAge, 'anos')

// interpolando com template literals/string
console.log(`O ${personName} tem ${personAge} anos`)

/**
Object
*/

const person = {
  workerName: "John",
  workerAge: 30,
  weight: 88.6,
  isAdmin: true
}

// 'person.****' pega so a propiedade
console.log(`${person.workerName} tem ${person.workerAge} anos`)

/**
Array
*/

const animals = [
  'Lion',
  'Monke',
  'Dylan',
  'Gorilla',
  'Matthew',
  {
    name: 'Dog',
    age: 2
  }
]

// acessar valores dentro do array
console.log(animals[2])
console.log(`My zoo has ${animals.length} animals`)
console.log(animals[5].name)
console.log(animals)