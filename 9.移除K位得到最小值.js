const line = "";

let arr = line.split(" ");

let k = arr[1];
let numberArray = arr[0].split("");

function removeK(nums, k) {
  for (let i = 0; i < k; i++) {
    if (nums[0] < nums[1]) {
      nums.splice(1, 1);
    } else {
      nums.shift();
    }
    while (nums[0] === "0") {
      nums.shift();
    }
    if (!nums.length) return "0";
  }
  return nums.join("");
}

console.log(removeK(numberArray, k));
