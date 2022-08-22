console.log(`-------------------------ツPraticandoツ-------------------------`)

// const weight = 88.6
// console.log(typeof weight)

console.log(`-------------------------------ツ-------------------------------`)


// let name = "Bob"
// let age = 22
// let stars = 4.5
// let isSubscribed = true

// =====================================================

let student = {
  name: "Bob",
  age: "22",
  weight: 82.4,
  isSubscribed: true
}

// console.log(typeof student)
// console.log(`${student.name} de idade ${student.age} pesa ${student.weight}`)

console.log(`-------------------------------ツ-------------------------------`)

let students = []

let student2 = {
  name: "Mayk",
  age: 5,
  weight: 500,
  isSubscribed: false
}

students = [
  student,
  student2
]

students[1] = student2
console.log(students)
console.log(students[0])
console.log(students[1])

console.log(`-------------------------------ツ-------------------------------`)


console.log(a)
var a = 1
// undefined, o var é global, entao qualquer codigo pode ler o var, mas ele so tem valor depois da linha que define o valor do var(a)
// hoisting