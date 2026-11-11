/*
Arithmetic operator: + - * /
 */

let students = 30;

let add = students + 1;
let subtraction = students - 1;
let multiplication = students * 2;
let division = students / 2;
let exponent = students ** 3;
let modulo = students % 2;

console.log(students);
console.log(`Addition = ${add}`);
console.log(`Subtraction = ${subtraction}`);
console.log(`Multiplication = ${multiplication}`);
console.log(`Division = ${division}`);
console.log(`Exponent = ${exponent}`);
console.log(`Modulo = ${module}`);

/*
Operator precedence
1. parenthesis ()
2. exponents
3. multiplication & division & modulo
4. addition & subtraction
 */
let result = 1 + 2 * 3 + 4 ** 2;
console.log(result);
