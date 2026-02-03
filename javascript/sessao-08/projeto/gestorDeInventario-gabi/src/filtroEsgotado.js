
export function produtosEsgotados (produtos) {
    if (produtos.some(produto => produto.emStock === false)) {
        return produtos.filter(produto => produto.emStock === false);
    }
    return null;
}
