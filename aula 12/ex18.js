// Definindo as variáveis iniciais
let alturaFrancisco = 1.50;  // em metros
let alturaSara = 1.10;      // em metros
let crescimentoFrancisco = 0.02;  // 2 cm por ano (convertido para metros)
let crescimentoSara = 0.03;      // 3 cm por ano (convertido para metros)
let anos = 0;

// Loop para calcular até que Francisco seja maior que Sara
while (alturaFrancisco <= alturaSara) {
    // Aumentando as alturas de Francisco e Sara a cada ano
    alturaFrancisco += crescimentoFrancisco;
    alturaSara += crescimentoSara;
    anos++;  // Incrementa o contador de anos
}

// Imprimindo o número de anos necessários
console.log(`Será necessário ${anos} anos para Francisco ser maior que Sara.`);
