/* Task 1 */
var num = 33721;
var numMult = eval(num.toString().split('').join('*'));

console.log(numMult);

/* Task 2 */
var numMultPower = Math.pow(numMult, 3);

console.log(numMultPower.toString().substring(0,2));
