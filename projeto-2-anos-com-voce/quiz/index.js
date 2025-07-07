import {perguntas} from "./perguntas.js"

let PergunAtual = 0
let Pontuacao = 0

const alter = document.querySelectorAll('aside')
const enun = document.getElementById('enunciado')
const numbe = document.getElementById('number')

alter.forEach((botao, i) => {
    botao.addEventListener('click', () => {verificarResposta(i)})
} )


mostrarnatela ()

function mostrarnatela(){
    const peg = perguntas[PergunAtual]

    enun.innerHTML = peg.enunciado
    numbe.innerHTML = PergunAtual + 1
    peg.alternativas.forEach((at, i) => {
        alter[i].innerHTML = `<Strong>(${i + 1})</Strong> ${at}`

    })
    
}

function verificarResposta(indice){
   const peg = perguntas[PergunAtual]

   if(indice === peg.correta){
        Pontuacao++
   }

   PergunAtual++
    
   if(PergunAtual < perguntas.length){
    mostrarnatela()
   }else{
    mostrarResultado()
   }
    
}

function mostrarResultado(){
    alert('ola')
}