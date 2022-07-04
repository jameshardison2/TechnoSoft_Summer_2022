
 /* Topic: Convert temperature values into different units
 * Due date: Due Date: Jul-3 EOD
 * From: James Hardison II
 * Refer link for formula:  https://www.rapidtables.com/convert/temperature/fahrenheit-to-celsius.html
 */



/** Convert F -> C:
Formula: T(°C) = (T(°F) - 32) × 5/9
*/

let fTemp1 = 85;
let cTemp1 = (fTemp1 - 32) * 5/9;
console.log(`\n${fTemp1}°F is equals to ${cTemp1}°C`);



 /**Convert F -> K:
  * Formula: T(K) = (T(°F) + 459.67)× 5/9
  */

 fTemp1
 let kTemp1 = (fTemp1 + + 459.67) * 5/9;
 console.log(`\n${fTemp1}°F is equals to ${kTemp1}°K`);


 /**Convert C -> F:
  * Formula: T(°F) = T(°C) × 9/5 + 32
  */
cTemp1
fTemp1 = cTemp1 * 9/5 + 32;
console.log(`\n${cTemp1}°C is equals to ${fTemp1}°F`);


 /**Convert C -> K:
  * Formula: T(K) = T(°C) + 273.15
  */
cTemp1
kTemp1 = cTemp1+ 273.15;
console.log(`\n${cTemp1}°C is equals to ${kTemp1}°K`);



 /**Convert K -> F:
  * Forumula: T(°F) = T(K) × 9/5 - 459.67
  */
kTemp1
fTemp1 = kTemp1 * 9/5 - 459.67;
console.log(`\n${kTemp1}°K is equals to ${fTemp1}°F`);



/**Convert K -> C:
 * Formula: T(°C) = T(K) - 273.15
 */
kTemp1
cTemp1 = kTemp1 - 273.15;
console.log(`\n${kTemp1}°K is equals to ${cTemp1}°C`);




