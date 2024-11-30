// Função para trocar os valores de A e B
function trocarValores() {
    // Solicita os valores A e B
    let A = 200;
    let B = 10;

    // Exibe os valores antes da troca
    console.log("Antes da troca:");
    console.log("A = " + A);
    console.log("B = " + B);

    // Troca os valores
    let temp = A;
    A = B;
    B = temp;

    // Exibe os valores após a troca
    console.log("Depois da troca:");
    console.log("A = " + A);
    console.log("B = " + B);
}

// Chama a função para trocar os valores
trocarValores();

