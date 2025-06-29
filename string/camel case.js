const arr = "how_are_you";

function camelCase(arr) {
  const parts = arr.split("_");

  let result = parts[0];

  for (let i = 1; i < parts.length; i++) {
    let words = parts[i];
    if (parts.length > 0) {
      result += words[0].toLowerCase() + words.slice(1);
    }
  }
  return result;
}

console.log(camelCase(arr));
