//BigO (n^2)

function logItems(n){
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            console.log(i, j);
        };
    };
    
};
logItems(10)

/*In the above example the code executes for 100 times. 
    so the total no. of execution is eqal to n*n times which is equal to n^2
    and denoted as O(n^2)
*/