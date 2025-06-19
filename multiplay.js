// const Multiple = (N, Arr) => {
//   // return the answer as an array

// };

// /*Do Not Change anything below*/
// var readline = require("readline").createInterface(process.stdin);

// let inputArr = [];
// var lineNumber = -1;
// var inputSize;

// //multipleline input from User
// readline.on("line", readInputs);

// function readInputs(line) {
//   inputArr.push(line);
//   lineNumber++;
//   if (lineNumber == 0) {
//     size = parseInt(inputArr[0]);
//   } else if (lineNumber < size) {
//   }

//   //Exit Condition
//   if (lineNumber == 1) {
//     logic("s");
//     readline.close();
//   }
// }

// function logic(input) {
//   const N = parseInt(inputArr[0]);
//   inputArr.shift();
//   const Arr = inputArr[0].split(" ").map((x) => +x);

//   console.log(Multiple(N, Arr).join(" "));
// }


// const input1 = [1, 2, 3];
// const input2 = [2, 4, 6, 12];

// function multiplelineInput(n, arr) {
//     let result = new Array(n).fill(0);
//     for (let i = 0; i < n; i++){
//         for (let j = i+1; j < n; j++){
//             if (arr[j] % arr[i] === 0) {
//                 result[i]++;
//             }
//         }
//     }
//     return result.join(" ");;
// }

// console.log(multiplelineInput(3, input1));  // Output: 2 0 0
// console.log(multiplelineInput(4, input2));

const Multiple = (N, Arr) => {
  // return the answer as an array
  let result = new Array(N).fill(0);

  for(let i=0; i<N; i++){
    for(let j= i+1; j<N; j++){
      if(Arr[j] % Arr[i] === 0){
        result[i]++;
      }
    }
  }
  return result;
};

/*Do Not Change anything below*/
var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;

//multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  } else if (lineNumber < size) {
  }

  //Exit Condition
  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const N = parseInt(inputArr[0]);
  inputArr.shift();
  const Arr = inputArr[0].split(" ").map((x) => +x);

  console.log(Multiple(N, Arr).join(" "));
}
