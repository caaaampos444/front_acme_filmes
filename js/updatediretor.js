'use strict'

import { putDiretor, getDiretorByID } from "./diretores.js";

const btnCadastrar=document.getElementById('cadastrar')

async function inserirDados(){
    let diretor=await getDiretorByID(localStorage.getItem('idDiretor'))

    const nome=document.getElementById('nome')
    nome.value=diretor[0].nome

    const biografia=document.getElementById('biografia')
    biografia.value=diretor[0].biografia

    const data_nascimento=document.getElementById('nascimento')
    const dataCompleta = diretor[0].data_nascimento
    data_nascimento.value=dataCompleta.substring(0, 10)

    const id_sexo=document.getElementById('sexo')
    id_sexo.value=diretor[0].sexo[0].id

    const foto=document.getElementById('link')
    foto.value=diretor[0].foto

    const falecimento=document.getElementById('falecimento')
    const dataFalecimento = diretor[0].data_falecimento
    if(dataFalecimento==null||dataFalecimento==''||dataFalecimento==undefined)
        falecimento.value=''
    else
        falecimento.value=dataFalecimento.substring(0, 10)

    const idsNacionalidadesDiretor = diretor[0].nacionalidade.map(nacionalidade => nacionalidade.id.toString());
    console.log(diretor[0]);
    idsNacionalidadesDiretor.forEach(id => {
        const checkbox = document.getElementById(id);
        if (checkbox) {
          checkbox.checked = true;
        }
      });
}

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
        //console.log(JSONDiretor);
        return JSONDiretor
    else{
        JSONDiretor.data_falecimento=falecimento
        //console.log(JSONDiretor);
        return JSONDiretor
    }
}

async function atualizarDiretor(){
    const dadosDiretor=pegarDados()
    console.log(dadosDiretor)
    const retorno=await putDiretor(dadosDiretor, localStorage.getItem('idDiretor'))
    console.log(retorno)
    if(retorno)
        btnCadastrar.textContent='DIRETOR ATUALIZADO COM SUCESSO!'
    else
        btnCadastrar.textContent='HOUVE UM ERRO!'
}

btnCadastrar.addEventListener('click', atualizarDiretor)
inserirDados()