let peso = 31.00
let altura = 1.75

let imc = peso / (altura * altura)

let condicao

if (imc < 18.5) {
    condicao = "Abaixo do peso"
} else if (imc >= 18.5 && imc <= 24.9) {
    condicao = "Peso ideal (parabéns)"
} else if (imc >= 25.00 && imc <= 29.9) {
    condicao = "Levemente acima do peso"
} else if (imc >= 30.00 && imc <= 34.9) {
    condicao = "Obesidade grau I"
} else if (imc >= 35.00 && imc <= 39.9) {
    condicao = "Obesidade grau II (severa)"
} else {
    condicao = "Obesidade grau III (mórbida)"
}
console.log("O seu IMC é: " + imc)
console.log("Condição: " + condicao)
