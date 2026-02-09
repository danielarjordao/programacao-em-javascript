const pessoa = {
 nome: "Ana",
 idade: 30,
 ativo: true,
};
const json = JSON.stringify(pessoa);
console.log(json); // Output: {"nome":"Ana","idade":30,"ativo":true}
const objeto = JSON.parse(json);
console.log(objeto); // Output: { nome: 'Ana', idade: 30, ativo: true }
