"use strict";


/** 1. printIndices */
const printIndices = (items) => {
	// Replace this with your code
  // for index in array
  //    print array[index], index
  for (const i in items) {
    console.log(items[i], i);
  }
};


/** 2. everyOtherItem */
const everyOtherItem = (items) => {
	// Replace this with your code
  //start at idx 0 
  //go through every other index 
  //push to new list 
  const results = []
  for (const i in items) {
    if (i % 2 === 0){
      results.push(items[i]);
    }
  }
  console.log(results);
};



/** 3. smallestNItems */
const smallestNItems = (items, n) => {
	// Replace this with your code

  // Method 1
  // function compare(a, b) {
  // return a - b;
  // }
  // items.sort(compare);

  // Method 2
  items.sort((a, b) => a - b);
  // sort items smallest -> largest using either method 1 or 2 above
  // .slice(0,n) 
  // items.reverse()
  const slice = items.slice(0, n);
  slice.reverse();
  console.log(slice);

};

const nums = [1, 30, 4, 21, 100000];
smallestNItems(nums, 3)

//KIDS GAME- SKILLS 2- DICTIONARIES//

const kidsGame = (names) => {

  const output = [names.shift()];
  const firstLetterToWords = {};

  // Iterate over the whole list
  // grab each word and index into the first letter: word[0]
  // if it's already in the dictionary, dictionary[letter] += word
  // otherwise, if it's not in dict, dictionary[letter] = word

  for (const name of names) {
    if (! firstLetterToWords[name[0]]) {
      firstLetterToWords[name[0]] = [name];
    } else {
      firstLetterToWords[name[0]].push(name);
    }
  } 
  // let i = 0
  while (true) {
    let arrayIdx = output.length - 1;
    let letterIdx = output[arrayIdx].length - 1;
    let startLetter = output[arrayIdx][letterIdx];

  }

};