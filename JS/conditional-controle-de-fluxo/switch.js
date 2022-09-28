// switch

// calculator


function calculate( number1, operator, number2 ) {
  let result = "Syntax error"
  
  switch ( operator ) {
    case '+':
      result = number1 + number2
      break
    case '-':
      result = number1 - number2
      break
    case '*':
      result = number1 * number2
      break
    case '/':
      result = number1 / number2
      break
    default:
      console.log('bro this is simple')
      break
  }
  
  return result
}

console.log(calculate(4, '+', 8))