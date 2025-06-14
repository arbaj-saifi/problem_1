const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function numDigits(num){
    //Write your code here
    let strArray = Math.abs(num).toString();
    let digits = strArray.split('');
    let count = 0;
    for (let i = 0; i < digits.length; i++)
    {
        count++;
    }
    return count;
}

rl.on('line', (n) => {
  console.log(numDigits(parseInt(n)));
  rl.close();
});