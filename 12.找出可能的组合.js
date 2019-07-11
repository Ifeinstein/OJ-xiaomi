const line = "";

let arr = line.split(" ");
let l = arr[0].split(",").length;
let aim = arr[1];

function F(m, n, arg = [1]) {
  let len = arg.length;
  let last = 0;
  if (n === 0) return arg[len - 1];
  for (let i = 0; i < len; i++) {
    last += arg[i];
  }
  arg.push(last);
  if (arg.length > m) {
    arg.shift();
  }
  return F(m, n - 1, arg);
}

console.log(F(l, aim));
