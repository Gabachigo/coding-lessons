// throw

function sayMyName(name) {
  if (name === '') {
    throw 'Broski you need a  name'
  }
  
  console.log(name)
}


// try...catch

try {
  sayMyName('Davi')
} catch(error) {
  console.log(error)
}

console.log('apos o try catch')