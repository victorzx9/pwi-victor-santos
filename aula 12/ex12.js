// Função para calcular o valor final a ser pago pelo produto
function calcularPagamento() {
    // Solicita o valor do produto
    let valorProduto = 400;

    // Solicita o código da condição de pagamento
    let condicaoPagamento = 4;

    let valorFinal;

    // Condições de pagamento
    if (condicaoPagamento === 1) {
        // À vista em Dinheiro ou Pix (15% de desconto)
        valorFinal = valorProduto * 0.85; // Desconto de 15%
    } else if (condicaoPagamento === 2) {
        // À vista no Cartão de Crédito (10% de desconto)
        valorFinal = valorProduto * 0.90; // Desconto de 10%
    } else if (condicaoPagamento === 3) {
        // Parcelado no Cartão em 2 vezes (sem juros)
        valorFinal = valorProduto; // Preço normal
    } else if (condicaoPagamento === 4) {
        // Parcelado no Cartão em 3 vezes ou mais (10% de juros)
        valorFinal = valorProduto * 1.10; // Juros de 10%
    } else {
        // Caso o código de pagamento não seja válido
        console.log("Opção de pagamento inválida.");
        return;
    }

    // Exibe o valor final a ser pago
    console.log("Valor final a ser pago: R$ " + valorFinal.toFixed(2));
}

// Chama a função para calcular o pagamento
calcularPagamento();
