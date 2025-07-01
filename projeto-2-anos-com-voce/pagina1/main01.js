const cont = document.createElement('div')
const conteiner = document.createElement('div')
const erro = document.createElement('div')
const titulo = document.createElement('h4')
const text = document.createElement('p')
const img = document.createElement('div')
const but = document.createElement('div')

document.getElementById('but').addEventListener('click', mostrarMensagemDeErro)

function mostrarMensagemDeErro(){
    conteiner.classList.add('cont02')
    cont.classList.add('cont')
    erro.classList.add('erro')
    img.classList.add('img')
    titulo.classList.add('titu')
    text.classList.add('text')
    but.classList.add('but')

    document.body.appendChild(cont)
    document.body.appendChild(conteiner)
    conteiner.appendChild(erro)
    erro.appendChild(img)
    erro.appendChild(titulo)
    erro.appendChild(text)
    erro.appendChild(but)

    titulo.innerHTML = 'OPS, erro encotrado!'
    text.innerHTML = 'Nosso sistema está retornando um erro, porem não consegue indentificar o erro! Por favor, cique no botão abaixo para encontrar o problema!'

    but.innerHTML = ' Encontrar Probelma'
    but.addEventListener('click', ProblemaEncontrado)
    cont.addEventListener('click', () => {
        conteiner.remove()
        cont.remove()

    })
}

function ProblemaEncontrado(){
    conteiner.remove()
    cont.remove()

    document.body.appendChild(cont)
    document.body.appendChild(conteiner)

    titulo.remove()
    text.remove()
    
    but.innerHTML = 'Iniciar Teste'

}