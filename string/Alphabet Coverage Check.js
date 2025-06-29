const arr = "We promptly judged antique ivory buckles for next the prize";

function isAlphabetCovered(arr) {
  arr = arr.toLowerCase();
  const letter = new Set();

  for (let ch of arr) {
    if (ch >= "a" && ch <= "z") {
      letter.add(ch);
    }
  }
  if (letter.size === 26) {
    console.log("pangram");
  } else {
    console.log("not pangram");
  }
}
isAlphabetCovered(arr); // Output: "pangram"
