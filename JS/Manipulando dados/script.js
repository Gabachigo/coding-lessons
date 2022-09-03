/**

Type conversion (typecasting) vs Type coersion
  * Alteracao de um tipo de dado para outro tipo

*/

console.log(Number('9') + 5)

console.log("--------------------------------------------------------")

// Manipulando strings e Números

console.log(Number("99"))// Transformar string em número
console.log(String(66))// Transformar número em string

console.log("--------------------------------------------------------")


let number = 1234
console.log(String(number).length)

number = 23144534151325.876543214253647
console.log(number.toFixed(2).replace(".", ","))

console.log("--------------------------------------------------------")

let word = "Paralelepipedo"
console.log("word got ", word.length, " characters")
console.log(word.toUpperCase()) // capitalise
console.log(word.toLowerCase()) // decapitalise

let phrase = "Eu vou matar sua familia"
let myArray = phrase.split(" ")
let phraseUnder = myArray.join("_")
console.log(myArray)
console.log(phraseUnder.toLowerCase())

let sentence = "i love egg"
console.log(sentence.includes("egg"))

console.log("--------------------------------------------------------")

// array com construtor
let array = new Array('a', 'b', 'c')
console.log(array)

// contar elementos de um array
console.log([
  "a",
  "b",
  'c'
][2])

console.log([
  "a",
  "b",
  'c'
].length)

// Transformar uma cadeia de caracteres em elementos de um array
let palavra = "manipulacao"
console.log(Array.from(palavra))

console.log("--------------------------------------------------------")

let techs = ["html", "css", "js"]
techs.push("nodejs") // adicionar item no fim do array
techs.unshift("sql") // adicionar item no comeco do array
// techs.pop() // remover elemento do fim
// techs.shift() // remover do comeco
// console.log(techs.slice(0,2)) // pegar somente alguns elementos do array
// techs.splice(1, 1) // remover 1 ou mais items em qualquer posicao do array

// encontrar a posicao de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 2)


console.log(techs)
