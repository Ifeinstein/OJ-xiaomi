const line ="";

let arr = line.split("-");
let a = arr[0];
let b = arr[1];
let bl = b.length;
let al = a.length;
let tempHead = 0;
let temp = [];
for (let i = 1; i <= bl || tempHead === -1; i++) {
  let k = a[al - i] - (b[bl - i] || 0) + tempHead;
  if (k < 0) {
    tempHead = -1;
    temp.unshift(10 + k);
  } else {
    tempHead = 0;
    temp.unshift(k);
  }
}
let ans = a.slice(0, -temp.length) + temp.join("");
ans = ans.replace(/^0+/, "");
console.log(ans);
