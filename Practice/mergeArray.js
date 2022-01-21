let a = [2, 5, 7, 11, 23, 37];
let b = [3, 4, 9, 3];

//Merging array
for (var i = 0; i < b.length; i++) {
    a.push(b[i]);
}

//Array sorting after merger
for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
        if (a[i] > a[j]) {
            let c = a[i]
            a[i] = a[j]
            a[j] = c
        }
    }
}
console.log(a);





