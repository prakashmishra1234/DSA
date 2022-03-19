var s = "Let's take LeetCode contest";
s = s.split(" ");
let v = []
for (var i = 0; i < s.length; i++) {
    var p = s[i]
    p = p.split("")
    var mid = Math.floor(p.length / 2)
    for (let j = 0; j <= mid - 1; j++) {
        // console.log(p)
        let a = p[j]
        p[j] = p[p.length - 1 - j]
        p[p.length - 1 - j] = a
    }
    p = p.join("")
    v.push(p)
}

v = v.join(" ").toString()

