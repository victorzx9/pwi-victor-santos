// Solicitar ao usuário as informações necessárias
let tempoViagem =6
let velocidadeMedia = 70

// Calcular a distância percorrida
let distanciaPercorrida = tempoViagem * velocidadeMedia;

// Calcular a quantidade de litros consumidos
let litrosConsumidos = distanciaPercorrida / 12;

// Exibir os resultados
console.log(`Distância percorrida: ${distanciaPercorrida.toFixed(2)} km`);
console.log(`Quantidade de litros consumidos: ${litrosConsumidos.toFixed(2)} litros`);
