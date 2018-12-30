// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((reversed, letter) => letter + reversed, "");
}

console.log(reverse("13123"));

module.exports = reverse;

// const arr = str.split("");
// let reverse = "";
// arr.forEach(letter => {
//   reverse = letter + reverse;
// });
// return reverse;
