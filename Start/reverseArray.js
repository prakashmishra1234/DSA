// var a = [8,4,7,5,6];

// for( i = a.length; i > 0; i--){
//     console.log(i);
// }

// let a = [8,4,7,5,6,500];
// let start = 0;
// let end = a.length-1;

// for(let i = end; i>=start; i--){
//     let x = a[i];
//     console.log("value of x is ", x);
//     for(let j = start; j <= end; j++){
//         let y = a[j]
//         a[j] = a[x]
//        console.log(a[j]);        
//     }
// }

// var b = ['p','r','a','k','a','s','h']
//     for(let i = 0; i < b.length-1; i++){
//         let x = b[i];
//         console.log(x)
//         let y = b[b.length-1]
//         console.log('value of y is '+y)
//         b = y;
//         console.log('x is '+ x);
//     }

let a = [8,4,10,21,6,500,300,2,21,40,50];
//console.log(a.length);
let start = 0;
let end = Math.floor((a.length-1)/2);
let e = a.length-1
let s = end+1
//console.log('value of end: ', a[end])
for (let i = start, j=e; i <= end && j>=s; i++, j-- ){
    // console.log('value of i ', i);
    // console.log('value of j ', j);
    // console.log('value of a[i] ',a[i]);
    // console.log('value of a[e]', a[e])
    let b = a[i]
    //console.log('value of b ', b);
    a[i] = a[j]
    //console.log('value of a[i]',a[i])
    a[j] = b
   // console.log('value of a[end]',a[e])
}
console.log(a);

// var c = ['p','r','a','k','a','s','h']
// let s = 0;
// let e = c.length-1
// for(let j=s; j <=e; j++){
//     let d = a[j]
//     a[j] = a[e]
//     a[e] = d  
// }
// console.log(c);
