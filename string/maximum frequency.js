const arr = "aabbbcc";

function MaximumFrequency(arr) {
  const freq = {};
  // Count the frequency of each character
  for (let ch of arr) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  console.log(freq);
  // find the maximum frequency character;
  let maxfreq = 0;
  let maxChar = "";

  for (let key in freq) {
    if (freq[key] > maxfreq || (freq[key] === maxfreq && key < maxChar)) {
      maxfreq = freq[key];
      maxChar = key;
    }
  }
  console.log(
    `Maximum frequency character is '${maxChar}' with frequency ${maxfreq}`
  );
}
MaximumFrequency(arr); // Output: { a: 2, b: 3, c: 2 }
