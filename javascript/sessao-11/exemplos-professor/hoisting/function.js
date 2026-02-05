// As functions também são "içadas" (hoisted) e ficam disponíveis antes mesmo de sua declaração no código;

soma(2, 3);
multiplicar();

function soma(a, b) {
    console.log(a + b);
}

// As variáveis declaradas com let e const fazem parte da função e não são "içadas" (hoisted);
function multiplicar() {
    // console.log(a);
    let a = 2;
    const b = 3;
    console.log(a * b);
}