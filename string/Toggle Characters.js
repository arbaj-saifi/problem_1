const arr = "helloABC";
const n = arr.length;

function toggleCharacters(arr, n) {
  let result = "";

  for (let i = 0; i < n; i++) {
    const ch = arr[i];
    if (ch >= "a" && ch <= "z") {
      result += ch.toUpperCase();
    } else if (ch >= "A" && ch <= "Z") {
      result += ch.toLowerCase();
    } else {
      result += ch;
    }
  }
  return result;
}
console.log(toggleCharacters(arr, n)); // Output: "HELLOabc"
