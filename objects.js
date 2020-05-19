"use strict";


// 1. countWords
function countWords(phrase) {
  const wordCounts = {};
  const words = phrase.split(' ');

  for (const word of words) {
    if (wordCounts.hasOwnProperty(word)) {
        wordCounts[word] += 1;
    } else {
        wordCounts[word] = 1;
    }
  }
  return wordCounts;
}


console.log(countWords('hello hello hello world'))


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
    const melonPrices = {
        2.50: ['Cantaloupe', 'Honeydew'],
        2.95: ['Watermelon'],
        3.25: ['Musk', 'Crenshaw'],
        14.25: ['Christmas']
    };

    if (! melonPrices.hasOwnProperty(price)) {
        return;
    }

    return melonPrices[price].sort();
}

console.log(getMelonsAtPrice(3.25));
console.log(getMelonsAtPrice(3.28));
