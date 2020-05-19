"use strict";


// 1. printIndices
function printIndices(items) {
  for (const idx in items) {
    console.log(`${items[idx]} ${idx}`)
  }
}

printIndices([1, 'hello', true])


// 2. everyOtherItem
function everyOtherItem(items) {
  const result = []
  for (let i=0; i<items.length; i++) {
    if (i % 2 === 0){
        result.push(items[i])
    }
  }
  // for (let i=0; i<items.length; i+=2) {
  //   result.push(items[i])
  // }
  console.log(result)
}

everyOtherItem([4, true, false, 'sandwich', [3, 4, 7]])


// 3. smallestNItems
function smallestNItems(items, n) {
  items.sort((a, b) => a - b)
  const smallestNItems = items.slice(0, n)
  const smallestNItemsReversed = []
  for (let i=n-1; i>=0; i--) {
    smallestNItemsReversed.push(smallestNItems[i])
  }
  console.log(smallestNItemsReversed)
}

smallestNItems([4, 600, 3, 100, 1], 3)