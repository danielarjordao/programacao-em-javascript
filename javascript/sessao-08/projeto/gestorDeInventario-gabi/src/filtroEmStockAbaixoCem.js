import { filtroEmStock } from "./filtroEmStock.js";

export function emStockAbaixoCem(produtos) {
    let produtosEmStock = filtroEmStock(produtos);
    return produtosEmStock.filter(produto => produto.preco < 100);
}

