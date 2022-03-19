
var reverse = function (x) {
    var reversed = 0;
    if (x < 0) {
        x = Math.abs(x);
        while (x > 0) {
            reversed = (reversed * 10) + (x % 10);
            x = Math.floor(x / 10);
        }

        reversed = -1 * reversed
        if (reversed <= Math.pow(-2, 31)) {
            return 0
        } else {
            return reversed
        }
    } else {
        while (x > 0) {
            reversed = (reversed * 10) + (x % 10);
            x = Math.floor(x / 10);
        }
        console.log(reversed)
        if (reversed > (Math.pow(2, 31)) - 1) {
            return 0
        } else {
            return reversed
        }
    }
};
var abc = reverse(1563847412);
console.log(abc)