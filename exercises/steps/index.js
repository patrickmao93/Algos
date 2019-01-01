// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 1, stair = '') {
  if (n === 0) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }
}

module.exports = steps;


// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     let pounds = "#".repeat(i);
//     let spaces = " ".repeat(n - i);
//     console.log(pounds + spaces);
//   }
// }