// Solicitar ao usuário os valores de A e B
let A = 20
let B = 10
// Verificar se o valor de B é zero para evitar divisão por zero
if (B === 0) {
    console.log("Erro: Divisão por zero não é permitida.");
} else {
    // Calcular o quociente e o resto da divisão inteira
    let quociente = Math.floor(A / B);
    let resto = A % B;

    // Exibir o resultado
    console.log(`O quociente da divisão de ${A} por ${B} é: ${quociente}`);
    console.log(`O resto da divisão de ${A} por ${B} é: ${resto}`);
}
