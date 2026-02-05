// Functions expressions não são "içadas" (hoisted);
// Aqui o hoisting não ocorre pois a função é vista como valor da constante somar.

somar(2, 3); // ReferenceError: Cannot access 'somar' before initialization
const somar = function (a, b) {
    console.log(a + b);
};

multiplicar(2, 3); // ReferenceError: Cannot access 'multiplicar' before initialization
const multiplicar = (a,b) => a * b;

