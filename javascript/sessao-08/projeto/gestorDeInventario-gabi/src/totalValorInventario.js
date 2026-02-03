
export function totalValorInventario (produtos) {
    return produtos.reduce((valorTotal,  produto) => {return valorTotal + produto.preco; }, 0);
}