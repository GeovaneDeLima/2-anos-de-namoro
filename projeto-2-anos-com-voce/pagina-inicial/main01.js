document.getElementById('but').addEventListener('click', ()=> {
    document.querySelector('main').style.display = 'none'
    document.querySelector('div#login').style.display = 'block'
})

document.getElementsByTagName('button')[1].addEventListener('click', () => {
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha =document.getElementById('senha').value
    const msgErro = document.getElementById('msgerro')

    if(nome === "" || email === "" || senha === ""){
        msgErro.innerHTML = 'Preencha todos os campos antes de continuar, sua apressada!'
        return
    }

    const divClick = document.createElement('div')
    const divPup = document.createElement('div')
    const butpup = document.createElement('button')
    const textpup = document.createElement('div')

    divPup.classList.add('pup')
    divClick.classList.add('click')
    textpup.classList.add('text')

    document.body.appendChild(divClick)
    document.body.appendChild(divPup)
    divPup.appendChild(textpup)
    divPup.appendChild(butpup)
    
    textpup.innerHTML = `<h2>Usuário Não identificado</h2> <br>
    <h4>Você não sabe qual é a senha né?
    </h4> <br>
    <p>Bom enfim. Não posso te deixar passar sem saber que você é Andressa mesmo. A Andressa verdadeira saberia a senha 🤷‍♀️. Por isso preciso que você responda algumas perguntas. Aperte no botão abaixo para começar</p> <br>
    `

    butpup.textContent = 'Fazer Teste'
    divClick.style.backgroundColor = 'rgba(0, 0, 0, 0.364)'

    butpup.addEventListener('click', () => {
        window.location.href = "../quiz/layout.html"
    })

    divClick.addEventListener('click', () => {
        divPup.remove()
        divClick.remove()
    })
})