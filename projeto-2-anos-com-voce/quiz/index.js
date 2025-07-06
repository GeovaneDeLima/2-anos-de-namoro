import {perguntas} from "./perguntas.js"
let PergunAtual = 0
let Pontuacao = 0

mostrarnatela ()

function mostrarnatela(){
    const enun = document.getElementById('enunciado')
    const alter = document.querySelectorAll('aside')
    const numbe = document.getElementById('number')
    const peg = perguntas[PergunAtual]

    enun.innerHTML = peg.enunciado
    numbe.innerHTML = PergunAtual + 1
    peg.alternativas.forEach((at, i) => {
        alter[i].innerHTML = `<Strong>(${i + 1})</Strong> ${at}`
        alter[i].addEventListener('click', () => {
            if (i === peg.correta){
                Pontuacao++
                PergunAtual++
                if(PergunAtual < perguntas.length){
                    mostrarnatela()
                }else {
                    mostrarResultado()
                }
                return
            }else{
                PergunAtual++
                if(PergunAtual < perguntas.length){
                    mostrarnatela()
                }else{
                    mostrarResultado()
                }
                return
            }

            
        })
    })
    
}

function mostrarResultado(){

}