var isMatch = function (s, p) {
  let temp;
  for (let j = 0; j < p.length; j++) {
    if (p[j] === ".") {
      return true;
    }
    console.log(p[j]);
    if (p[j] === "*") {
      console.log(p[j]);
      for (let i = 0; i < s.length; i++) {
        for (let k = 0; k < p.length; k++) {
          if (p[k] === s[i]) {
            return true;
          } else {
            return false;
          }
        }
      }
    }
  }
  return false;
};

console.log(isMatch("aa", "a*"));
