let linkButton = document.querySelector("#linkButton")
let conteudo = document.querySelector("#container-conteudo ")

linkButton.addEventListener('click', animarConteudo)

function animarConteudo() {
    conteudo.style.animationName = "transitionConteudo"

    setTimeout(() => {
        conteudo.style.animationName = "transitionConteud"
    },1000)
}