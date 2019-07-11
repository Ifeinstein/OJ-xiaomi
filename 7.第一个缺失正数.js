const line = "";

let arr = line.split(",");

function findLost(arr) {
  arr = arr.map(e => e * 1).sort();
  let temp = 0;
  let i = 0;
  for (; i < arr.length; i++) {
    if (arr[i] <= 0) {
      continue;
    }
    if (arr[i] > temp + 1) {
      break;
    }
    temp = arr[i];
  }
  return temp + 1;
}

console.log(findLost(arr));
