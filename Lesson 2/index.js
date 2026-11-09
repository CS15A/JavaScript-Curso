/*
Variable = a container that stores a value.
1.declaration let x;
2.assignment x = 100;
*/

let x;
x = 100;
console.log(x);

//Numbers
let age = 25;
let price = 10.99;
let gpa = 2.1;
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`You gpa is: ${gpa}`);

//Strings
let firstName = "Bruno";
let favouriteFood = "pizza";
console.log(typeof firstName);
console.log(`Your name is ${firstName}`);
console.log(`You like ${favouriteFood}`);

//Booleans
let online = true;
let forSale = true;
console.log(typeof online);
console.log(`Bruno is online: ${online}`);
console.log(`Is this car for sale: ${forSale}`);

let fullName = "Bruno code";
let age2 = 25;
let student = false;
document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${student}`;