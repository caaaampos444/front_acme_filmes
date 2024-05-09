'use strict'

import { putAtor, getAtorByID } from "./atores.js";

const btnCadastrar=document.getElementById('cadastrar')

async function inserirDados(){
    let ator=await getAtorByID(localStorage.getItem('idAtor'))

    const nome=document.getElementById('nome')
    nome.value=ator[0].nome

    const biografia=document.getElementById('biografia')
    biografia.value=ator[0].biografia

    const data_nascimento=document.getElementById('nascimento')
    const dataCompleta = ator[0].data_nascimento
    data_nascimento.value=dataCompleta.substring(0, 10)

    const id_sexo=document.getElementById('sexo')
    id_sexo.value=ator[0].sexo[0].id

    const foto=document.getElementById('link')
    foto.value=ator[0].foto

    const falecimento=document.getElementById('falecimento')
    const dataFalecimento = ator[0].data_falecimento
    if(dataFalecimento==null||dataFalecimento==''||dataFalecimento==undefined)
        falecimento.value=''
    else
        falecimento.value=dataFalecimento.substring(0, 10)

    const idsNacionalidadesAtor = ator[0].nacionalidade.map(nacionalidade => nacionalidade.id.toString());
    idsNacionalidadesAtor.forEach(id => {
        const checkbox = document.getElementById(id);
        if (checkbox) {
          checkbox.checked = true;
        }
      });
}

function pegarDados(){
    console.log(localStorage.getItem('idAtor'))
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
    if(falecimento==null||falecimento==undefined||falecimento=='')
        //console.log(JSONAtor);
        return JSONAtor
    else{
        JSONAtor.data_falecimento=falecimento
        //console.log(JSONAtor);
        return JSONAtor
    }
}

async function atualizarAtor(){
    const dadosAtor=pegarDados()
    console.log(dadosAtor)
    const retorno=await putAtor(dadosAtor, localStorage.getItem('idAtor'))
    console.log(retorno)
    if(retorno)
        btnCadastrar.textContent='ATOR ATUALIZADO COM SUCESSO!'
    else
        btnCadastrar.textContent='HOUVE UM ERRO!'
}

btnCadastrar.addEventListener('click', atualizarAtor)
inserirDados()