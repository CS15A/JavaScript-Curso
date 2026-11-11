/* How to acess user input */

/* Easy way
let userName;
userName = window.prompt("What's your username?");
console.log(username);
*/

//Professional way
document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
}