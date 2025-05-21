// checking sum zero and problem 1
// [-5,-4,-3,-2,-1,0,2,4,6,8] input
// [-4,4] output

function SumOfZero(array) {
    // let result = "";

    for (let i of array){
        for (let j = 1; j < array.length; j++){
            if (i+ array[j] === 0) {
                return [i, array[j]];
            }
        }
    }
}
let result = SumOfZero([-5, -4, -3, -2, -1, 0, 2, 4, 6, 8]);
console.log(result);

// time complexity o(n^2);

console.log("=========");

// checking sum of zero  problem 2

function fistSumofzero(array) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        let sum = array[left] + array[right];
        // console.log(sum);
        if (sum === 0) {
            return [array[left], array[right]];
        }
        else if (sum > 0) {
            right--;
        }
        else {
            left++
        }
    }
    return null
}
let result1 = fistSumofzero([-5, -4, -3, -2, -1, 0, 2, 4, 6, 8]);
console.log(result1);

// time complexity o(n);