const line = "";

let arr = line.split(",");
let s1 = arr[0];
let s2 = arr[1];
let s3 = arr[2];

function isSub(s1, s2, s3) {
  s1 = s1 || [];
  s2 = s2 || [];
  s3 = s3 || [];
  let i = 0;
  let j = 0;
  let k = 0;

  for (; k < s3.length; k++) {
    if (s3[k] === s1[i] && s3[k] === s2[j]) {
      return (
        isSub(s1.slice(i), s2.slice(j + 1), s3.slice(k + 1)) ||
        isSub(s1.slice(i + 1), s2.slice(j), s3.slice(k + 1))
      );
    } else if (s3[k] === s1[i]) {
      i++;
    } else if (s3[k] === s2[j]) {
      j++;
    } else {
      return false;
    }
  }
  if (s1.length + s2.length === k) {
    return true;
  }
  return false;
}

console.log(isSub(s1, s2, s3));
