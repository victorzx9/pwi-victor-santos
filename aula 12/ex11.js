// Função para calcular a média e determinar a situação do aluno
function calcularSituacaoAluno() {
    // Definindo o nome do aluno e as notas
    let nomeAluno = "João"; // Aqui você pode definir o nome diretamente ou ler do usuário.
    let nota1 = 8.5;
    let nota2 = 7.0;
    let nota3 = 9.2;
    let nota4 = 6.8;
    
    // Calcula a média das notas
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    
    // Verifica se o aluno foi aprovado ou reprovado
    let situacao = media >= 7 ? "Aprovado" : "Reprovado";
    
    // Exibe o nome do aluno, a média e a situação no console
    console.log("Aluno: " + nomeAluno);
    console.log("Média: " + media.toFixed(2));
    console.log("Situação: " + situacao);
}

// Chama a função para calcular a situação do aluno
calcularSituacaoAluno();
