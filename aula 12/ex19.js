// Loop para percorrer os números de 1 a 10
for (let i = 1; i <= 10; i++) {
    // Imprimir a tabuada de i (de 1 a 10)
    console.log(`Tabuada do ${i}:`);
    
    for (let j = 1; j <= 10; j++) {
        // Imprimir o resultado da multiplicação
        console.log(`${i} x ${j} = ${i * j}`);
    }
    
    // Imprimir uma linha em branco entre as tabuadas para facilitar a leitura
    console.log('');
}
