const selectA = document.getElementById('valorBooleanoA')
const selectB = document.getElementById('valorBooleanoB')
const selectOperacao = document.getElementById('valorOperacao')
const button = document.getElementById('button');
const textResultado = document.getElementById('text_operacao')

button.addEventListener('click', calcularVerdade)



function calcularVerdade () {

    let valorA = pegarValores("valorA");
    let valorB = pegarValores("valorB");
    let valorOperacao = pegarValores("valorOperacao");

    let resultadoBooleano = calcularOperacao(valorA, valorB, valorOperacao)

    alterarTextoResultado(resultadoBooleano)

}

function pegarValores (valor) {

    switch (valor) {
        case "valorA" : return selectA.value;
        break;
        
        case  "valorB" : return selectB.value;
        break;

        case "valorOperacao" : return selectOperacao.value;
        break;
    }

}

function calcularOperacao (valorA, valorB, operacao) {

    switch (operacao) {

        case "conjuncao" : return calcularConjuncao(valorA, valorB);
        break;

        case "disjuncao" : return calcularDisjuncao(valorA, valorB);
        break;

        case "disjuncaoExclusiva" : return calcularDisjuncaoExclusiva(valorA, valorB);
        break;

        case "condicional" : return calcularCondicional(valorA, valorB);
        break;

        case "bicondicional" : return calcularBicondicional(valorA, valorB);
        break;

        case "negacao" : return calcularNegacao(valorA, valorB);
        break;
    }


}

function calcularConjuncao (valorA, valorB) {
    if (valorA == "verdadeiro" && valorB == "verdadeiro") {
        return true;
    } else {
        return false;
    }
}

function calcularDisjuncao (valorA, valorB) {
    if (valorA == "verdadeiro" || valorB == "verdadeiro") {
        return true;
    } else {
        return false;
    }
}

function calcularDisjuncaoExclusiva (valorA, valorB) {

    if (valorB != valorA ) {
        return true;
    } else {
        return false;
    }
}

function calcularCondicional(valorA, valorB) {

    if (valorA == "verdadeiro" && valorB == "falso") {
        return false;
    } else {
        return true;
    }

}

function calcularBicondicional(valorA, valorB) {

    if (valorA == valorB) {
        return true;
    } else {
        return false;
    }

}

function calcularNegacao(valorA, valorB) {

    if (valorA == "falso") {
        return true;
    } else {
        return false;
    }

}



function alterarTextoResultado(valorBooleano) {
    let texto = "";

    if (valorBooleano) {
        animarTransicao()
        texto = "Verdadeiro"
        textResultado.style.backgroundColor = "#4faa57"
        
    } else if (!valorBooleano) {
        animarTransicao()
        texto = "Falso"
        textResultado.style.backgroundColor = "#c43c3c"
        
    }

    textResultado.innerText = texto
}

function animarTransicao () {
    textResultado.style.animationName = "transicaoResposta";
    setTimeout(function(){
        textResultado.style.animationName = ""
    },1000)
}