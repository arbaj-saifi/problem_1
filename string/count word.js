const arr = ["how are you from"];

function countWords(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let words = arr[i].split(" ");
    count += words.length;
  }
  return count;
}
console.log(countWords(arr)); // Output: 5
