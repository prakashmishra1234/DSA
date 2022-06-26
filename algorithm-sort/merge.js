function merge(arr1, arr2) {
  let combined = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      combined.push(arr2[j]);
      j++;
    } else {
      combined.push(arr1[i]);
      i++;
    }
  }
  while (i < arr1.length) {
    combined.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    combined.push(arr2[j]);
    j++;
  }
  return combined;
}

const a = [2, 3, 4, 5];
const b = [6, 7, 8, 9];
console.log(merge(a, b));
