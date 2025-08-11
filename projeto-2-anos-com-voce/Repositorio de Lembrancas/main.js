let cont = 1 

document.querySelector(".butVer").addEventListener('click', () => {
    const divCont = document.querySelector('.carroseis')

    if(cont === 1) {
        divCont.style.display = 'block'
        document.querySelector('.butVer').textContent = 'Não ver'

        cont++
    }else if (cont === 2) {
        divCont.style.display = 'none'
        document.querySelector('.butVer').textContent = ' Ver'
        cont--
    }
})