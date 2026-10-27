let nome = document.querySelector(".nome")
let personagem = document.querySelector(".personagem")
console.log(nome)
console.log(personagem)


function escolherpersonagem(nomepersonagem, imagempersonagem, corpersonagem){
    console.log("clicou no botão do Jason")
    nome.innerHTML= nomepersonagem
    personagem.src = imagempersonagem
    nome.style.color = corpersonagem

}
