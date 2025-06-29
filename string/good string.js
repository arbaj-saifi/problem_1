const arr = [1, "abx", 4, "ab", "abd", "abcd", "abcde"];

function processString(arr) {
  let index = 0;
  let t = arr[index++];

  for (let i = 0; i < t; i++) {
    let s = arr[index++];
    let n = arr[index++];
    let a = [];
    for (let j = 0; j < n; j++) {
      a.push(arr[index++]);
    }
    let result = printGoodArray(s, a);
    console.log(result);
  }
}

function printGoodArray(s, a) {
  let allowed = new Set(s); // ✅ Fix 1: Capital 'S' and use the input string
  let count = 0;

  for (let str of a) {
    let isGood = true;
    for (let ch of str) {
      if (!allowed.has(ch)) {
        isGood = false;
        break;
      }
    }
    if (isGood) {
      count++;
    }
  }
  return count;
}

processString(arr); // Output: 1
