const arr = [1, 2, 3, 4, 5, 6];

// function double(x) {
//     return x * x
// }

// const output = arr.map(double)

const output = arr.map((e) => {
    return e * e
})

console.log(output)