const arr = "1321,3213,424,124";

function commaStringToArray(arr) {
  const number = arr.split(",").map(Number);

  return `[${number.join(" , ")}]`;
}

console.log(commaStringToArray(arr)); // Output: [1321 , 3213 , 424 , 124]
