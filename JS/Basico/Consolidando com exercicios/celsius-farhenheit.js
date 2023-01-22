function convertTemp(unitConvertTo, temperature) {
  if (unitConvertTo != "celsius" && unitConvertTo != "farhenheit") {
    console.log("Invalid unit")
  }
  if (unitConvertTo == "farhenheit") {
    let finalTemp = (temperature * 1.8) + 32
    finalTemp = Math.round(finalTemp)
    console.log(finalTemp, "F")
  } 
  if (unitConvertTo == "celsius") {
    let finalTemp = (temperature - 32) / 1.8
    finalTemp = Math.round(finalTemp)
    console.log(finalTemp, "C")
  }
}

convertTemp("celsius", 68)