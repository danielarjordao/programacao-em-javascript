
export function filtroEmStock(produtos) {
    return produtos.filter(produto => produto.emStock === true);
}