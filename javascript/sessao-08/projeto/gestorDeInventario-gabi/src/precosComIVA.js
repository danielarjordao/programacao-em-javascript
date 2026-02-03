
export function precosComIva(produtos) {
    return produtos.map(produto => produto.preco = produto.preco + (produto.preco * 0.23));
}