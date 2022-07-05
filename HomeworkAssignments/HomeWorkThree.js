
 /* Topic: String functions.
 * Due Date : Tuesday Jul-05
 * From: James Hardison II
 */



/**
 * if the length of sentence1 is greater than or equals to 10
 *      assign 15 in result1
 * otherwise
 *      assign 25 in result1
 */
const sentence1 = 'Hello dear, how are you doing?';
let result1 = 0;
result1 = sentence1.length >= 10 ? 15 : 25;
console.log(`\nFirst Question:`)
console.log(`result1 -> ${result1}`);



/**
 * replace all instances of a/A with 'Alpha', print the result in console
 */
const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
let sentenceResult = sentence2.replace(/a/gi,'Alpha');
console.log(`\nSecond Question:`);
console.log(`The updated sentece is: ${sentenceResult}`);




/**
 * print the result in console:
 */
console.log(`\nThird Question:`); 
const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";


//1. the length of sentence-3
console.log(`1. What is the length of sentence-3? `);
let sentenceThreeLength = sentence3.length;
console.log(sentenceThreeLength);

//2. does sentence-3 starts with 'health' (ignore cases)
console.log(`\n2. Does sentence-3 starts with 'health'? (ignore cases)`);
let sentenceThreeStrWithHeaIgno = sentence3.startsWith('health');
console.log(sentenceThreeStrWithHeaIgno);

//3. does sentence-3 contains with 'Body' (ignore cases)
console.log(`\n3. Does sentence-3 contains with 'Body'? (ignore cases)`);
let sentence3ContainBody = sentence3.includes('Body');
console.log(sentence3ContainBody);

//4. index of 'Body' in sentence3  (ignore cases)
console.log(`\n4. What is the index of 'Body' in sentence3?  (ignore cases)`);
let sentenceThreeIndBody = sentence3.indexOf('Body');
console.log(sentenceThreeIndBody);


//5. the last-character in sentence-3
console.log(`\n5. What is the last-character in sentence-3?`);
let lastIndexofSentThree = sentence3.charAt(sentence3.length -1);
console.log(lastIndexofSentThree);


//6. word 'Body' is present only once. (true or false)
console.log(`\n6. Is word 'Body' is present only once? (true or false)`);
let sentence3ContainBodyOnlyOnce = sentence3.includes('Body',)
let firstOcc = sentence3.indexOf('Body');
let lastOcc = sentence3.lastIndexOf('Body')
let presentOnlyOnce = firstOcc === lastOcc; 
console.log(presentOnlyOnce);