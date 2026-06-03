//Listar produtos com preco
const produtos = [
    {nome: "Pneu ATV", preco: 1800},
    {nome: "Filtro de Ar", preco: 350},
    {nome: "Amortecedor", preco: 3200},
    {nome: "Correia", preco: 280},
];

console.log("=== Catálogo MOZ MotorParts ===");
for(const p of produtos) {
    const comIva = (p.preco * 1.17).toFixed(0);
    console.log('${p.nome}: ${p.preco} MT (c/IVA: ${comIVA} MT)');
}