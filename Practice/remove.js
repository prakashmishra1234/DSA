var nums = [0]
var count = 0
for (let j = 0; j < nums.length; j++) {
    if (nums[j] === 0) {
        count += 1
    }
}
for (let i = 0; i < count; i++) {
    nums.push(0)
}
for (let k = 0; k < (nums.length - count);) {
    if (nums[k] === 0) {
        nums.splice(k, 1)
    } else {
        k++
    }

}
console.log(nums)
