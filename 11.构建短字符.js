const line = "";

let arr = line.split(" ");
let short = arr[0];
let long = arr[1];

function isSub(short, long) {
  let temp = {};
  for (let i of long) {
    if (!temp[i]) {
      temp[i] = 1;
    } else {
      temp[i]++;
    }
  }
  for (let i of short) {
    if (temp[i]) {
      temp[i]--;
    } else {
      return false;
    }
  }
  return true;
}
