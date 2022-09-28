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
} catch(e) {
  console.log(e)
}

console.log('apos o try catch')