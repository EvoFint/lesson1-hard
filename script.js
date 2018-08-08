/* Task 1 */
var num = 33721;
var numSumm = eval(num.toString().split('').join('+'))

console.log(numSumm);

/* Task 2 */
var numSummPower = Math.pow(numSumm, 3);

console.log(numSummPower.toString().substring(0,2));