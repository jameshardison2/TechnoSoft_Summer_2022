/**
 * Q1:
 * Print the length of the country name (without using String-length property)
 */

 let countryName = 'Angola';
 let countryNameArray = countryName.split('');
 let lengthOfCountryName = countryNameArray.length;
 console.log(`The length of the country name is: ${lengthOfCountryName}`);

 /**
  * Q2:
  * Count the number of words in the sentence
  */
 const sentence = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
 let splitWords = sentence.split(" ");
 let numberOfWords = splitWords.length;
 console.log(`The number of words in the sentence is: ${numberOfWords}`);

 /**
  * Q3:
  * Convert any 4-word sentence into Titlecase
  * 'have a great day'   ->  'Have A Great Day'
  * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
  */
 
 
let  originalSentence = 'have a great day';

//split the sentennce
let mySplitSentence = originalSentence.split(' ');

//
firstWord = mySplitSentence[0].length === 4 ? console.log(firstWord) : false ;

secondWord = mySplitSentence[1].length === 4 ? console.log(secondWord) : false ;

thirdWord = mySplitSentence[2].length === 4 ? console.log(thirdWord) : false ;

fouthWord = mySplitSentence[3].length === 4 ? console.log(fouthWord) : false ;



 /**
  * Q4:
  * Create abbreviation for any 4-word sentence
  * 
  * 'have a great day'   ->  'HAGD'
  * 'YOu lIVe ONlY ONcE' ->  'YLOO'
  * 'yOu neVER WaLK alOne'   ->  'YNWA'
  * 
  */



 
 
 