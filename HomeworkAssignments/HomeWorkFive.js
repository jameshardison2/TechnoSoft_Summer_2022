// Due date: Mon (July 18) eod

/**
 * Q1:
 * Convert any sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 
 */

console.log('\n Answer to question 1\n');
//creat an emput variable to hold tha acroymn 
let acron = '';
//create an array variable that hold hte sentence 
const mysentence =  'ApPle banana cherRy';
//change the sentence to uppercase
let mySentUpper = mysentence.toLowerCase();
//split the array using split() function save this epression to another variabe
let mySentenceSplit = mySentUpper.split(' ');
console.log(`Original Sentence: ${mySentenceSplit}`);
//let mysentence =  'yOU neVER WaLK alOne';


for (let counter = 0;  counter <= mySentenceSplit.length - 1 ; counter ++) {
    // console.log(`First counter in for loop ${counter}`);
    let lowerCasePart = mySentenceSplit[counter].substring(1,); 
    let upperCasePart =  mySentenceSplit[counter].substring(0,1).toUpperCase();
    let titleCaseWord =  upperCasePart + lowerCasePart + ' ';
    acron = acron + titleCaseWord;
}

console.log(`Title Case is:  ${acron}`);


console.log(`\n /////////////////////////////////////`)

console.log('\n Answer to question 2 \n');
/**
 * Q2:
 * Reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */

// Create an empty variable to hold the reverse sentence.
let reverseSentence = '';

// Create a variable to hold the initial sentence.
 let forwardSentence = 'have a great day';

//Split the sentence, this allow me to at the reverse array function.
let splitSentenceTwo = forwardSentence.split(' ');
console.log(`Original Split sentence: ${splitSentenceTwo}`)

//  Create at a loop to print the Sentence in revese
for (let counterTwo = splitSentenceTwo.length - 1 ; counterTwo >= 0 ;  counterTwo--) {
    //console.log(`the counter ${counterTwo}`);
    let reversedElements= splitSentenceTwo[counterTwo];
    //console.log(`the word first ${reversedElements}`);
    reverseSentence = reverseSentence + reversedElements;
    //console.log(`My sentence in reverse, inside of for loop: ${reverseSentence}`)
 };

//print the  results
console.log(`My sentence in reverse outside of for loop: ${reverseSentence}`)



console.log(`\n /////////////////////////////////////`)

console.log('\n Answer to question 3 \n');

/**
 * Q3:
 * Find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */
 let finalCount = 0;
 let myArray =  [1, 1, 1, 2, 3, 1, 2];
 for (counter = 0 ; counter <= myArray.length -1 ; counter ++)
 {
    finalCount = finalCount + myArray[counter];
 }
 console.log(finalCount);
 
 


 console.log(`\n /////////////////////////////////////`)

 console.log('\n Answer to question 4 \n');

/**
 * Q4:
 * Find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */



 //array variable
 let oriArray = [1, 1, 1, 2, 3, 1, 2];
for (counter = 0 ; counter <= myArray.length -1 ; counter ++){
finalCount = finalCount + myArray[counter];
}
let myAverage = finalCount/oriArray.length;
console.log(`The average is: ${myAverage}`);
