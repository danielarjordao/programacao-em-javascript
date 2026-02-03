// Exericio em base na const de produtosEmOferta:
// 1. filtre os produtos que estão em oferta
// 2. filtre os produtos que estão em oferta e custe mais de 10 euros;

const produtosEmOferta = [
    {nome: "Camisa", preco: 60, oferta: false},
    {nome: "Meias", preco: 10, oferta: true},
    {nome: "Boné", preco: 25, oferta: true}
];


const emOferta = produtosEmOferta.filter(emOferta => emOferta.oferta);

const emOfertaEMaiorQue10 = produtosEmOferta.filter(function(produto) {
    produtosFiltrados = [];
    if (produto.oferta && produto.preco > 10) {
        return produtosFiltrados.push(produto);
    }
    return
})

console.log("Produtos em oferta:", emOferta);
console.log("Produtos em oferta e maior que 10 euros:", emOfertaEMaiorQue10);

