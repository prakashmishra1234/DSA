//Findeven number between 1 to 10
function findEven() {
    for (let i = 1; i < 11; i++) {
        if (i % 2 === 0) {
            console.log("Even number is ", i)
        }
    }
}
findEven()

//find odd number between 1 to 11
function findOdd() {
    for (let j = 1; j < 12; j++) {
        if (j % 2 !== 0) {
            console.log("Odd Number is ", j)
        }
    }
}
findOdd()