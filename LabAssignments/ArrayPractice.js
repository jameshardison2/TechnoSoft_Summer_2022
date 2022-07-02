const sentence = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
//let num;




/**
 * 1) if String has more than one instance of 'b' (ignoring cases), assign 10 into num
 * otherwise assign 20 into num
 */

let result = (sentence >= 'b') ?  '10' : '20';

console.log(result);





 /** 2) Print the result for:
 *      the sentence-length is greater than 20
 *      the sentence has only one instance of body (ignoring cases)
 *      the sentence starts and ends with same character which is '.'
 *      in the sentence 'said' appears before the word 'body' word
 */


//The sentence-length is greater than 20

let sentenceLength = sentence.length;

let sentenceLengthBoolean = sentenceLength >= 20;

console.log(`the sentence-length is greater than 20? ${sentenceLengthBoolean}`);


//The sentence has only one instance of body (ignoring cases)











//console.log(`num -> ${num}`);