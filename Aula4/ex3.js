const precoPneu = 1800;
const precoFiltro = 450;
const precoAmortecedor = 3200;
const qtdPneus = 4;

const subTotal = (precoPneu * qtdPneus) + precoFiltro + precoAmortecedor;
const iva = subtotal * 0.17;
const total = subtTotal + iva;

console.log('SubTotal: ${subTotal} MT');
console.log('IVA(17%): ${iva.toFixed(2)} MT');
console.log('Total: ${total.toFixed(2)} MT');