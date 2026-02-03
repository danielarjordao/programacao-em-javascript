/*
============================================================
Exercício Prático: Sistema de Gestão de Produtos
============================================================
Objetivo: Trabalhar com criação, acesso, modificação e remoção
de propriedades de objetos, além de manipulação de arrays de objetos.
============================================================
*/

/*
PARTE 1: Criar o objeto produto
Crie um objeto chamado 'produto' com as seguintes propriedades:
- id: 101
- nome: "Smartphone Samsung"
- preco: 599.99
- categoria: "Eletrónicos"
- emStock: true
*/

const produto = {
	id: 101,
	nome: "Smartphone Samsung",
	preco: 599.99,
	categoria: "Eletrónicos",
	emStock: true,
};

console.log("Produto criado:", produto);

/*
PARTE 2: Aceder a uma propriedade
Aceda e imprima no console a propriedade 'nome' do produto
Resultado esperado: "Nome do produto: Smartphone Samsung"
*/

console.log("Nome do produto:", produto.nome);

/*
PARTE 3: Adicionar nova propriedade
Adicione uma nova propriedade ao objeto produto:
- desconto: 10 (representando 10% de desconto)
*/

produto.desconto = 0.10;

console.log("Desconto adicionado:", produto);

/*
PARTE 4: Editar uma propriedade existente
O produto entrou em promoção! Altere o valor da propriedade 'desconto' para 25
*/

produto.desconto = 0.25;

console.log("Desconto atualizado:", produto);

/*
PARTE 5: Remover uma propriedade
A promoção acabou. Remova a propriedade 'desconto' do objeto
*/

delete produto.desconto;

console.log("Produto após remover desconto:", produto);

/*
PARTE 6: Trabalhar com array de objetos
Agora você tem um inventário com vários produtos.
Crie um array chamado 'inventario' com 3 objetos de produtos:
*/

const inventario = [
	{ id: 103, nome: "Televisor LG", preco: 799.99, categoria: "Eletrónicos", emStock: false },
	{ id: 102, nome: "portátil Dell", preco: 1299.00, categoria: "Informática", emStock: true },
	{ id: 104, nome: "Tablet Apple", preco: 499.99, categoria: "Informática", emStock: true },
];

/*
PARTE 7: Aceder a um objeto específico dentro do array
Aceda ao segundo produto (portátil Dell) e imprima o seu nome e preço
Resultado esperado: "Produto: portátil Dell - Preço: 1299€"
*/

console.log(`Produto: ${inventario[1].nome} - Preço: ${inventario[1].preco}€`);

/*
PARTE 8: Modificar propriedade de um objeto dentro do array
O portátil Dell teve redução de preço para 1099.00
Altere o preço do produto no array
*/

inventario[1].preco = 1099.00;

console.log(`Produto com preço atualizado:`, inventario[1]);

/*
PARTE 9: Adicionar propriedade a um objeto dentro do array
Adicione a propriedade 'marca: "Dell"' ao segundo produto do inventário
*/

inventario[1].marca = "Dell";

console.log("Produto com marca adicionada:", inventario[1]);

/*
EXTRA - O próximo exercicio envole assunto que eu não tratei,
portanto, podem ignorar se quiserem. Para resolver, consegue resolver sem função,
Podem ainda utilizar o material complementar que explico sobre o método filter do array e os
métodos de string.

PARTE 10: Desafio Final - Criar função de busca
Crie uma função que receba o array de inventário e um id,
e retorne o produto correspondente.
Se não encontrar, retorne a mensagem: "Produto com id ${id} não encontrado"
*/

function buscarProdutoPorId(inventario, id) {
	const produtoEncontrado = inventario.find(function(produto) {
		return produto.id === id;
	});

	if (produtoEncontrado) {
		return produtoEncontrado;
	} else {
		return `Produto com id ${id} não encontrado`;
	}
}

console.log("Buscar produto id 102:", buscarProdutoPorId(inventario, 102));
console.log("Buscar produto id 999:", buscarProdutoPorId(inventario, 999));

/*
============================================================
RESULTADO FINAL ESPERADO (após completar todos os passos):
============================================================
Produto criado: { id: 101, nome: 'Smartphone Samsung', preco: 599.99, categoria: 'Eletrónicos',
emStock: true }
Nome do produto: Smartphone Samsung
Produto após adicionar desconto: { id: 101, nome: 'Smartphone Samsung', preco: 599.99, categoria:
'Eletrónicos', emStock: true, desconto: 10 }
Produto após atualizar desconto: { id: 101, nome: 'Smartphone Samsung', preco: 599.99, categoria:
'Eletrónicos', emStock: true, desconto: 25 }
Produto após remover desconto: { id: 101, nome: 'Smartphone Samsung', preco: 599.99, categoria:
'Eletrónicos', emStock: true }
Produto: portátil Dell - Preço: 1299€
Inventário atualizado: (com preço do portátil alterado para 1099.00)
Produto com marca adicionada: { id: 102, nome: 'portátil Dell', preco: 1099.00, categoria:
'Informática', emStock: true, marca: 'Dell' }
Buscar produto id 102: { id: 102, nome: 'portátil Dell', preco: 1099.00, categoria: 'Informática',
emStock: true, marca: 'Dell' }
Buscar produto id 999: Produto com id 999 não encontrado
*/
