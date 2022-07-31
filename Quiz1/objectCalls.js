const Class1 = require('./ClassOne');
const Class2 = require('./ClassTwo');
const Class2 = require('./ClassThree');
const ClassOne = require('../TechnoSoft_Summer_2022/Quiz1/class1');
const ClassThree = require('../TechnoSoft_Summer_2022/Quiz1/class3');


originalArray1 = [21, 32, 12, 43, 45, 65, 12];
const c1 = new ClassOne();
console.log(c1.removeNumber(originalArray1));


originalArray2 = [1, 1, 2, 4, 3, 6, 4, 7, 9];
const c2 = new ClassTwo();
console.log(c2.smallestPositive(originalArray2));


// sl= 60 , us = 70 -> points = 2
const c3 = new ClassThree(60, 70);
console.log(c2.smallestPositive(originalArray3));

