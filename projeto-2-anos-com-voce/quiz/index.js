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
   console.log(PergunAtual)
   if(PergunAtual < perguntas.length){
    mostrarnatela()
   }else{
    mostrarResultado()
   }
    
}

function mostrarResultado(){
    const fundo = document.createElement('div')
    const content = document.createElement('div')
    const text = document.createElement('div')
    const butPresente = document.createElement('button')
    const butErro = document.createElement('button')

    content.classList.add('content')
    fundo.classList.add('fundo')

    document.querySelector('body').appendChild(fundo)
    fundo.appendChild(content)
    content.appendChild(text)


    if(Pontuacao < 8){
        butErro.textContent = 'Refazer Teste'
        content.appendChild(butErro)

        text.innerHTML = `<h3> Você acertou ${Pontuacao} de ${perguntas.length} perguntas. </h3> <br>
        <h4> So isso? esperava mais de você.</h4> <br>
        E ainda diz que me ama! HUMMM. Volte ao começo e faça o teste de novo agora, se não fica sem ver o que eu fiz pra você!`

        butErro.addEventListener('click', ()=>{
            location.reload()
        })
    }else{
        butPresente.textContent = 'Ver Super site Geo + Dessa'
        content.appendChild(butPresente)

        text.innerHTML = `<h3> Você acertou ${Pontuacao} de ${perguntas.length} perguntas. </h3> <br>
        <h4>Hum agora sei que você é realmente você mesmo.</h4> <br>
        Por favor, meu bem fique a vontade para ver nosso <strong> "Repositório de Lembranças"</strong>, feito por mim (Geovane), com muito amor, carinho e MUITA PACIÊNCIA.`

        butPresente.addEventListener('click', () =>{
            window.location.href = "../Repositorio de Lembrancas/index.html"
        })
    }

}