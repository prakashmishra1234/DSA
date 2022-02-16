//Conversion of km into meter 
function conversion(x) {
    let result = x * 1000
    console.log(`${result} meter`)
}
conversion(1)

//Conversion of km to miles
function conversionToMiles(x) {
    let result = (x * 0.621371).toFixed(4)
    console.log(`${result} miles`)
}
conversionToMiles(12)

