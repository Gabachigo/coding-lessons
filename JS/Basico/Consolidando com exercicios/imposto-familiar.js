// had to copy this out because my brain is too small

let family = {
  income: [5000, 2000],
  expenses: [2000, 300, 100]
}
let expenseTotal = 0

function sum(array){
  let total = 0
  
  for (let value of array) {
    total += value
  }

  return total
}

function calcBalance() {
  const incomeTotal = sum(family.income)
  const expensesTotal = sum(family.expenses)

  const balance = incomeTotal - expensesTotal

  console.log(`Your balance is ${balance}`)
}

calcBalance()