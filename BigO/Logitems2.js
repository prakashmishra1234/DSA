// Drop Constant

function logItems(n){
    for(let i=0; i<n; i++){
        console.log(i);
    };
    for(let j=0; j<n; j++){
        console.log(j)
    }
};
logItems(10)

/*In the above example number of operation is equal to n+n whicch is equal to 2n 
and we denote it by droping constant which is 2 so it is denoted by o(n)*/