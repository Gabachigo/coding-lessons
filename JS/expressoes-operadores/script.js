/* 
Expressoes e operadores

- Expressions
- Operators
  * Binary
  * Unary
  * Ternary

*/

// ponto e virgula nao é necesario todo
// exemplo de quando ponto e virgula é necesario(para nao quebrar o codigo)
let word = "hi"; // sem ponto e virgula, o js acha que o numero é uma funcao

(function() {
  console.log('hi')
})()


let number = 1

// binary
console.log(number + 1)

// unary
console.log(--number) // "-- subtrai o a variavel por ela mesmo"

// ternary
console.log(false ? "alo" : "nada") // 'true' mostra 'alo', 'false' mostra 'nada'

console.log("-----------------------------")

/* 
New

- left-hand-side expression
- criar um novo objeto
*/

let name = new String('Dav')
name.surName = "Eggers"
let pAge = new Number(21)
console.log(name.surName, pAge)

let date = new Date('2022-08-24')
console.log(date.__proto__)

console.log("-----------------------------")

/*
Operadores unários
- typeof
- delete
*/

const person = {
  name: "Dav",
  pAge: 25
}

delete person.pAge

console.log(person)

console.log("-----------------------------")


// Operadores aritiméticos
// - multiplicacao
//   console.log(2 * 2)
// - divisao
//   console.log(2 / 2)
// - soma
//   console.log(2 + 2)
// - subtraicao
//   console.log(2 - 2)

// - resto da divisao
//   let remanider
//   remainder = 11 % 3
//   console.log(remainder)
// - incremento
//   let increment = 0
//   increment++
//   increment++
//   console.log(increment)
// - decremento
//   let decrement = 0
//   decrement--
//   decrement--
//   console.log(decrement)
// - exponecial
//   console.log(3 ** 3)

console.log("-----------------------------")

// grouping operator ( )

let total = (2 + 3) * 5
console.log(total)

console.log("-----------------------------")

// operadores de comparacao
// ira comparar valores e retornar um boolean como resposta á comparacao

let one = 1
let two = 2

// ==  igual a
console.log(two == 1)
console.log(one == "1")

console.log("-")

// != differente de
console.log(one != two)
console.log(one != 1)
console.log(one != "1")

console.log("-")

// estrito(valor e tipo de dado) - strict

// === estritamente iqual a
console.log(one === "1")
console.log(one === 1)

console.log("-")

// !== estritamente diferente de
console.log(two !== "2")
console.log(two !== 2)

console.log("-")

// > Maior que
console.log(one > two)

console.log("--")

// >= Maior igual a 
console.log(one >= 1)
console.log(two >= 1)

console.log("--")


// < Menor que
console.log(one < two)

console.log("--")

// <= Menor igual a
console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0)

console.log("-----------------------------")

// operatods de atribuicao (assignment)
let x


// assignment
x = 2

// addition assignment
// x += 2

// subtraction assignment
// x -= 2

// multiplication assignment
// x *= 2

// division assignment
// x /= 2

// remainder
// x %= 3

// exponetiation(to the power of)
x **= 2

// Note: uncomment examples to use them in practise

console.log(x)

console.log("-----------------------------")

// Operadores lógicos

let pao = true
let queijo = false

// AND &&
console.log(pao && queijo)

// OR ||
console.log(pao || queijo)

// NOT ! (turns value into opposite boolean)
console.log(!pao)

console.log("-----------------------------")

// Operador condicional (ternário)

// café da manha

let bread = false
let cheese = true

const myBreaky = bread && cheese ? 'yummy breaky'  : "i dont like you "
console.log(myBreaky)

// maior de 18

let age = 16

const canDrive = age >= 18 ? 'vroom vroom' : "DON'T TOUCH MY CAR WITH YOUR CRUSTY MUSTY DUSTY HANDS"
console.log(canDrive)

console.log("-----------------------------")

// Operador de string

// concatenacao(concatenation)
let alpha = 'alpha'
alpha += 'bet'
console.log(alpha + 345)


/*
FALSY
Quando um valor é considerado false em contextos onde um boolean é obrigatório (conditional & loop)

false
0
-0
""
null
undefined
NaN
*/

console.log(-0 ? 'verdadeiro' : 'falso')

/*
TRUTHY
Quando um valor é considerado true em contextos onde um boolean é obrigatório (conditional & loop)

true
{}
[]
1
3.23
"0"
"false"
-1
Infinity
-Infinity
*/

console.log(3.23 ? 'verdadeiro' : 'falso')

console.log("-----------------------------")


/*
Operator precedence
Precedencia de operadores

* grouping ( )                                         MAIS IMPORTANTE
* negacao e incremento ! ++ --                               |
* multiplicacao e divisao * /                                |
* adicao e subtraicao + -                                    |
* igualdade == != === !==                                    |
* AND **                                                     |
* OR ||                                                      |
* condicional ?:                                             |
assignment (atribuicao) = += -= *=                    MENOS IMPORTANTE

*/