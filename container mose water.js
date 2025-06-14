// // container the most water code solved
// // and input height = [1,8,6,2,5,4,8,3,7];
// // output = [49];

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// function findWaterCount(arr) {
//     let left = 0;
//     let right = arr.length - 1;
//     let maxArea = 0;
//     // while loop ;
//     while (left < right) {
//         let width = right - left;
//         // calculate the height;
//         let height = Math.min(arr[left], arr[right]);
//         // calculate the area
//         let area = width * height;
//         // update the max area count;
//         maxArea = Math.max(maxArea, area);
//         // move the pointer and left to right;
//         if (arr[left], arr[right]) {
//             left++;
//         }
//         else {
//             right--;
//         }
//     }
//     return maxArea;
    
// }
// console.log(findWaterCount(arr));


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left =0;
    let right = height.length-1;
    let max = 0;
    // while looping starting
    while(left < right){
        let width = right-left;
        let h= Math.min(height[left], height[right]);
        let area = width*h;
        // max area count
        max = Math.max(max, area);
        // move to pointer left to right
        if(height[left], height[right]){
            left++;
        }
        else{
            right--;
        }
    }
    return max;
};
console.log(maxArea(height));