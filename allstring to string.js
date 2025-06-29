const arr = ["a", "b", "c"];


// all Substrings of a string from an array of strings
// function allStringToString(arr) {
//     const str = arr.join('');
//     const n = str.length;
//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j <= n; j++) {
//             console.log(str.substring(i, j));
        
//         }
//     }

    
// }
// allStringToString(arr);



// Distinct Palindromic SubStrings Second Question

// function isPalindrome(str) {
//     return str === str.split('').reverse().join('');
// }

// // console.log(isPalindrome("abc")); // false ✅

// function distinctPalindromicSubstrings(n) {
//     const s = n.length;
//     const palindrome = new Set();

//     for (let i = 0; i < s; i++) {
//         for (let j = i + 1; j <= s; j++) {
//             const substring = n.substring(i, j);
//             if (isPalindrome(substring)) {
//                 palindrome.add(substring);
//             }
//         }
//     }

//     const result = Array.from(palindrome).sort(); // Sort lexicographically
//     for (const word of result) {
//         console.log(word);
//     }
// }

// // Test with "abcba"
// distinctPalindromicSubstrings("abcba");


// Compressed Strings count length index

// const = ["abbbccd"];

function compressedString(arr) {
    let res = '';
    let count = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            count++;
        } else {
            res += arr[i - 1];
            if (count > 1) {
                res += count;
            }
            count = 1;
        }
    }

    // Add the last character group after loop ends
    res += arr[arr.length - 1];
    if (count > 1) {
        res += count;
    }

    return res;
}

const input = "aaabbcc";
console.log(compressedString(input.split(''))); // Output: a3b2c2 ✅
