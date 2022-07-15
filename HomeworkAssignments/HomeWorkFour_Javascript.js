// Due date: Fri (Jul 15) eod

/**
 * Question 1:
 * create two variables, one is to store studentScore, and another one to store maxScore
 * based on the student percentage, print the grade.
 * 
 * Grade-A : 91-100% 
 * Grade-B : 81-90.99% 
 * Grade-c : 71-80.99%
 * Grade-D : 61-70.99%
 * Grade-E : 51-60.99%
 * Grade-F : less than 51%
 * 
 * if the studentScore is invalid or more than maxScore, print "Invalid student score"
 * 
 * studentScore = 40
 * maxScore = 50
 * 
 * Grade -> C
 */
let studentScore = 40;

let maxScore = 50;


 switch(studentScore) {
    case studentScore <= 100 && studentScore >= 91:
      console.log('Grade-A');
      break;
  
    case studentScore <= 100 && studentScore >= 91:
        console.log('Grade-B');
        break;
  
    case  studentScore <= 80.99 && studentScore >= 71:
        console.log('Grade-C');
        break;  
  
    case studentScore <= 70.99 && studentScore >= 61:
        console.log('Grade-D');
        break; 
  
    case  studentScore <= 60.99 && studentScore >= 51:
        console.log('Grade-E');
        break; 
  
    case  studentScore >= 51:
        console.log('Grade-F');
        break;
  
    case studentScore <=  maxScore:
        console.log('Invalid student score');
        break;
  
    default:
      console.log('Invalid student score');

 }


/**
 * Question 2:
 * Create a variable and store any value in it.
 * if the myNumber is divisible by 5, print "divisible by 5"
 * if the myNumber is divisible by 3, print "divisible by 3"
 * if the myNumber is divisible by 5 and by 3, print "divisible by 5 and 3"
 * if the myNumber is NOT divisible by 5 and by 3, print the value in myNumber
 *
 * 
 * myNumber = 19
 * 
 * 
 */

let myNumber = 19;

if (myNumber % 5 === 0 ) {
    console.log("divisible by 5");
    } else if (myNumber % 3 === 0) {
    console.log("divisible by 3");
    } else if (myNumber % 5 === 0 && myNumber % 3 === 0) {
    console.log("divisible by 5 and 3");
    } else {
    console.log(myNumber);
    }

/**
 * Question 3:
 * 
 * let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
 * 
 * if Earth is mentioned as first name in the array, print "Earth is mentioned in expected index"
 * otherwise add Earth as first name in the array, then print the entire array.
 * 
 */


let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];

if (planets.indexOf('Earth') !== -1
){
  console.log("Earth is mentioned in expected index");
}else
      planets.splice(0, 0, "Earth");
      console.log(planets);



/**
 * Questionn 4:
 * const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
 * 
 * if BASKETBALL is present not in index-2, print "BASKETBALL is mentioned in the sports array"
 * if BASKETBALL is present in index-2, print "BASKETBALL is present at index-2"
 * if BASKETBALL is NOT present in the array, replace index-2 value with BASKETBALL and print the value which you replaced.
 * 
 */
 const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];

if(sports[2] !== 'BASKETBALL'){ 
 console.log("BASKETBALL is mentioned in the sports array");
 }
 
else if (sports[2] === 'BASKETBALL'){
 console.log("BASKETBALL is present at index-2");
 }

else(sports.includes('BASKETBALL') !== true) 
 sports.fill('BASKETBALL', 2, 3);
 console.log(sports[2]);

 
 
 
 
 