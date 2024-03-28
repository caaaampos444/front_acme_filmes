'use strict'

const botao=document.getElementById('btn')

function logar(){
    const email=document.getElementById('email').value
    const senha=document.getElementById('senha').value
    if(senha=='admin'&&email=='admin'){
        alert('Usuário logado com sucesso.')
        window.location.href='../html/cms.html'
    }
    else
        alert('Usuário ou senha incorretos.')
}

botao.addEventListener('click', logar)