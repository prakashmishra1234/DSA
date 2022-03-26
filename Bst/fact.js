var b = 0;

// var a = function (n) {
//     for (let i = n; i >= 1; i--) {
//         return i * (i - 1)
//     }
// }


var a = function (n) {
    while (n > 0) {
        return n * (n - 1)
    }
}

// var c = function (m) {
//     console.log(m)
//     if (m === 2) {
//         return 2
//     }
//     for (let j = (n - m); j >= 1; j--) {
//         return j * (j - 1)
//     }
// }

var x = a(3);
console.log(x)
// var y = c(2);
// console.log(y)
// var z = x / y
// console.log(z)