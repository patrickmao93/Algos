// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};
  let max = 0;
  let maxChar = "";
  for (const char of str) {
    !chars[char] ? (chars[char] = 1) : (chars[char] += 1);
  }
  for (const prop in chars) {
    if (chars[prop] > max) {
      max = chars[prop];
      maxChar = prop;
    }
  }
  return maxChar;
}

module.exports = maxChar;
