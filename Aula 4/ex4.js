const total = 5500;
let desconto = 0;
let mensagem = "";

if(total >= 10000) {
    desconto = 0.20;
    mensagem = "Desconto VIP 20%";
} else if(total >= 5000) {
    desconto = 0.10;
    mensagem = "Desconto 10%";
} else {
    mensagem = "Sem desconto";
}

const final = total * (1 - desconto);
console.log(mensagem);
console.log(`Total: ${total} MT - ${final.toFixed(0)} MT`);