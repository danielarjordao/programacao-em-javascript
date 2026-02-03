import { inventario } from './data/dadosInventario.js';
import { filtroEmStock } from './src/filtroEmStock.js';
import { emStockAbaixoCem } from './src/filtroEmStockAbaixoCem.js';
import {produtosEsgotados} from './src/filtroEsgotado.js';
import { precosComIva } from './src/precosComIVA.js';
import { totalValorInventario } from './src/totalValorInventario.js';
/*let produtosEmStock = filtroEmStock(inventario);
console.log("Produtos em stock: ");
console.log(produtosEmStock);*/

/*let produtosAbaixoCem = emStockAbaixoCem(inventario);
console.log("Produtos em stock abaixo dos 100 euros: ");
console.log(produtosAbaixoCem);*/
/*
let semStock = produtosEsgotados(inventario);
if (semStock)  {
    console.log("produtos esgotados: ");
    console.log(semStock);
}
else {
    console.log("todos os produtos encontram-se em stock!");
}*/
/*
let precosIva = precosComIva(inventario);
console.log(precosIva);*/

let total = totalValorInventario(inventario);
console.log(total);