 /**
  * Create a function to return the points to be marked against for over speeding.
  * 
  * For every 5mph over the speed limit, 1 point should be marked
  * 
  * function will:
  *      take userSpeed and speedLimit as input
  *      return the number of points should be marked against the license.
 
  * sl= 60 , us = 70 -> points = 2
  */

class Class3{

  pointsMarkedAgainst (userSpeed, speedLimit){

  if (userSpeed >= speedLimit){
     overlimitBy = userSpeed - speedLimit;
     pointCalulation = overlimitBy / 5;}
     // if (pointCalulation === 1)
     }
} 


module.exports = Class3;
