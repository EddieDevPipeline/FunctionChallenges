//Task 1
function findLongestWord(str) {
  // Check if str is indeed a string
  if (typeof str !== "string") {
    console.error("Provided argument is not a string:", str);
    return "";
  }

  let words = str.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

const exampleSentence = "This string has several different values";
console.log(findLongestWord(exampleSentence));

console.log(findLongestWord(["Not", "a", "string"]));

//Task 2
function swapFirstLast(string) {
  if (string.length < 2) {
    return string;
  }

  let firstCharacter = string[0];
  let lastCharacter = string[string.length - 1];
  let middlePart = string.substring(1, string.length - 1);

  let swappedString = lastCharacter + middlePart + firstCharacter;

  return swappedString;
}

let myString = "ryan";
let result = swapFirstLast(myString);
console.log(result);

//Task 3
function sumOfNumbers(numbersArray) {
  const sum = numbersArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return sum;
}

const numbers = [1, 2, 3];
const totalSum = sumOfNumbers(numbers);
console.log(totalSum);

//Task 4
function alternateCombine(array1, array2) {
  let combinedArray = [];
  let maxLength = Math.max(array1.length, array2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < array1.length) {
      combinedArray.push(array1[i]);
    }
    if (i < array2.length) {
      combinedArray.push(array2[i]);
    }
  }

  return combinedArray;
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const resultTwo = alternateCombine(array1, array2);
console.log(result);

//Task 5
function findLongestWord(str) {
  if (typeof str !== "string") {
    console.error("Input must be a string.");
    return "";
  }

  const words = str.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

const exampleSentenceTwo = "This string has several different values";
console.log(findLongestWord(exampleSentenceTwo));

//Task 6
function sortLettersInString(text) {
  let onlyLetters = text.replace(/[^a-zA-Z]/g, "").toLowerCase();

  let lettersArray = onlyLetters.split("");

  let sortedLettersArray = lettersArray.sort();

  let sortedText = sortedLettersArray.join("");

  return sortedText;
}

let inputText = "Hi there";
let sortedText = sortLettersInString(inputText);
console.log(sortedText);

//Task 7
function extractItemsFromArray(originalArray, indicesToExtract) {
  let extractedItems = [];

  for (let i = 0; i < indicesToExtract.length; i++) {
    let index = indicesToExtract[i];
    extractedItems.push(originalArray[index]);
  }

  return extractedItems;
}

let originalList = ["a", "b", "c", "d"];
let indexesWeWant = [1, 3];
let newList = extractItemsFromArray(originalList, indexesWeWant);
console.log(newList);

//Task 8
let user = {
  userName: "Ryan",
  activeStatus: "away",
};

const login = (user) => {
  user.activeStatus = "active";
  return `${user.userName} is ${user.activeStatus}`;
};

// Example usage:
console.log(login(user));

//Task 9
function calculatePower(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  let total = 1;

  for (let i = 0; i < exponent; i++) {
    total = total * base;
  }

  return total;
}

console.log(calculatePower(4, 2));
