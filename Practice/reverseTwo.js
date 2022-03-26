var numbers = [2, 3, 4];
var target = 6;
var sum = 0;
var left = 0;
var right = numbers.length - 1;
while (left < right) {
    sum = numbers[left] + numbers[right];
    if (sum === target) {
        console.log([left + 1, right + 1]);
    } else if (sum > target) {
        right--;
    } else {
        left++;
    }
}