function Soma () {
    return 2 + 5;
}

console.log( Soma() );

function SomaII (n1, n2) {
    console.log(
        'O resultado da soma de', n1, '+', n2, 'é', n1+n2
    )

}

SomaII(5, 9)
SomaII(10, 100)

function Subtracao (n1, n2) {
    console.log(
        'O resultado da subtracao de', n1, '-', n2, 'é', n1-n2
    )
}

Subtracao(20, 10)

function multiplicacao (n1, n2) {
    console.log(
        'O resultado da multiplicacao de', n1, '*', n2, 'é', n1*n2
    )
}

multiplicacao(5, 9)

function Divisao (n1, n2) {
    console.log(
        'O resultado da divisao de', n1, '/', n2, 'é', n1/n2
    ) 
}

Divisao(10, 5)

const Potencia = (x, y) => {
    let result = x^y;
    return `${x} elevado a ${y} é igual a ${result}`;
}

console.log(Potencia(2, 3))