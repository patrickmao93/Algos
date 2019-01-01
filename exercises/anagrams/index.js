// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return formatStr(stringA) === formatStr(stringB);
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   const strA = formatStr(stringA);
//   const strB = formatStr(stringB);
//   const mapA = mapStr(strA);
//   const mapB = mapStr(strB);

//   if (strA.length !== strB.length) {
//     return false;
//   }

//   return compareMaps(mapB, mapA);
// }

const formatStr = str => {
  return str
    .replace(/[^a-zA-Z]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join();
};

const mapStr = str => {
  const map = {};
  for (const char of str) {
    map[char] = map[char]++ || 1;
  }
  return map;
};

const compareMaps = (mapL, mapS) => {
  for (const key in mapL) {
    if (mapL[key] !== mapS[key]) {
      return false;
    }
  }
  return true;
};
