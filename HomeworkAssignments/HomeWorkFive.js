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

//creat an emput variable to hold tha acroymn 
let acron = '';
//create an array variable that hold hte sentence 
const mysentence =  'ApPle banana cherRy';
//change the sentence to uppercase
let mySentUpper = mysentence.toLowerCase();
//split the array using split() function save this epression to another variabe
let mySentenceSplit = mySentUpper.split(' ');
console.log(mySentenceSplit);
//let mysentence =  'yOU neVER WaLK alOne';


for (let counter = 0;  counter <= mySentenceSplit.length - 1 ; counter ++) {
    // console.log(`First counter in for loop ${counter}`);
    let lowerCasePart = mySentenceSplit[counter].substring(1,); 
    let upperCasePart =  mySentenceSplit[counter].substring(0,1); 
    let titleCaseWord = lowerCasePart + upperCasePart;

    acron = acron + titleCaseWord;


    console.log(`First letter of  the word ${acron}`);

   
}



// for (let counter = 0;  counter <= mySentenceSplit.length - 1 ; counter ++) {
//    // console.log(`First counter in for loop ${counter}`);
//     acron = acron + mySentenceSplit[counter].substring(0,1); 
//     console.log(`Second counter in for loop ${counter}`);
//     console.log(`mySentenceSplit counter in for loop ${mySentenceSplit[counter]}`);

// 

















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

/**
 * Q3:
 * Find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */

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