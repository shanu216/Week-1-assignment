/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let obj1 = {};
  let obj2 = {};
  let count = 0;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1.length !== str2.length) {
    return false;
  }
  else {
    for (let i = 0; i < str1.length; i++) {
      obj1[str1[i]] = obj1[str1[i]] ? obj1[str1[i]] + 1 : 1;
      obj2[str2[i]] = obj2[str2[i]] ? obj2[str2[i]] + 1 : 1;
    }

    let keys = Object.keys(obj1);

    for (let key of keys) {
      if (obj1[key] === obj2[key]) {
        count = count + 1;
      }
    }
  }
  if (count == str1.length) {
    return true;
  }
  return false;
}

module.exports = isAnagram;
