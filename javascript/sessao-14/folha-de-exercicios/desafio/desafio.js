/*
DESAFIO: Persistencia com Web Storage
*/

// Array de produtos para exibir na página
const produtos = [
    { nome: "Teclado Mecanico", valor: 89.9, categoria: "Perifericos", emOferta: true },
    { nome: "Monitor 144Hz", valor: 199.0, categoria: "Monitores", emOferta: false },
    { nome: "Rato Gaming", valor: 45.0, categoria: "Perifericos", emOferta: true },
    { nome: "SSD 1TB", valor: 75.0, categoria: "Armazenamento", emOferta: false },
];

// Selecionar elementos da página
const themeButton = document.querySelector(".theme");
const filtroButton = document.querySelector(".filtra-oferta");
const lista = document.querySelector(".produtos");

if (!themeButton || !filtroButton || !lista) {
    console.warn("Estrutura HTML nao encontrada.");
} else {
    iniciar();
}

function iniciar() {
    const filtroAtivo = carregarFiltro();
    const temaAtual = carregarTema();

    aplicarTema(temaAtual);
    atualizarTextoFiltro(filtroAtivo);
    renderizarProdutos(filtroAtivo);

    // Eventos para os botões de tema e filtro
    themeButton.addEventListener("click", function () {
        // O novo tema é o oposto do atual
        const proximo = obterProximoTema(carregarTema());
        salvarTema(proximo);
        aplicarTema(proximo);
    });

    filtroButton.addEventListener("click", function () {
        // O novo estado do filtro é o oposto do estado atual
        const novoFiltro = !carregarFiltro();
        salvarFiltro(novoFiltro);
        atualizarTextoFiltro(novoFiltro);
        renderizarProdutos(novoFiltro);
    });
}

function carregarFiltro() {
    // O filtro é armazenado como string, então é necessário verificar se o valor é "true"
    const valor = localStorage.getItem("filtroOferta");
    if (valor === "true") {
        return true;
    }
    return false;
}

function salvarFiltro(ativo) {
    // localStorage só aceita strings, por isso é necessário converter o boolean para string
    localStorage.setItem("filtroOferta", String(ativo));
}

function carregarTema() {
    // O tema é armazenado como string, então basta ler o valor e verificar se é "dark" ou "light"
    const tema = sessionStorage.getItem("tema");
    if (tema === "dark" || tema === "light") {
        return tema;
    }
    return "light";
}

function salvarTema(tema) {
    // sessionStorage.setItem salva o valor no armazenamento de sessão do navegador
    sessionStorage.setItem("tema", tema);
}

function aplicarTema(tema) {
    // A aplicação do tema é feita definindo um atributo data-theme no body, que pode ser usado para estilização via CSS
    document.body.dataset.theme = tema;
    themeButton.textContent = "Tema: " + tema;
}

function obterProximoTema(temaAtual) {
    // O tema é o oposto do atual
    if (temaAtual === "dark") {
        return "light";
    }
    return "dark";
}

function atualizarTextoFiltro(ativo) {
    // O texto do botão de filtro é atualizado para refletir o estado atual do filtro
    if (ativo) {
        filtroButton.textContent = "Filtrar Ofertas: ON";
    } else {
        filtroButton.textContent = "Filtrar Ofertas: OFF";
    }
}

function renderizarProdutos(somenteOfertas) {
    lista.innerHTML = "";
    // Filtrar os produtos com base no estado do filtro. Se somenteOfertas for true, apenas produtos em oferta serão exibidos
    const produtosFiltrados = produtos.filter(function (produto) {
        return !somenteOfertas || produto.emOferta;
    });

    // Renderizar os produtos filtrados na página
    produtosFiltrados.forEach(function (produto) {
        const li = document.createElement("li");
        const valor = produto.valor.toFixed(2);
        li.textContent = produto.nome + " | " + produto.categoria + " | " + valor;
        lista.appendChild(li);
    });
}
