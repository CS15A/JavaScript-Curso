/*
string slicing - creating a substring from a portion of another string
string.slice(start, end)
 */

const fullName = "Bro code";
let firstName = fullName.slice(0,3);
let lastName = fullName.slice(4,8);
let negativeIndex = fullName.slice(-2);
let index = fullName.slice(0, fullName.indexOf(" "));
let after = fullName.slice(fullName.indexOf("Bro"));
console.log(firstName);
console.log(lastName);
console.log(negativeIndex);
console.log(index);
console.log(after);
