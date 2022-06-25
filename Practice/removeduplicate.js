function removeDuplicate(arr) {
  var duplicate = [];
  arr.forEach((element) => {
    if (!duplicate.includes(element)) {
      duplicate.push(element);
    }
  });
  return duplicate;
}

console.log(removeDuplicate([1, 2, 3, 4, 5, 6, 1, 2, 2, 3, 4]));
