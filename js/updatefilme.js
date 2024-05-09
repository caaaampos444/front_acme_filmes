'use strict'

import { putFilme, getFilmeByID } from "./filmes.js"

const btnCadastrar=document.getElementById('cadastrar')

async function inserirDados(){
    let filme=await getFilmeByID(localStorage.getItem('idFilme'))
    console.log(filme);

    const titulo=document.getElementById('titulo')
    titulo.value=filme[0].nome

    const sinopse=document.getElementById('sinopse')
    sinopse.value=filme[0].sinopse

    const duracao=document.getElementById('duracao')
    const duracaoCompleta=filme[0].duracao
    duracao.value=duracaoCompleta.split('T')[1].split('.')[0];

    const data_nascimento=document.getElementById('lancamento')
    const dataCompleta = filme[0].data_lancamento
    data_nascimento.value=dataCompleta.substring(0, 10)

    const relancamento=document.getElementById('relancamento')
    const dataRelancamento = filme[0].data_relancamento
    if(dataRelancamento==null||dataRelancamento==''||dataRelancamento==undefined)
        relancamento.value=''
    else
        relancamento.value=dataRelancamento.substring(0, 10)

    const id_classificacao=document.getElementById('classificacao')
    id_classificacao.value=filme[0].classificacao[0].id
    
    const foto=document.getElementById('link')
    foto.value=filme[0].foto_capa

    const valor=document.getElementById('valor')
    valor.value=filme[0].valor_unitario

    const idsGenerosFilme = filme[0].generos.map(generos => generos.id.toString());
    idsGenerosFilme.forEach(id => {
        const checkbox = document.getElementById(id);
        if (checkbox) {
          checkbox.checked = true;
        }
      });
}

async function pegarDados(){
    let filme=await getFilmeByID(localStorage.getItem('idFilme'))
    const JSONFilme={}

    const idsAtores = filme[0].atores.map(ator => ator.id);
    JSONFilme.id_ator = idsAtores

    const idsDiretores = filme[0].diretores.map(diretor => diretor.id);
    JSONFilme.id_diretor = idsDiretores


    const titulo=document.getElementById('titulo').value
    JSONFilme.nome=titulo
    const checkboxes = document.querySelectorAll('.posterFilme input[type="checkbox"]');
    const checkboxesSelecionados = []
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked)
            checkboxesSelecionados.push(checkbox.id);
    });
    JSONFilme.id_genero=checkboxesSelecionados

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

    if(relancamento==null||relancamento==undefined||relancamento==''){
        //console.log(JSONFilme);
        JSONFilme.data_relancamento=null
        return JSONFilme
    }
    else{
        JSONFilme.data_relancamento=relancamento
        //console.log(JSONFilme);
        return JSONFilme
    }
}

async function atualizarFilme(){
    const dadosFilme=await pegarDados()
    console.log(dadosFilme)
    const retorno=await putFilme(dadosFilme, localStorage.getItem('idFilme'))
    console.log(retorno)
    if(retorno)
        btnCadastrar.textContent='FILME ATUALIZADO COM SUCESSO!'
    else
        btnCadastrar.textContent='HOUVE UM ERRO!'
}

btnCadastrar.addEventListener('click', atualizarFilme)

inserirDados()