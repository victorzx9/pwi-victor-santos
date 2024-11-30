// Função para imprimir a tabuada de um número
function imprimirTabuada(numero) {
    // Loop para imprimir a tabuada do número
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Solicitar ao usuário um número inteiro
let numero = 5;

// Verificar se o número digitado é um número válido
if (!isNaN(numero)) {
    // Chamar a função para imprimir a tabuada do número
    imprimirTabuada(numero);
} else {
    console.log("Por favor, insira um número válido.");
}
