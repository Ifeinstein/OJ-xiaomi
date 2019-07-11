const line = "";

let n = line * 1;

function F(n, a1 = 1, a2 = 1) {
  if (n === 1) return a2;
  return F(--n, a2, a1 + a2);
}

console.log(F(n));
