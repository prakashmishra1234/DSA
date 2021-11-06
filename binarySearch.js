// let arr = [5, 10, 15, 13, 20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];
// let n = 100;
// function findANum(){
//     let start = 0 
//     let end = arr.length - 1;
//     //console.log('value of start: ', start);
//     //console.log('value of end is: ', end)
//     while (start <= end){
//         let middle = Math.floor((start+end)/2);
//         // console.log('value of middle: ', middle);
//         // console.log(arr[middle]);
//             if(arr[middle] === n ){
//                  console.log("Value of required number = ",arr[middle]);
//                  break;
//               }
//              else if (arr[middle] > n){
//                  end = middle - 1;
//              }
//              else if(arr[middle] < n){
//               start = middle + 1;
//             }else{
//               console.log('not found', n);
//         }
//     } 
// }
// findANum();

// //for my conformation

// // if(middle < n){
// //     start = middle+1 
// //     let xyz = Math.floor((start+end)/2)
// //     console.log(xyz);
// // }

let array = [5, 10, 15, 13, 20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];

function binarySearch(arr, value){
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
    return -1;
}

result = binarySearch(array, 105)
console.log(result)