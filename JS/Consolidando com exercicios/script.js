function convertTemp(unitConvertTo, temperature) {
  if (unitConvertTo != "celsius" && unitConvertTo != "farhenheit") {
    console.log("Invalid unit")
  }
  if (unitConvertTo == "farhenheit") {
    let finalTemp = (temperature * 1.8) + 32
    finalTemp = Math.round(finalTemp)
    console.log(finalTemp)
  } 
  if (unitConvertTo == "celsius") {
    let finalTemp = (temperature - 32) / 1.8
    finalTemp = Math.round(finalTemp)
    console.log(finalTemp)
  }
}

convertTemp("celsius", 68)