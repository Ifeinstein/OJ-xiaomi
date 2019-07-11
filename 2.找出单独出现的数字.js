const line = "10 10 11 12 12 11 16";
// 输出 16

let arr = line.split(" ");
let l = arr.length;
let result = new Set();
for (let i = 0; i < l; i++) {
  if (result.has(arr[i])) {
    result.delete(arr[i]);
  } else {
    result.add(arr[i]);
  }
}
console.log(...result);
