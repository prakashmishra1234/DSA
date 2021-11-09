// Drop Constant 

function logItems(n){
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            console.log(i, j);
        };
    };
    for(let k=0; k<n; k++){
        console.log(k);
    };
};

logItems(10)

/* In the above code number of execution is equal to 110 times which is 
    (n*n+n) which is equal to n^2+n by droping non dominent which is
    n and denoted as n^2
*/