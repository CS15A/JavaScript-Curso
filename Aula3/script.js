//Tipos de dados
//String - texto " "
const nome = "Filtro de óleo";
const cidade = 'Maputo';
const frase = 'Loja: ${nome}';

//Number - números
const preco = 850;
const iva = 0.17;

//Boolean - verdadeiro ou falso
const disponivel = true;
const esgotado = false;

//null - vazio
const desconto = null;

//undefined - ainda não tem valor
let proximo;

//Strings antigas vs modernas
const produto = "Amortecedor";
const preco = 3200;

    //Forma antiga
    console.log("Produto: " +produto+ "-" +preco+ " MT");

    //Forma moderna
    console.log('Produto: ${produto} - ${preco} MT');
