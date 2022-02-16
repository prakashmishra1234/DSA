//Sum within array

function sumInArray() {
    for (let i = 0; i < Array.length; i++) {
        let result = i + Array[i + 1]
        console.log(`${result}`)
    }
}
let arr = [2, 4, 5, 6, 7];
sumInArray(arr);

