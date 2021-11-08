let a = [2,5,7,11,23,37];
let b = [3,4,9,3];

for(var i=0;i<b.length;i++){
    a.push(b[i]);
}
//console.log(a);
for(let i=0; i<a.length; i++){
   // console.log('value of i ', i);
    for(let j=i+1; j<a.length; j++){
    //    console.log('value of j ', j)
        if(a[i] > a[j]){
            let c = a[i]
            a[i] = a[j]
            a[j] = c
        }
    }
}
console.log(a);


//for my confirmation
// var e = 3
// var f = 4

// if((e-f) > 0){
//     console.log(e,f)
// }else{
//     console.log(f,e)
// }




