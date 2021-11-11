// O(log n )

let arr=[1,2,3,4,5,6,7,8]
function searchNumber(arr, value){
    let = start = 0;
    let end = arr.length;
    let mid = 0;
    while (start <= end){
        mid = Math.floor((start+end)/2);
        if(arr[mid] === value){
            return arr[mid];
        }else if (arr[mid] < value ){
            start = mid + 1
        }else{
            end = mid - 1
        }
    }
    return 'not found';
}

result = searchNumber(arr, 1)
console.log(result);

/*In the above example it takes 3 operation to find 1 which is 
    2^3=8 can be written as log2(8) = 3 
    it is called O(log n) 
*/