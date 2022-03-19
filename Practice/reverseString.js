var s = ["A", " ", "m", "a", "n", ",", " ", "a", " ", "p", "l", "a", "n", ",", " ", "a", " ", "c", "a", "n", "a", "l", ":", " ", "P", "a", "n", "a", "m", "a"];
var mid = Math.floor(s.length / 2)
if (s.length % 2 === 0) {
    for (let i = 0; i <= mid - 1; i++) {
        let a = s[i]
        s[i] = s[s.length - 1 - i]
        s[s.length - 1 - i] = a
    }
} else {
    for (let i = 0; i <= mid - 2; i++) {
        let a = s[i]
        s[i] = s[s.length - 1 - i]
        s[s.length - 1 - i] = a
    }
}
console.log(s)