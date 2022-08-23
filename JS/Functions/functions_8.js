/** 
Function() constructor
  * expressao new
  * criar um novo objeto
  * this keyword
*/

function Person(name) {
  this.name = name
  this.walk = function() {
    return this.name + " está andando"
  }
}

const dav = new Person("Dav")
const joao = new Person("Joao")
console.log(dav.walk())
console.log(joao.walk())

let date = new Date(22-8-2022)
console.log(Date())