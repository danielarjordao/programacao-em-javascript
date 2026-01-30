let carro = {
	marca: "Toyota",
	modelo: "Corolla",
	ano: 2020,
	cor: "Prata",
};

console.log("Objeto carro:", carro);

let pessoa = {
	nome: "João Silva",
	idade: 25,
	Cidade: "Lisboa",
	estudante: true,
};

console.log("Objeto pessoa:", pessoa);

if (pessoa.estudante) {
	console.log(pessoa.nome + " é estudante.");
} else {
	console.log(pessoa.nome + " não é estudante.");
}

let produto = {
	nome: "Notebook", // string
	preco: 899.99, // number
	emStock: true, // boolean
	categorias: ["Informática", "Portáteis"], // array
	especificacoes: { // outro objeto
		ram: "16GB",
		processador: "Intel i7",
	},
};

console.log("Objeto produto:", produto);

let utilizador = {
	username: "joao123",
	email: "joao@example.com",
};

console.log("Objeto utilizador:", utilizador);

utilizador.idade = 30; // Adiciona nova propriedade
utilizador.ativo = true; // Adiciona nova propriedade

console.log("Objeto após adicionar propriedades:", utilizador);

let produtos = [
	{ id:1, nome: "Teclado", preco: 45.99, stock: 15 },
	{ id:2, nome: "Mouse", preco: 25.50, stock: 30 },
	{ id:3, nome: "Monitor", preco: 299.99, stock: 8 },
];

console.log("Lista de produtos:", produtos);

console.log("Produto: ", produtos[0].nome + " : " + produtos[0].preco);

for (let i = 0; i < produtos.length; i++) {
	console.log(
		"Produto ID:", produtos[i].id,
		"- Nome:", produtos[i].nome,
		"- Preço:", produtos[i].preco,
		"- Stock:", produtos[i].stock
	);
}

/*
Exercício Prático: Sistema de Gestão de Produtos
Objetico: Trabalhar com criação, acesso, modificação e remoção
de propriedades de objetos, além de manipulação de arrays de objetos.

Parte 1: Criar o objeto produto

Crie um objeto chamado `produto` com as seguintes propriedades:
- id: 101
- nome: `Smartphone Samsung`
- preco: 599.99
- Categoria: `Eletrônicos`
- emStock: true
*/

let produto1 = {
	id: 101,
	nome: "Smartphone Samsung",
	preco: 599.99,
	categoria: "Eletrônicos",
	emStock: true,
};


console.log("Objeto produto:" + produto1);
console.log(`Produto criado: ${produto1}`)
