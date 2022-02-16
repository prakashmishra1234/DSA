//Finding multiplication Table
function MultiplicationTable(i) {
    for (let j = 1; j <= 10; j++) {
        let result = i * j
        console.log(`${result}`)
    }
}
MultiplicationTable(1001)