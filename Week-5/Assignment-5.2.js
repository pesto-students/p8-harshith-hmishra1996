function isVowel(char) {
  return "AEIOU".includes(char);
}
function vowelCount(word) {
  const myMap = new Map();
  for (let char of word) {
    let updatedCharCase = char.toUpperCase();
    if (isVowel(updatedCharCase)) {
      if (myMap.has(updatedCharCase)) {
        myMap.set(updatedCharCase, myMap.get(updatedCharCase) + 1);
      } else {
        myMap.set(updatedCharCase, 1);
      }
    }
  }
  return myMap;
}
str = "i HAve no idea";
console.log(vowelCount(str));
