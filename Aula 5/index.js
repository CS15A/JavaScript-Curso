//type conversion: change the datatype of a value to another (strings, number, boolean)
let age = window.prompt("How old are you?");
age += 1;
console.log(age);

let x = "pizza";
let y = "pizza";
let z = "pizza";
x = number(x);
y = string(y);
z = boolean(z);
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);