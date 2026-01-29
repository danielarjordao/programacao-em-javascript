let a = 10;
let b = a; // Cópia do valor de 'a' para 'b'

console.log("Antes da modificação:");
console.log("a:", a); // 10
console.log("b:", b); // 10

b = 20; // Modificando 'b'

console.log("Depois da modificação:");
console.log("a:", a); // 10 (permanece inalterado)
console.log("b:", b); // 20 (modificado)

let obj1 = { nome: "Carlos", idade: 25 };
let obj2 = obj1; // 'obj2' referencia o mesmo objeto que 'obj1'

console.log("Antes da modificação:");
console.log("obj1:", obj1); // { nome: "Carlos", idade: 25 }
console.log("obj2:", obj2); // { nome: "Carlos", idade: 25 }

obj2.idade = 30; // Modificando a propriedade 'idade' através de 'obj2'

console.log("Depois da modificação:");
console.log("obj1:", obj1); // { nome: "Carlos", idade: 30 } (modificado)
console.log("obj2:", obj2); // { nome: "Carlos", idade: 30 } (modificado)

// Para criar uma cópia independente de um objeto, usamos o spread operator
let obj3 = { ...obj1 }; // Cópia independente de 'obj1'

obj3.nome = "Mariana"; // Modificando 'obj3'

console.log("Após modificar obj3:");
console.log("obj1:", obj1); // { nome: "Carlos", idade: 30 } (permanece inalterado)
console.log("obj3:", obj3); // { nome: "Mariana", idade: 30 } (modificado)
