const arr = "An-Logo-Graphic-Design";

function firstCharecterAndMix(arr) {
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= "A" && arr[i] <= "Z") {
      result += arr[i];
    }
  }
  return result;
}

console.log(firstCharecterAndMix(arr));
