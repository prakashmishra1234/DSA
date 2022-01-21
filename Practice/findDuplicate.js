var a = [8, 2, 2, 3, 3, 4, 5, 6, 8];

for (let i = 0; i < a.length; i++) {
    //console.log(a[i])
    for (let j = i + 1; j < a.length; j++) {
        //console.log(a[i],a[j]);
        if (a[i] === a[j]) {
            //console.log(a[j])
            var z = a[j]
            console.log(z)
        }
        //console.log('Value in inner loop: '+ a[j])
    }
    //console.log('Value of outer loop is: '+a[i])
}