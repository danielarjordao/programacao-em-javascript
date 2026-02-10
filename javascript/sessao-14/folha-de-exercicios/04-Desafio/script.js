const body = document.querySelector('body');
// localStorage

// 1. Dados iniciais (Poderiam estar num módulo separado data.js)
const produtosInformatica = [
    { nome: "Teclado Mecânico", valor: 89.90, categoria: "Periféricos", emOferta: true },
    { nome: "Monitor 144Hz", valor: 199.00, categoria: "Monitores", emOferta: false },
    { nome: "Rato Gaming", valor: 45.00, categoria: "Periféricos", emOferta: true },
    { nome: "SSD 1TB", valor: 75.00, categoria: "Armazenamento", emOferta: false }
];

// 2. Seleção de Elementos
const listaProdutos = document.querySelector('.produtos');
const btnFiltro = document.querySelector('.filtra-oferta');

// 3. Função para Renderizar a Lista
function renderizarProdutos(lista) {
    listaProdutos.innerHTML = ""; // Limpa a lista antes de renderizar
    
    lista.forEach(produto => {
        const li = document.createElement('li');
        li.textContent = `${produto.nome} - ${produto.valor}€ (${produto.categoria})`;
        if (produto.emOferta) li.style.color = "green"; // Destaque visual
        listaProdutos.appendChild(li);
    });
}

// 4. Lógica de Persistência do Filtro
function inicializarApp() {
    // Recupera do localStorage se o filtro estava ativo (converte string para boolean)
    const filtroAtivo = localStorage.getItem('filtroOferta') === 'true';

    // Aplica o filtro se necessário
    const produtosExibidos = filtroAtivo 
        ? produtosInformatica.filter(p => p.emOferta) 
        : produtosInformatica;

    renderizarProdutos(produtosExibidos);
    
    // Atualiza o texto do botão para feedback visual
    btnFiltro.textContent = filtroAtivo ? "Mostrar Todos" : "Filtrar Ofertas";
}

// 5. Evento de Clique
btnFiltro.addEventListener('click', () => {
    // Inverte o estado atual no localStorage
    const estadoAtual = localStorage.getItem('filtroOferta') === 'true';
    localStorage.setItem('filtroOferta', !estadoAtual);

    // Reinicia a visualização com o novo estado
    inicializarApp();
});

// Inicializa ao carregar a página
inicializarApp();

// sessionStorage

// 1. Tenta recuperar o que já está guardado
let tema = sessionStorage.getItem("tema");

// 2. Se for a PRIMEIRA VEZ (null), define o padrão como light
if (!tema) {
    sessionStorage.setItem("tema", "light");
    tema = "light";
}

// 3. Aplica a classe ao body com base no valor recuperado (sem sobrescrever)
tema === "dark" ? body.classList.add('body') : body.classList.remove('body');

const btnTheme = document.querySelector('.theme');
btnTheme.textContent = tema === "dark" ? "Light Theme" : "Dark Theme";
btnTheme.addEventListener('click', () => {
    if (tema === "dark") {
        body.classList.remove('body');
        sessionStorage.setItem("tema", "light");
        tema = sessionStorage.getItem("tema");
        btnTheme.textContent = "Dark Theme";
    } else {
        body.classList.add('body');
        sessionStorage.setItem("tema", "dark");
        tema = sessionStorage.getItem("tema");
        btnTheme.textContent = "Light Theme";
    }
})

