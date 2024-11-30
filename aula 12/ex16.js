// Função para verificar o tipo do triângulo
function verificarTriangulo() {
    // Solicita os três lados do triângulo
    let lado1 = 35
    let lado2 = 12
    let lado3 = 40

    // Verifica se os valores formam um triângulo válido
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        console.log("Os lados devem ser positivos.");
        return;
    }

    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        // Determina o tipo de triângulo
        if (lado1 === lado2 && lado2 === lado3) {
            console.log("O triângulo é equilátero.");
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            console.log("O triângulo é isósceles.");
        } else {
            console.log("O triângulo é escaleno.");
        }
    } else {
        console.log("Os lados informados não formam um triângulo válido.");
    }
}

// Chama a função para verificar o tipo do triângulo
verificarTriangulo();
