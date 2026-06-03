const stock = 3;

if(stock === 0) {
    console.log("Esgotado");
} else if(stock <= 5) {
    console.log('Stock baixo: ${stock} unidades');
} else {
    console.log('Em stock: ${stock} unidades');
}

//if else em uma linha
const stock = 8;
//codicao ? seTrue : seFalso
const estado = stock > 0 ? "Disponível": "Esgotado";
console.log(estado);  //Disponível

//Util para classes CSS dinamicas:
const classe = stock < 5 ? "stock-baixo": "stock-ok";