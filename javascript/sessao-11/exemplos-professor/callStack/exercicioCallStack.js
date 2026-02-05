// O processo de finalizar a compra de um produto passa por várias etapas e logo serviços distintos.
// A função processarPedido será a porta de entrada para a lógica que represente esse fluxo. 
// O fluxo normal de chamada de serviços é: processarPedido -> verificarMeioDePagamento -> notificarLogistica.
// Quando a função processarPedido for chamada esperamos o seguinte resultado no console:
// Página Web: Pedido de Portátil recebido
// Financeiro: Compra aprovada, seu pedido estará em sua casa em poucos dias.
// Logística: Seu pedido está sendo preparado para envio e tem previsão de chegada em até 24 horas.
// Organize as chamadas de funções que representem esse fluxo de forma correta.


processarPedido();







// function notificarLogistica() {
//   console.log("Logística: Seu pedido está sendo preparado para envio e tem previsão de chegada em até 24 horas.");
// }

// function verificarMeioDePagamento() {
//   console.log("Financeiro: Compra aprovada, seu pedido estará em sua casa em poucos dias.");
//   notificarLogistica();
// }
 
// function processarPedido() {
//   console.log("Página Web: Seu Pedido Portátil xpto foi recebido.");
//   verificarMeioDePagamento(); 
// }

