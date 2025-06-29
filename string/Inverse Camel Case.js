const arr = "IAmAJavaProgramer";

function inverseCamelCase(arr) {
  const words = arr.match(/([A-Z][a-z]*)/g);

  for (let word of words) {
    console.log(word);
  }
}
inverseCamelCase(arr);
