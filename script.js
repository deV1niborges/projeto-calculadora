// Seleção dos elementos
const display = document.querySelector("#displayInput")
const botaoIgual = document.querySelector(".igual")
const botaoPonto = document.querySelector(".ponto")
const botoesNumeros = document.querySelectorAll(".num")
const botoesOperadores = document.querySelectorAll(".operador")

// Variáveis globais
let operadorAtual = ""
let operador = null
let valorAnterior = ""
let calculando = false

// Funções
function atualizandoDisplay() {
    display.value = operadorAtual
}

function InsereNumero(evento) {
    if(calculando) {
        operadorAtual = evento.target.textContent
        calculando = false
    } else {
        operadorAtual += evento.target.textContent
    }

    atualizandoDisplay()
}

function inserePonto() {
    if(operadorAtual.indexOf(".") === -1) {
        operadorAtual += "."
        atualizandoDisplay()
    }
}

function inserOperador(evento) {
    if(operadorAtual !== "") {
        if(!calculando) {
            if(operador !== null) {
                calcula()
            }
            valorAnterior = operadorAtual
            operadorAtual = ""
        }
        operador = evento.target.textContent
    }
}

function calcula() {
    let resultado = null
    const operandoAnterior = parseFloat(valorAnterior)
    const operandoAtual =parseFloat(operadorAtual)

    switch (operador) {
        case "+":
        resultado = operandoAnterior + operandoAtual
        break
        case "-":
        resultado = operandoAnterior - operandoAtual
        break
        case "*":
        resultado = operandoAnterior * operandoAtual
        break
        case "/":
        resultado = operandoAnterior / operandoAtual
        break
    }

    operadorAtual = String(resultado)
    valorAnterior = operadorAtual
    calculando = true
    atualizandoDisplay()
}

// Eventos
botaoPonto.addEventListener("click", inserePonto)
botoesNumeros.forEach((botao) => botao.addEventListener("click", InsereNumero))
botoesOperadores.forEach((botao) => botao.addEventListener("click", inserOperador))
botaoIgual.addEventListener("click", calcula)