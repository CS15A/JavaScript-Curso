//for(inicio; condição; incremento)
for(let i = 1; i <= 5; i++) {
    console.log(`Produto ${i}`);
}

//for of: percorrer uma lista
const pecas = ["Pneu", "Filtro", "Correia"];
for(const peca of pecas) {
    console.log(peca);
}

//while
let stock = 5;
while(stock > 0) {
    console.log('Vendido! Stock restante: ${stock - 1}');
    stock--;
}
console.log