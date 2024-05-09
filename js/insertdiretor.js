'use strict'

import { postDiretor } from "./diretores.js";

const btnCadastrar=document.getElementById('cadastrar')

function pegarDados(){
    let JSONDiretor={}
    const falecimento=document.getElementById('falecimento').value
    const checkboxes = document.querySelectorAll('.posterFilme input[type="checkbox"]');
    const checkboxesSelecionados = []
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked)
            checkboxesSelecionados.push(checkbox.id);
    });
    JSONDiretor.id_nacionalidade=checkboxesSelecionados
    JSONDiretor.nome=document.getElementById('nome').value
    JSONDiretor.biografia=document.getElementById('biografia').value
    JSONDiretor.data_nascimento=document.getElementById('nascimento').value
    JSONDiretor.id_sexo=document.getElementById('sexo').value
    JSONDiretor.foto=document.getElementById('link').value
    if(falecimento==null||falecimento==undefined||falecimento=='')
        JSONDiretor.data_falecimento=null
    else
        JSONDiretor.data_falecimento=falecimento
    return JSONDiretor
}

async function inserirDiretor(){
    const dadosDiretor=pegarDados()
    console.log(dadosDiretor)
    const retorno=await postDiretor(dadosDiretor)
    console.log(retorno)
    if(retorno)
        btnCadastrar.textContent='DIRETOR INSERIDO COM SUCESSO!'
    else
        btnCadastrar.textContent='HOUVE UM ERRO!'
}

btnCadastrar.addEventListener('click', inserirDiretor)