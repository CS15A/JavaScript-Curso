/*
string methods - allow to manipulate and work with text(strings)
*/
let userName = " BroCode  ";

console.log(userName.charAt(0));
console.log(userName.indexOf("r"));
console.log(userName.length);
console.log(userName.trim);
console.log(userName.toUpperCase);
console.log(userName.repeat(3));
console.log(userName.startsWith(" "));
console.log(userName.endsWith(" "));
console.log(userName.includes(" "));

let phoneNumber = "123-456-789";
console.log(phoneNumber);
phoneNumber = phoneNumber.replaceAll("-", ".");
console.log(phoneNumber);
phoneNumber = phoneNumber.padStart(15, "0");
console.log(phoneNumber);