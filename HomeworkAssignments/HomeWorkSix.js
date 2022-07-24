// Due date: Thu (July 21) eod
/**
 * Q1:
 * Create a function to convert any sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 
 */

const  secondSentence =  'tHis iS My senTencE';
      
function sentToTitleCase(mySentence){
 console.log('\n Answer to question 1: \n');
 //creat an emput variable to hold tha acroymn 
 let acron = '';
 //create an array variable that hold hte sentence 
 //const mysentence =  'ApPle banana cherRy';
 //change the sentence to uppercase
 let mySentUpper = mySentence.toLowerCase();
 //split the array using split() function save this epression to another variabe
 let mySentenceSplit = mySentUpper.split(' ');
 //console.log(`Original Sentence: ${mySentenceSplit}`);
 //let mysentence =  'yOU neVER WaLK alOne';
 
 for (let counter = 0;  counter <= mySentenceSplit.length - 1 ; counter ++) {
     // console.log(`First counter in for loop ${counter}`);
     let lowerCasePart = mySentenceSplit[counter].substring(1,); 
     let upperCasePart =  mySentenceSplit[counter].substring(0,1).toUpperCase();
     let titleCaseWord =  upperCasePart + lowerCasePart + ' ';
     acron = acron + titleCaseWord;
 }
 return acron;
 //console.log(`Title Case is:  ${acron}`);
}
// Call the function:
console.log(sentToTitleCase(secondSentence));




/**
 * Q2:
 * Create a function to reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */
 console.log('\n Answer to question 2: \n');
let employeeDetails = 'Director of Sales and Marketing';

function sentenceReverse(stringName){ 
           
let reverseSentence = '';
let forwardSentence = 'have a great day';
let splitSentenceTwo = forwardSentence.split(' ');

for (let counterTwo = splitSentenceTwo.length - 1 ; counterTwo >= 0 ;  counterTwo--) {
    let reversedElements= splitSentenceTwo[counterTwo];
    reverseSentence = reverseSentence + reversedElements;
 };
//print the  results
return reverseSentence;

}

// Call the function
console.log(sentenceReverse(employeeDetails));

/**
 * Q3:
 * Create a function to find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */


console.log('\n Answer to question 3: \n');
 let myArray =  [1, 1, 1, 2, 3, 1, 2];

 //arrayTotal(myArray);

function arrayTotal(inputArray) {
    let total = 0;
    inputArray.forEach(function (value) {
        total = total + value;
    })
    //console.log(total);
    return total;
}

console.log(arrayTotal(myArray));




/** Q4:
* Create a function to find the average of the given array:
* 
* avg = totalOfValues/numberOfValues
*/

console.log('\n Answer to question 4: \n');

let nums = [1, 1, 1, 2, 3, 1, 2];

function findArrayAvg(inputArr){
    let total = 0;
    inputArr.forEach(function (value) {
        total = total + value;
    })
    return total/inputArr.length;
}
// Call the function
console.log(findArrayAvg(nums));
