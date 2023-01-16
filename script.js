// Coleta de dados
alert("Você poderia me dizer dois números, por favor?")
let numberOne = prompt("Digite o primeiro número:")
let numberTwo = prompt("Digite o segundo número:")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

// constantes
const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

// Par ou impar
if (numberOne % 2 == 0) {
  alert("O primeiro número que você escolheu é par.")
} else {
  alert("O primeiro número que você escolheu é impar.")
}

if (numberTwo % 2 == 0) {
  alert("E o segundo é par.")
} else {
  alert("E o segundo é impar.")
}

// Números iguais ou diferentes
if (numberOne == numberTwo) {
  alert("Você escolheu o mesmo número duas vezes.")
} else {
  alert("Os dois números que você escolheu são diferentes.")
}

// Soma
alert("A soma desses números é:  " + sum)

// Subtração
alert("A subtração desses números é:  " + sub)

// Divisão
alert("A divisão desses números é:  " + div)

// Resto da divisão
alert("O resto da divisão desses número é:  " + restDiv)