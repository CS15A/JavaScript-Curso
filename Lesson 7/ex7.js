// Funções para o site
function formatarPreco(valor) {
    return `${valor.toLocaleString("pt-PT")} MT`;
}

function calcularIVA(preco, taxa=17) {
    return preco * (taxa/100);
}

function verificarStock(quantidade) {
    if(quantidade === 0) 
        return "Esgotado";
    if(quantidade < 5) 
        return `Últimas ${quantidade} unidades`; // ← backtick
    return "Disponível";
}

console.log(formatarPreco(3200));
console.log(`IVA: ${formatarPreco(calcularIVA(3200))}`); // ← backtick
console.log(verificarStock(0));
console.log(verificarStock(3));
console.log(verificarStock(12));