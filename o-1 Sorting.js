const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
rl.on('line', (line) => {
  inputLines.push(line.trim());
  if (inputLines.length === 2) {
    const n = parseInt(inputLines[0]);
    const arr = inputLines[1].split(' ').map(Number);
    const ans = Sorting01(n, arr);
    console.log(ans.join(' '));
    rl.close();
  }
});

function Sorting01(n, arr) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) count++;
  }
  let result = Array(count).fill(0).concat(Array(n - count).fill(1));
  return result;
}
