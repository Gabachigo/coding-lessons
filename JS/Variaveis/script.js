/*
Variaveis
- Nomes simbolicos para receber algum valor
- Atalhos de codigo
- 3 palavras reservadas para criar uma variavel
  - var
  - let
  - const
*/

var clima = "Quente"
clima = "Frio"
console.log(clima)

let climate = "Snow"
clima = "Fog"
console.log(climate)

const clime = "Rain"
console.log(clime)
//Nao é possivel trocar o valor de uma const

/*
Tipos dinamicos
- Nao precisa de ter um tipo previamente definido
*/

let clima2 = true
clima2 = ""
//dinamico

console.log(typeof clima2)
// checar o tipo da variavel


/*
Scopo & var
- O scopo determina a visibilidade de alguma variavel no JS

Block statement
- Declaracao de bloco

comecamos o bloco
{
  conteudo
}
fechamos o bloco

o var é global e poderá funcionar fora de um scopo, const & let sao locais e só funcional no escopo onde foi criada

Hoisting
- elevacao
- item no scopo é elevado para cima sem um valor(nesse exemplo o var)

*/

//exemplo
{
  let v = 0
  console.log(v)
}


console.log('> existe x antes do bloco?', x)
// resultado de indefinido, x existe mas nao foi definido

{
  var x = 0
}

console.log('> existe x depois do bloco?', x)
// resultado de 0


let y = 1

{
  y = 0
  console.log('> existe y', y)
  // isso so atualisa o valor de y dado que o y nesse scopo veio do y no scopo anterior
}

console.log('> existe y depois do bloco?', y)


const z = 1

{
  const z = 0
  console.log('> existe z', z)
}

console.log('> existe z depois do bloco?', z)


/*
Nomes de variaveis
- JS é case sensitive
- JS aceita caracteres unicode

Posso:
  - iniciar com essas caracteres especiais $_
  - Iniciar com letras
  - Colocar acentos
  - Letras maíusculas e minúsculas fazem diferenca

Nao posso:
  - Iniciar con números
  - Colocar espacos vazios no nome

Ideal
  - Criar nomes que fazem sentido
  - Que explique o que a variável é ou faz
  - camelCase
  - sname_case
  - Escrever em ingles
*/