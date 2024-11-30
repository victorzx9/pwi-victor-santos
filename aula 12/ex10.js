// Função para calcular a média das notas
function calcularMedia() {
    // Lê as três notas
    let nota1 = 10
    let nota2 = 9
    let nota3 = 7
    
    // Calcula a média
    let media = (nota1 + nota2 + nota3) / 3;
    
    // Exibe o resultado no console
    console.log("A média das notas é: " + media.toFixed(2));
}

// Chama a função para calcular a média
calcularMedia();

