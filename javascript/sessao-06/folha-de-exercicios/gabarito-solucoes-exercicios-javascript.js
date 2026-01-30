// ============================================================
// GABARITO - Soluções dos Exercícios
// Módulo 02 - Fundamentos JavaScript
// Sessão 06 - Lógica e Controlo de Fluxo
// Data: 28/01/2026
// ============================================================

console.log("=".repeat(60));
console.log("GABARITO - EXERCÍCIOS DE JAVASCRIPT");
console.log("Lógica e Controlo de Fluxo");
console.log("=".repeat(60));
console.log();

// ============================================================
// NÍVEL BÁSICO – Estruturas Condicionais (if/else)
// ============================================================

console.log("\n--- NÍVEL BÁSICO – Estruturas Condicionais (if/else) ---\n");

// Exercício 1: Verificação de Maioridade
console.log("Exercício 1: Verificação de Maioridade");
{
    let idade = 20;
    
    if (idade >= 18) {
        console.log("Maior de idade");
    } else {
        console.log("Menor de idade");
    }
    
    // Testando com outra idade
    idade = 15;
    console.log(`Testando com idade ${idade}: ${idade >= 18 ? "Maior de idade" : "Menor de idade"}`);
}
console.log();

// Exercício 2: Classificação de Nota
console.log("Exercício 2: Classificação de Nota");
{
    let nota = 17;
    
    if (nota >= 16) {
        console.log("Excelente");
    } else if (nota >= 14) {
        console.log("Bom");
    } else if (nota >= 10) {
        console.log("Suficiente");
    } else {
        console.log("Insuficiente");
    }
    
    // Testando outras notas
    const notas = [18, 15, 12, 8];

for (let i = 0; i < notas.length; i++) {
    const n = notas[i]; // Obtém o valor da nota na posição atual
    let classificacao;

    if (n >= 16) {
        classificacao = "Excelente";
    } else if (n >= 14) {
        classificacao = "Bom";
    } else if (n >= 10) {
        classificacao = "Suficiente";
    } else {
        classificacao = "Insuficiente";
    }

    console.log(`Nota ${n}: ${classificacao}`);
}
}
console.log();

// Exercício 3: Verificação de Número Par ou Ímpar
console.log("Exercício 3: Verificação de Número Par ou Ímpar");
{
    let numero = 7;
    
    if (numero % 2 === 0) {
        console.log(`${numero} é par`);
    } else {
        console.log(`${numero} é ímpar`);
    }
    
    // Testando vários números
    for (let i = 1; i <= 5; i++) {
        console.log(`${i} é ${i % 2 === 0 ? "par" : "ímpar"}`);
    }
}
console.log();

// Exercício 4: Maior de Dois Números
console.log("Exercício 4: Maior de Dois Números");
{
    let num1 = 15;
    let num2 = 23;
    
    if (num1 > num2) {
        console.log(`${num1} é maior que ${num2}`);
    } else if (num2 > num1) {
        console.log(`${num2} é maior que ${num1}`);
    } else {
        console.log("Os números são iguais");
    }
}
console.log();

// ============================================================
// NÍVEL BÁSICO – Truthy e Falsy
// ============================================================

console.log("\n--- NÍVEL BÁSICO – Truthy e Falsy ---\n");

// Exercício 5: Verificação de String Vazia
console.log("Exercício 5: Verificação de String Vazia");
{
    let nome = "João";
    
    if (nome) {
        console.log("Nome preenchido");
    } else {
        console.log("Nome vazio");
    }
    
    // Testando com string vazia
    nome = "";
    if (nome) {
        console.log("Nome preenchido");
    } else {
        console.log("Nome vazio");
    }
}
console.log();

// Exercício 6: Verificação de Valor Existente
console.log("Exercício 6: Verificação de Valor Existente");
{
    const valores = [0, "", null, undefined, "texto", false, true, [], {}];
    
    for (let i = 0; i < valores.length; i++) {
        const valor = valores[i];
        
        if (valor) {
            console.log(`${JSON.stringify(valor)} é TRUTHY`);
        } else {
            console.log(`${JSON.stringify(valor)} é FALSY`);
        }
    }
}
console.log();

// ============================================================
// NÍVEL BÁSICO – Switch Case
// ============================================================

console.log("\n--- NÍVEL BÁSICO – Switch Case ---\n");

// Exercício 7: Dia da Semana
console.log("Exercício 7: Dia da Semana");
{
    let dia = 3;
    
    switch (dia) {
        case 1:
            console.log("Segunda-feira");
            break;
        case 2:
            console.log("Terça-feira");
            break;
        case 3:
            console.log("Quarta-feira");
            break;
        case 4:
            console.log("Quinta-feira");
            break;
        case 5:
            console.log("Sexta-feira");
            break;
        case 6:
            console.log("Sábado");
            break;
        case 7:
            console.log("Domingo");
            break;
        default:
            console.log("Dia inválido");
    }
}
console.log();

// Exercício 8: Estações do Ano
console.log("Exercício 8: Estações do Ano");
{
    let mes = 7;
    
    switch (mes) {
        case 12:
        case 1:
        case 2:
            console.log("Inverno");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Primavera");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Verão");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Outono");
            break;
        default:
            console.log("Mês inválido");
    }
}
console.log();

// ============================================================
// NÍVEL BÁSICO – Operador Ternário
// ============================================================

console.log("\n--- NÍVEL BÁSICO – Operador Ternário ---\n");

// Exercício 9: Desconto Simples
console.log("Exercício 9: Desconto Simples");
{
    let valorCompra = 150;
    let valorFinal = valorCompra > 100 ? valorCompra * 0.9 : valorCompra;
    
    console.log(`Valor da compra: ${valorCompra}€`);
    console.log(`Valor final: ${valorFinal.toFixed(2)}€`);
    
    // Testando com valor menor
    valorCompra = 80;
    valorFinal = valorCompra > 100 ? valorCompra * 0.9 : valorCompra;
    console.log(`Valor da compra: ${valorCompra}€`);
    console.log(`Valor final: ${valorFinal.toFixed(2)}€`);
}
console.log();

// Exercício 10: Status de Aprovação
console.log("Exercício 10: Status de Aprovação");
{
    let nota = 14;
    let status = nota >= 10 ? "Aprovado" : "Reprovado";
    
    console.log(`Nota: ${nota} - Status: ${status}`);
    
    // Testando outras notas com o loop for
    const notasParaTestar = [18, 8, 10, 9.5];
    
    for (let i = 0; i < notasParaTestar.length; i++) {
        let n = notasParaTestar[i];
        let statusTeste = n >= 10 ? "Aprovado" : "Reprovado";
        console.log(`Nota: ${n} - Status: ${statusTeste}`);
    }
}
console.log();

// ============================================================
// NÍVEL BÁSICO – Arrays
// ============================================================

console.log("\n--- NÍVEL BÁSICO – Arrays ---\n");

// Exercício 11: Criação e Acesso de Array
console.log("Exercício 11: Criação e Acesso de Array");
{
    let frutas = ["Maçã", "Banana", "Laranja", "Morango", "Uva"];
    
    console.log("Primeira fruta:", frutas[0]);
    console.log("Última fruta:", frutas[frutas.length - 1]);
    console.log("Todas as frutas:", frutas);
}
console.log();

// Exercício 12: Manipulação com push e pop
console.log("Exercício 12: Manipulação com push e pop");
{
    let numeros = [];
    
    console.log("Array inicial:", numeros);
    
    numeros.push(10);
    console.log("Após push(10):", numeros);
    
    numeros.push(20);
    console.log("Após push(20):", numeros);
    
    numeros.push(30);
    console.log("Após push(30):", numeros);
    
    let removido = numeros.pop();
    console.log("Elemento removido:", removido);
    console.log("Array final:", numeros);
}
console.log();

// ============================================================
// NÍVEL INTERMEDIÁRIO – Loops (for)
// ============================================================

console.log("\n--- NÍVEL INTERMEDIÁRIO – Loops (for) ---\n");

// Exercício 13: Contagem Simples
console.log("Exercício 13: Contagem Simples");
{
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
console.log();

// Exercício 14: Tabuada
console.log("Exercício 14: Tabuada");
{
    let numero = 7;
    
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
console.log();

// Exercício 15: Soma de Números
console.log("Exercício 15: Soma de Números");
{
    let soma = 0;
    
    for (let i = 1; i <= 100; i++) {
        soma += i;
    }
    
    console.log("Soma de 1 a 100:", soma);
}
console.log();

// Exercício 16: Percorrer Array
console.log("Exercício 16: Percorrer Array");
{
    let nomes = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];
    
    for (let i = 0; i < nomes.length; i++) {
        console.log(`Posição ${i}: ${nomes[i]}`);
    }
}
console.log();

// ============================================================
// NÍVEL INTERMEDIÁRIO – Loops (while e do-while)
// ============================================================

console.log("\n--- NÍVEL INTERMEDIÁRIO – Loops (while e do-while) ---\n");

// Exercício 17: Contagem Regressiva
console.log("Exercício 17: Contagem Regressiva");
{
    let contador = 10;
    
    while (contador >= 0) {
        console.log(contador);
        contador--;
    }
}
console.log();

// Exercício 18: Validação de Entrada
console.log("Exercício 18: Validação de Entrada");
{
    // Simulação com array de tentativas
    let tentativas = ["senha123", "admin", "1234"];
    let indice = 0;
    let senha;
    
    do {
        senha = tentativas[indice];
        console.log(`Tentativa ${indice + 1}: ${senha}`);
        indice++;
    } while (senha !== "1234" && indice < tentativas.length);
    
    if (senha === "1234") {
        console.log("Senha correta! Acesso permitido.");
    }
}
console.log();

// Exercício 19: Números Pares
console.log("Exercício 19: Números Pares");
{
    let numero = 0;
    
    while (numero <= 20) {
        if (numero % 2 === 0) {
            console.log(numero);
        }
        numero++;
    }
}
console.log();

// ============================================================
// NÍVEL INTERMEDIÁRIO – Break e Continue
// ============================================================

console.log("\n--- NÍVEL INTERMEDIÁRIO – Break e Continue ---\n");

// Exercício 20: Encontrar Número
console.log("Exercício 20: Encontrar Número");
{
    for (let i = 1; i <= 100; i++) {
        if (i === 50) {
            console.log("Número 50 encontrado!");
            break;
        }
    }
}
console.log();

// Exercício 21: Pular Múltiplos de 3
console.log("Exercício 21: Pular Múltiplos de 3");
{
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0) {
            continue;
        }
        console.log(i);
    }
}
console.log();

// Exercício 22: Busca em Array
console.log("Exercício 22: Busca em Array");
{
    let numeros = [3, 8, 12, 7, 19, 5];
    let encontrado = false;
    
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === 7) {
            console.log(`Número 7 encontrado na posição ${i}`);
            encontrado = true;
            break;
        }
    }
    
    if (!encontrado) {
        console.log("Número não encontrado");
    }
    
    // Testando com array sem o número 7
    console.log("\nTestando com array sem 7:");
    let numerosTesteSem7 = [3, 8, 12, 19, 5];
    encontrado = false;
    
    for (let i = 0; i < numerosTesteSem7.length; i++) {
        if (numerosTesteSem7[i] === 7) {
            console.log(`Número 7 encontrado na posição ${i}`);
            encontrado = true;
            break;
        }
    }
    
    if (!encontrado) {
        console.log("Número não encontrado");
    }
}
console.log();

// ============================================================
// NÍVEL INTERMEDIÁRIO – Try/Catch
// ============================================================

console.log("\n--- NÍVEL INTERMEDIÁRIO – Try/Catch ---\n");

// Exercício 23: Tratamento Básico de Erro
console.log("Exercício 23: Tratamento Básico de Erro");
{
    try {
        console.log(naoExiste);
    } catch (erro) {
        console.log("Erro capturado:", erro.message);
        console.log("A variável que você tentou acessar não existe.");
    }
}
console.log();

// Exercício 24: Divisão Segura
console.log("Exercício 24: Divisão Segura");
{
    function dividir(a, b) {
        try {
            if (b === 0) {
                throw new Error("Divisão por zero não é permitida");
            }
            return a / b;
        } catch (erro) {
            console.log("Erro:", erro.message);
            return null;
        }
    }
    
    console.log("Divisão 10 / 2:", dividir(10, 2));
    console.log("Divisão 10 / 0:", dividir(10, 0));
    console.log("Divisão 15 / 3:", dividir(15, 3));
}
console.log();

// Exercício 25: Finally em Ação
console.log("Exercício 25: Finally em Ação");
{
    function processarArquivo(simularErro = false) {
        try {
            console.log("Abrindo arquivo...");
            
            if (simularErro) {
                throw new Error("Erro ao ler arquivo");
            }
            
            console.log("Processando dados...");
            console.log("Dados processados com sucesso!");
            
        } catch (erro) {
            console.log("Erro capturado:", erro.message);
            
        } finally {
            console.log("Arquivo fechado");
        }
    }
    
    console.log("--- Processamento sem erro ---");
    processarArquivo(false);
    
    console.log("\n--- Processamento com erro ---");
    processarArquivo(true);
}
console.log();

// ============================================================
// NÍVEL AVANÇADO – Desafios Integrados
// ============================================================

console.log("\n--- NÍVEL AVANÇADO – Desafios Integrados ---\n");

// Exercício 26: FizzBuzz Completo
console.log("Exercício 26: FizzBuzz Completo");
{
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
console.log();

// Exercício 27: Calculadora de Fatorial
console.log("Exercício 27: Calculadora de Fatorial");
{
    function calcularFatorial(n) {
        try {
            // Validação de entrada
            if (n < 0) {
                throw new Error("Não é possível calcular fatorial de número negativo");
            }
            
            if (n === 0 || n === 1) {
                return 1;
            }
            
            let resultado = 1;
            for (let i = 2; i <= n; i++) {
                resultado *= i;
            }
            
            return resultado;
            
        } catch (erro) {
            console.log("Erro:", erro.message);
            return null;
        }
    }
    
    // Testes
    console.log("5! =", calcularFatorial(5));
    console.log("0! =", calcularFatorial(0));
    console.log("10! =", calcularFatorial(10));
    console.log("(-3)! =", calcularFatorial(-3));
    
    // Mostrando o cálculo passo a passo
    console.log("\nCálculo detalhado de 5!:");
    let n = 5;
    let resultado = 1;
    let passos = [];
    
    for (let i = 1; i <= n; i++) {
        resultado *= i;
        passos.push(i);
    }
    
    console.log(passos.join(" × ") + " = " + resultado);
}
console.log();

// Exercício 28: Validador de Notas com Estatísticas
console.log("Exercício 28: Validador de Notas com Estatísticas");
{
    function validarEAnalisarNotas(notas) {
        try {
            // Validar array
            if (!Array.isArray(notas) || notas.length === 0) {
                throw new Error("Entrada inválida: deve ser um array com pelo menos uma nota");
            }
            
            let notasValidas = [];
            let soma = 0;
            let maiorNota = -Infinity;
            let menorNota = Infinity;
            
            // Contadores de classificação
            let classificacoes = {
                excelente: 0,
                bom: 0,
                suficiente: 0,
                insuficiente: 0
            };
            
            // Validar e processar cada nota
            for (let i = 0; i < notas.length; i++) {
                try {
                    let nota = notas[i];
                    
                    // Validar se é número
                    if (typeof nota !== 'number') {
                        throw new Error(`Nota na posição ${i} não é um número`);
                    }
                    
                    // Validar intervalo
                    if (nota < 0 || nota > 20) {
                        throw new Error(`Nota na posição ${i} fora do intervalo (0-20)`);
                    }
                    
                    // Adicionar à lista de notas válidas
                    notasValidas.push(nota);
                    soma += nota;
                    
                    // Atualizar maior e menor
                    if (nota > maiorNota) maiorNota = nota;
                    if (nota < menorNota) menorNota = nota;
                    
                    // Classificar
                    if (nota >= 16) {
                        classificacoes.excelente++;
                    } else if (nota >= 14) {
                        classificacoes.bom++;
                    } else if (nota >= 10) {
                        classificacoes.suficiente++;
                    } else {
                        classificacoes.insuficiente++;
                    }
                    
                } catch (erroNota) {
                    console.log(`  ⚠️  ${erroNota.message}`);
                }
            }
            
            // Calcular média
            let media = notasValidas.length > 0 ? soma / notasValidas.length : 0;
            
            // Imprimir relatório
            console.log("\n" + "=".repeat(60));
            console.log("RELATÓRIO DE NOTAS");
            console.log("=".repeat(60));
            console.log(`Total de notas analisadas: ${notas.length}`);
            console.log(`Notas válidas: ${notasValidas.length}`);
            console.log(`Notas inválidas: ${notas.length - notasValidas.length}`);
            console.log("-".repeat(60));
            
            if (notasValidas.length > 0) {
                console.log("\nESTATÍSTICAS:");
                console.log(`  Média: ${media.toFixed(2)}`);
                console.log(`  Maior nota: ${maiorNota}`);
                console.log(`  Menor nota: ${menorNota}`);
                
                console.log("\nCLASSIFICAÇÕES INDIVIDUAIS:");
                notasValidas.forEach((nota, index) => {
                    let classificacao;
                    if (nota >= 16) classificacao = "Excelente";
                    else if (nota >= 14) classificacao = "Bom";
                    else if (nota >= 10) classificacao = "Suficiente";
                    else classificacao = "Insuficiente";
                    
                    console.log(`  Aluno ${index + 1}: ${nota} - ${classificacao}`);
                });
                
                console.log("\nDISTRIBUIÇÃO POR CLASSIFICAÇÃO:");
                console.log(`  Excelente (16-20): ${classificacoes.excelente} alunos (${(classificacoes.excelente/notasValidas.length*100).toFixed(1)}%)`);
                console.log(`  Bom (14-15.9): ${classificacoes.bom} alunos (${(classificacoes.bom/notasValidas.length*100).toFixed(1)}%)`);
                console.log(`  Suficiente (10-13.9): ${classificacoes.suficiente} alunos (${(classificacoes.suficiente/notasValidas.length*100).toFixed(1)}%)`);
                console.log(`  Insuficiente (0-9.9): ${classificacoes.insuficiente} alunos (${(classificacoes.insuficiente/notasValidas.length*100).toFixed(1)}%)`);
                
                console.log("\nTAXA DE APROVAÇÃO:");
                let aprovados = classificacoes.excelente + classificacoes.bom + classificacoes.suficiente;
                let taxaAprovacao = (aprovados / notasValidas.length * 100).toFixed(1);
                console.log(`  ${aprovados} de ${notasValidas.length} alunos aprovados (${taxaAprovacao}%)`);
            }
            
            console.log("=".repeat(60));
            
        } catch (erro) {
            console.log("Erro ao processar notas:", erro.message);
        }
    }
    
    // Teste com array de notas válidas e inválidas
    let notasTurma = [18, 15, 12, 9, 16, "abc", 20, 8, 14, 25, 11, 17, -5, 13, 19];
    validarEAnalisarNotas(notasTurma);
    
    // Teste com array só de notas válidas
    console.log("\n\n--- TESTE COM TODAS NOTAS VÁLIDAS ---");
    let notasValidasTeste = [16, 18, 14, 12, 15, 17, 13, 19, 11, 20];
    validarEAnalisarNotas(notasValidasTeste);
}

console.log("\n" + "=".repeat(60));
console.log("FIM DO GABARITO");
console.log("=".repeat(60));
