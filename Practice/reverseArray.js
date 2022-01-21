let a = [8, 4, 10, 21, 6, 500, 300, 2, 21, 40, 50];
//console.log(a.length);
let start = 0;
let end = Math.floor((a.length - 1) / 2);
let e = a.length - 1
let s = end + 1
//console.log('value of end: ', a[end])
for (let i = start, j = e; i <= end && j >= s; i++, j--) {
    let b = a[i]
    //console.log('value of b ', b);
    a[i] = a[j]
    //console.log('value of a[i]',a[i])
    a[j] = b
    // console.log('value of a[end]',a[e])
}
console.log(a);
