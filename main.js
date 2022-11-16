const inputs = document.querySelectorAll('.input')
const button = document.getElementById('button')
const form = document.getElementById('form-contato')
const inputNomeContato = document.getElementById('nome-contato')
const inputTelefoneContato = document.getElementById('telefone-contato')
const corpoTabela = document.querySelector('tbody')
const corpoRodape = document.querySelector('tfoot')
const contagemContato = []
const idContato = []

let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
    contagemDeContato()
    idDoContato()
})

function idDoContato() {

    let ContagemId = 0

    for (let i = 0; i < idContato.length; i++) {

        somaId += idContato[i]
    }

}

function contagemDeContato() {

    let linhaR = '<tr>'
    linhaR += `<td>-</td>`
    linhaR += `<td>Total de Contatos</td>`
    linhaR += `<td>${contagemContato.length}</td>`
    linhaR += '</tr>'

    corpoRodape.innerHTML = linhaR

    let somaContato = 0

    for (let i = 0; i < contagemContato.length; i++) {

        somaContato += contagemContato[i]
    }

}

inputTelefoneContato.addEventListener('keyup', () => {

    if (inputTelefoneContato.value.length != 11) {

        inputTelefoneContato.classList.add('erro')
        inputTelefoneContato.classList.add('erro:hover')
        inputTelefoneContato.classList.add('erro:focus')
        document.querySelector('.errortel').style.display = 'block'

    } else {

        inputTelefoneContato.classList.remove('erro')
        inputTelefoneContato.classList.remove('erro:hover')
        inputTelefoneContato.classList.remove('erro:focus')
        document.querySelector('.errortel').style.display = 'none'

    }

    if (inputTelefoneContato.value.length == '') {

        inputTelefoneContato.classList.remove('erro')
        inputTelefoneContato.classList.remove('erro:hover')
        inputTelefoneContato.classList.remove('erro:focus')
        document.querySelector('.errortel').style.display = 'none'


    }


})

function adicionaLinha() {

        contagemContato.push(inputNomeContato.value && inputTelefoneContato.value)
        idContato.push(inputNomeContato.length && inputTelefoneContato.value)
    
        let linha = '<tr>'
        linha += `<td>#0${idContato.length}</td>`
        linha += `<td>${inputNomeContato.value}</td>`
        linha += `<td>${inputTelefoneContato.value}</td>`
        linha += '</tr>'
    
        linhas += linha 
    
        corpoTabela.innerHTML = linhas

    inputNomeContato.value = ''
    inputTelefoneContato.value = ''

}

button.addEventListener('click', function(e) {

    if (inputTelefoneContato.value.length != 11 || contagemContato.includes(inputNomeContato.value) || contagemContato.includes(inputTelefoneContato.value)) {

        document.querySelector('.errorname').style.display = 'block'
        inputNomeContato.classList.add('erro')
        inputNomeContato.classList.add('erro:hover')
        inputNomeContato.classList.add('erro:focus')


        e.preventDefault()

    } else {

        document.querySelector('.errorname').style.display = 'none'
        inputNomeContato.classList.remove('erro')
        inputNomeContato.classList.remove('erro:hover')
        inputNomeContato.classList.remove('erro:focus')
    }

})