'use strict'

import { postFilme } from "./filmes.js"

const btnCadastrar=document.getElementById('cadastrar')

function pegarDados(){
    const JSONFilme={}
    const titulo=document.getElementById('titulo').value
    JSONFilme.nome=titulo
    const checkboxes = document.querySelectorAll('.posterFilme input[type="checkbox"]');
    const checkboxesSelecionados = []
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked)
            checkboxesSelecionados.push(checkbox.id);
    });
    JSONFilme.id_genero=checkboxesSelecionados
    console.log(checkboxesSelecionados);
    const sinopse=document.getElementById('sinopse').value
    JSONFilme.sinopse=sinopse
    const duracao=document.getElementById('duracao').value
    JSONFilme.duracao=duracao
    const lancamento=document.getElementById('lancamento').value
    JSONFilme.data_lancamento=lancamento
    const relancamento=document.getElementById('relancamento').value
    
    const foto=document.getElementById('link').value
    JSONFilme.foto_capa=foto
    const valor=document.getElementById('valor').value
    JSONFilme.valor_unitario=valor
    const classificacao = document.getElementById('classificacao').value;
    JSONFilme.id_classificacao=classificacao
    if(relancamento==null||relancamento==undefined||relancamento=='')
        return JSONFilme
    else{
        JSONFilme.data_relancamento=relancamento
        return JSONFilme
    }
}

async function inserirFilme(){
    const dadosFilme=pegarDados()
    console.log(dadosFilme)
    const retorno=await postFilme(dadosFilme)
    console.log(retorno)
    if(retorno)
        btnCadastrar.textContent='FILME INSERIDO COM SUCESSO!'
    else
        btnCadastrar.textContent='HOUVE UM ERRO!'
}

btnCadastrar.addEventListener('click', inserirFilme)