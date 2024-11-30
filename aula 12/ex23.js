// Solicitar ao usuário as informações necessárias
let valorHoraAula = 25
let numeroAulas = 90
let percentualINSS = 12

// Calcular o salário bruto
let salarioBruto = valorHoraAula * numeroAulas;

// Calcular o valor do desconto do INSS
let descontoINSS = (salarioBruto * percentualINSS) / 100;

// Calcular o salário líquido
let salarioLiquido = salarioBruto - descontoINSS;

// Exibir o resultado final
console.log(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}`);
console.log(`Desconto do INSS: R$ ${descontoINSS.toFixed(2)}`);
console.log(`Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`);
