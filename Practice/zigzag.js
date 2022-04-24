var s = "PAYPALISHIRING";
var numRows = 3;

let result = [];
if (numRows < 2) {
  console.log(s);
}
for (let i = 0; i < numRows; i++) {
  let j = i;
  while (j < s.length) {
    result.push(s[j]);
  }
}

console.log(result);
