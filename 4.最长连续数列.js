const line = "";

let arr = line.split(",");
let temp = {};
let result = 0;
for (let i = 0; i < arr.length; i++) {
  let num = parseInt(arr[i]);
  let prev = temp[num - 1];
  let next = temp[num + 1];
  let len = 0;
  if (prev && next) {
    temp[num] = temp[num - 1] = temp[num + 1] = prev.concat(num, next);
    len = temp[num].length;
  } else if (prev) {
    len = prev.push(num);
    temp[num] = temp[num - 1];
  } else if (next) {
    len = next.unshift(num);
    temp[num] = temp[num + 1];
  } else {
    len = 1;
    temp[num] = [num];
  }
  result = result > len ? result : len;
}

console.log(result);
