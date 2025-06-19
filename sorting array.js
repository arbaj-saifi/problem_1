const arr = ["dog", "cat", "zebra", "ant"];

// const arr = ["banana", "apple", "orange", "grape", "kiwi"];
// first step solved sorting array of String 
// function sortArray(arr) {
//     return arr.sort((a, b) => a.localeCompare(b) );
// }
// console.log(sortArray(arr));


// Second step solved sorting array of String in Bubble sort solution use and not use sort

// function bubbleSort(arr) {
//     const n = arr.length;
//     for (let i = 0; i< n - 1; i++){
//         for (let j = 0; j < n - i-1; j++){
//             if (arr[j][0].localeCompare(arr[j + 1][0]) > 0) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort(arr));

// const arr = ["banana", "apple", "orange", "grape", "kiwi"];

function sortString(strArray) {
  let n = strArray.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (strArray[j].localeCompare(strArray[j + 1], undefined, { sensitivity: 'base' }) > 0) {
        // Swap
        let temp = strArray[j];
        strArray[j] = strArray[j + 1];
        strArray[j + 1] = temp;
      }
    }
  }
  return strArray;
}

const input = ["this", "is", "not", "a", "Random", "Array"];
console.log(sortString(input).join(" "));

