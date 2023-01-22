var grade = "F"
var result = 90

switch(true) {
  case (result > 89):
    grade = "A"
    break
  case (result > 79):
    grade = "B"
    break
  case (result > 69):
    grade = "C"
    break
    case (result > 59):
    grade = "D"
    break
  default:
    grade = "F"
    break
}

console.log(result)
console.log(grade)

