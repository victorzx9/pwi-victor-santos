// Função para calcular a idade em anos, meses e dias
function calcularIdade() {
    // Solicita o ano de nascimento
     let anoNascimento = 2008;
    
    // Obtém o ano atual
    let anoAtual = new Date().getFullYear();
    
    // Calcula a idade em anos
    let anosVividos = anoAtual - anoNascimento;

    // Calcula a idade em meses (considerando 12 meses por ano)
    let mesesVividos = anosVividos * 12;
    
    // Calcula a idade em dias (considerando 365 dias por ano e 30 dias por mês)
    let diasVividos = anosVividos * 365;  // Anos convertidos para dias
    let mesesRestantes = mesesVividos % 12;
    diasVividos += mesesRestantes * 30;  // Meses convertidos para dias

    // Exibe o resultado na tela
    console.log(`${anosVividos} anos, ${mesesRestantes} meses e ${diasVividos} dias de vida.`);
}

// Chama a função para calcular a idade
calcularIdade();
