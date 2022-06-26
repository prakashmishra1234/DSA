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

function mergesort(array) {
  if (array.length === 1) return array;
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return merge(mergesort(left), mergesort(right));
}

console.log(mergesort([1, 3, 4, 2]));
