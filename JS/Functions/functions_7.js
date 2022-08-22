// callback function

function speak(sentence) {
  console.log('Im not hungry yet')
  sentence()
  console.log('Very full :)')
}

speak(
  () => {
    console.log('Im hungry')
  }
)