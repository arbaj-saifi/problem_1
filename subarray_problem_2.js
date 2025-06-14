const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function solve(arr, n) {
    // Write your code here
    let count = 0;
    // for loop condition check;
    for (let i = 0; i <=n - 4; i++){
        if (arr[i] < arr[i + 1] && arr[i + 1] < arr[i + 2] && arr[i + 2] < arr[i + 3]) {
            count++;
        }
    }
    console.log(count);
}


readline.question('', n => {
  readline.question('', arr => {
    arr = arr.split(' ').map(Number);
    solve(arr, parseInt(n));
    readline.close();
  });
});