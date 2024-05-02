'use strict'

import { postAtor } from "./atores.js";

const btnCadastrar=document.getElementById('cadastrar')

function pegarDados(){
    let JSONAtor={}
    const falecimento=document.getElementById('falecimento').value
    const checkboxes = document.querySelectorAll('.posterFilme input[type="checkbox"]');
    const checkboxesSelecionados = []
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked)
            checkboxesSelecionados.push(checkbox.id);
    });
    JSONAtor.id_nacionalidade=checkboxesSelecionados
    JSONAtor.nome=document.getElementById('nome').value
    JSONAtor.biografia=document.getElementById('biografia').value
    JSONAtor.data_nascimento=document.getElementById('nascimento').value
    JSONAtor.id_sexo=document.getElementById('sexo').value
    JSONAtor.foto=document.getElementById('link').value
    console.log(JSONAtor)
    if(falecimento==null||falecimento==undefined||falecimento=='')
        return JSONAtor
    else{
        JSONAtor.data_falecimento=falecimento
        return JSONAtor
    }
}

async function inserirAtor(){
    const dadosAtor=pegarDados()
    console.log(dadosAtor)
    const retorno=await postAtor(dadosAtor)
    console.log(retorno)
    if(retorno)
        btnCadastrar.textContent='ATOR INSERIDO COM SUCESSO!'
    else
        btnCadastrar.textContent='HOUVE UM ERRO!'
}

btnCadastrar.addEventListener('click', inserirAtor)