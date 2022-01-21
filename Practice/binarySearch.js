let array = [5, 10, 15, 13, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
let arr = [9, 4, 6, 8, 10, 6, 7, 8, 20, 13, 12, 15, 16, 18, 17, 19, 1, 5, 2, 3]

function binarySearch(arr, value) {
    let = start = 0;
    let end = arr.length;
    let mid = 0;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid] === value) {
            return arr[mid];
        } else if (arr[mid] < value) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return 'not found';

}

result = binarySearch(array, 75)
console.log(result)

sorted = arr.sort(function (a, b) { return a - b });
//console.log(sorted);

result = binarySearch(sorted, 18)
console.log(result)
