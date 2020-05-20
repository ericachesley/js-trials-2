"use strict";


function wordsInCommon(words1, words2) {
  const set1 = new Set(words1);
  const set2 = new Set(words2);
  const common = new Set();

  for (const word of set1) {
    if (set2.has(word)) {
        common.add(word);
    }
  }

  return common;
}

console.log(wordsInCommon(['Python', 'Python', 'Python'],
                          ['Lizard', 'Turtle', 'Python']));

console.log(wordsInCommon(['cheese', 'cheese', 'cheese', 'cake'],
                          ['cheese', 'hummus', 'beets', 'cake']));

console.log(wordsInCommon(['lamb', 'chili', 'cheese'],
                          ['cake', 'ice cream']));


function kidsGame(names) {

  let currentWord = names[0];
  const output = [currentWord];
  names = names.slice(1);

  let firstLetterToWords = {};

  for (const name of names) {
    if (! firstLetterToWords.hasOwnProperty(name[0])) {
        firstLetterToWords[name[0]] = [name];
    } else {
        firstLetterToWords[name[0]].push(name);
    }
  }

  while (true) {
    const startLetter = currentWord[currentWord.length-1];
    if (! firstLetterToWords.hasOwnProperty(startLetter) ||
        firstLetterToWords[startLetter].length === 0) {
        break;
    }
    currentWord = firstLetterToWords[startLetter][0];
    firstLetterToWords[startLetter] = firstLetterToWords[startLetter].slice(1);
    output.push(currentWord);
  }
  return output;
}


console.log(kidsGame(["bagon", "baltoy", "yamask", "starly",
                      "nosepass", "kalob", "nicky", "booger"]));

console.log(kidsGame(["apple", "berry", "cherry"]));

console.log(kidsGame(["noon", "naan", "nun"]));


