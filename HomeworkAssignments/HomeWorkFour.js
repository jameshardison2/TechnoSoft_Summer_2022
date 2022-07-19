/**
 * Q1:
 * Print the length of the country name (without using String-length property)
 */

 let countryName = 'Angola';
 let countryNameArray = countryName.split('');
 let lengthOfCountryName = countryNameArray.length;
 console.log(`The length of the country name is: ${lengthOfCountryName}`);
 console.log('///////////////////////////////////////');

 /**
  * Q2:
  * Count the number of words in the sentence
  */
 const sentence = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
 let splitWords = sentence.split(" ");
 let numberOfWords = splitWords.length;
 console.log(`The number of words in the sentence is: ${numberOfWords}`);
 console.log('///////////////////////////////////////');

 /**
  * Q3:
  * Convert any 4-word sentence into Titlecase
  * 'have a great day'   ->  'Have A Great Day'
  * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
  */
 

const originalSentence = 'have a great day';


//covert the sentence to lowercase
let lowercaseSentence = originalSentence.toLowerCase();

//Split the sentence
let mySplitSentence = lowercaseSentence.split(' ');

//Have
let myHLetter = mySplitSentence[0].charAt(0);
let myHUpperCase = myHLetter.toUpperCase();
console.log(`The capitol letter: ${myHUpperCase}`);
let myAveLower = mySplitSentence[0].slice(1);
console.log(`The last letters: ${myAveLower}`);
let myHaveWord =  myHUpperCase + myAveLower;
console.log(`Title case hello: ${myHaveWord}`);

// A
let aLetter = mySplitSentence[1].charAt(0);
let myAupperCase = aLetter.toUpperCase();
console.log(`The capitol letter A: ${myAupperCase}`);

//great
let myGLetter = mySplitSentence[2].charAt(0);
let myGLetterUpperCase = myGLetter.toUpperCase();
console.log(`The capitol letter: ${myGLetter}`);
let myReat = mySplitSentence[2].slice(1);
console.log(`The last letters: ${myReat}`);
let myGreatWord =  myGLetterUpperCase + myReat;
console.log(`Title case Great: ${myGreatWord}`);

//Day
let myDletter = mySplitSentence[3].charAt(0);
let myDcapitolized = myDletter.toUpperCase();
console.log(`The capitol letter: ${myDcapitolized}`);
let myay = mySplitSentence[3].slice(1);
console.log(`The last letters: ${myay}`);
let myDayWord =  myDcapitolized + myay;
console.log(`Title case Day: ${myDayWord}`);


let titleCaseSentence = myHaveWord + ' '+ myAupperCase +' '+ myGreatWord +' '+ myDayWord;
console.log(`The title case word is: ${titleCaseSentence}`);

console.log('///////////////////////////////////////');




 /**
  * Q4:
  * Create abbreviation for any 4-word sentence
  * 
  * 'have a great day'   ->  'HAGD'
  * 'YOu lIVe ONlY ONcE' ->  'YLOO'
  * 'yOu neVER WaLK alOne'   ->  'YNWA'
  * 
  */



// Sentence
const originalSentence2 = 'have a great day';

//covert the sentence to lowercase
let lowercaseSentence2 = originalSentence2.toLowerCase();

//Split the sentence
let mySplitSentence2 = lowercaseSentence.split(' ');

//Have
let myHLetter2 = mySplitSentence[0].charAt(0);
let myHUpperCase2 = myHLetter.toUpperCase();

// A
let aLetter2 = mySplitSentence[1].charAt(0);
let myAupperCase2 = aLetter.toUpperCase();
console.log(`The capitol letter A: ${myAupperCase}`);

//Great
let myGLetter2 = mySplitSentence[2].charAt(0);
let myGLetterUpperCase2 = myGLetter.toUpperCase();

//Day
let myDletter2 = mySplitSentence[3].charAt(0);
let myDcapitolized2 = myDletter.toUpperCase();



let titleCaseSentence2 = myHUpperCase + myAupperCase + myGLetterUpperCase + myDcapitolized;
console.log(`The title case word is: ${titleCaseSentence2}`);


 
 
 