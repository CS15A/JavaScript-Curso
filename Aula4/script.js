const preco = 1500;
const qtd = 3;

console.log(preco + qtd); //soma
console.log(preco * qtd); //multiplicação
console.log(preco / 2); //divisão
console.log(preco - 200); //subtração
console.log(preco % 7); //resto da divisão
console.log(preco ** 2); //potenciação(numero elevado a outro)

console.log(5 === 5); //igualdade
console.log(5 !== 3); //diferente
console.log(10 > 5); //maior que
console.log(3 < 1); //menor que
console.log(5 >= 5); //maior ou igual

//Importante: usa sempre === e não ==
console.log("5" == 5); //perigoso(true)
console.log("5" === 5); //seguro(false)