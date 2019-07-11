const line = "";

let arr = line.split(",");
let len = arr.length;
if (len === 1) return console.log(arr[0]);
for (let i = 1; i < len; i++) {
  if (arr[i] * 1 < arr[i - 1] * 1) {
    return console.log(arr[((i * 2 + len - 1) / 2) % len]);
  }
}
return console.log(arr[(len - 1) / 2]);
