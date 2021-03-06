/*
How to find numbers of words | JavaScript Tutorial | LetCode
In this video, we'll find the number of words that are there in the given string in 3 different approaches.
*/

const str = "hey, happy to see you here";

// way 1 - simplest using split

const words = str.split(" ");
console.log(words.length);

// way 2 - apply regex

const myWords = str.trim().split(new RegExp("\\s+"));
console.log(myWords.length);

// using loop -  way 3
let counter = 0;
for (let i = 0; i < str.length; i++) {
  if (str.charAt(i) == " ") {
    counter++;
  }
}
console.log(counter);
