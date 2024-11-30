// Função para verificar a maioridade
function verificarMaioridade() {
    // Lê o nome e a idade da pessoa
    let nome = "Victor"
    let idade = 17;

    // Verifica se a pessoa é maior ou menor de idade
    let situacao = idade >= 18 ? "maior" : "menor";

    // Exibe o resultado no console
    console.log(nome + " é " + situacao + " de idade.");
}

// Chama a função para verificar a maioridade
verificarMaioridade();
