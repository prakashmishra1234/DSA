var s = "abcabcbb"
var arr = [];
s = s.split("");
var mid = Math.floor(s.length / 2)
for (let i = 0; i < s.length; i++) {
    for (let j = 0 + 1; j < s.length; j++) {
        if (s[i] !== s[j]) {
            arr.push(s[i])
            break;
        }
    }
}