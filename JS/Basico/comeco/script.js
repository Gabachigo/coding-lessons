/* 
String
- Cadeia de caracteres

"" // Aspas duplas
'' // Aspas simples
`` // Template literals ou template strings
*/

console.log("Dav''''''''``")
console.log('Dav"""""""```')
console.log(`
"""""''
${1+1}
dav
`)
// ${1+1} = interpolacao


/*
Numbers
- Numeros

33 // Inteiros
12.5 // Reais - Float
NaN // Not A Number
Infinity // Infinito
*/

console.log(12.5/2) // Normal result
console.log(12/"hfuehfh") // NaN result
console.log(Infinity) // Infinity result, "infinity" with lower case results in not defined error


/*
Boolean

true
false
*/

console.log(true)
console.log(false)

/*
Null
- Nao possui nada dentro
- Differente de indefinido
*/

console.log(null)
console.log(null == undefined)

/*
Object
- Objeto
- Propiedates/Atributos
-Funcionalidades/Metodos

{propiedade:"valor"}
*/

console.log({
  name: "Davi",
  age: 14,
  walk: function(){
    console.log("walk")
  }
})

/*
Array
- Uma lista
-Agrupamento de dados
*/

console.log([
  "Leite",
  "Ovos",
  "Banana",
  2,
  3,
  4
])

/*
Conclusao

Data types
- Primitive / Primitive value
- Structural
- Structural Primitive

Primitivos (Valor)
- String
- Number
- Boolean
- undefined
- Symbol
- BigInt

Estruturais
- Object
  - Array
  - Map
  - Set
  - Date
  - ...
- Function

Primitivo estrutural/Structural Root Primitive
- Null
*/


// Template console.log
console.log()