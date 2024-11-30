// Função para converter Fahrenheit para Celsius
function converterTemperatura() {
    // Solicita a temperatura em Fahrenheit
    let fahrenheit = 100;

    // Aplica a fórmula de conversão para Celsius
    let celsius = (5 * (fahrenheit - 32)) / 9;

    // Exibe as temperaturas na tela
    console.log(`${fahrenheit}° Fahrenheit é equivalente a ${celsius.toFixed(2)}° Celsius.`);
}

// Chama a função para realizar a conversão
converterTemperatura();
