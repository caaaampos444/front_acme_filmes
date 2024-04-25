'use strict'

import { getAtores, getAtorByID, deleteAtor, postAtor, putAtor } from "./atores.js"

function criarTr(ator){
    const tr=document.createElement('tr')
    tr.classList.add('bg-white', 'border-b', 'dark:bg-gray-800', 'dark:border-gray-700')

    const nome=document.createElement('th')
    nome.scope='row'
    nome.classList.add('px-6', 'py-4', 'bg-gray-50', 'dark:bg-gray-900', 'font-medium', 'text-gray-900', 'whitespace-nowrap' ,'dark:text-white')
    nome.textContent=ator.nome
    
    const data_nascimento=document.createElement('td')
    data_nascimento.classList.add('px-6', 'py-4', 'bg-white', 'max-w-sinopsemaxw')
    const data_nascimento_exemplo=ator.data_nascimento
    data_nascimento.textContent=data_nascimento_exemplo.substring(0, 10)

    const data_falecimento=document.createElement('td')
    data_falecimento.classList.add('px-6', 'py-4', 'bg-gray-50', 'dark:bg-gray-800')
    if(ator.data_falecimento==null)
        data_falecimento.textContent='Este ator ainda não faleceu.'
    else{
        const data_falecimento_exemplo=ator.data_falecimento
        data_falecimento.textContent=data_falecimento_exemplo.substring(0, 10)
    }

    
    const biografia=document.createElement('td')
    biografia.classList.add('px-6', 'py-4', 'bg-white', 'max-w-sinopsemaxw')
    biografia.textContent=ator.biografia

    const foto_capa_td=document.createElement('td')
    foto_capa_td.classList.add('px-6', 'py-4', 'bg-white')
    const foto_capa=document.createElement('img')
    foto_capa.classList.add('h-posterh', 'w-posterw')
    foto_capa.src=ator.foto

    const duracao=document.createElement('td')
    duracao.classList.add('px-6', 'py-4', 'bg-gray-50', 'dark:bg-gray-800')
    const duracao_exemplo=ator.duracao
    duracao.textContent=duracao_exemplo.substring(11, 19)

    const valor=document.createElement('td')
    valor.classList.add('px-6', 'py-4', 'bg-gray-50', 'dark:bg-gray-800')
    valor.textContent=ator.valor_unitario

    const id=ator.id
    const deletar=document.createElement('td')
    deletar.classList.add('px-6', 'py-4', 'bg-white')
    const deletarImg=document.createElement('img')
    deletarImg.classList.add('h-deletarh', 'w-deletarw')
    deletarImg.src='../img/delete_icon.png'
    const deletarBtn=document.createElement('button')
    deletarBtn.id=id
    deletarBtn.onclick=deletarAtor

    const editar=document.createElement('td')
    editar.classList.add('px-6', 'py-4', 'bg-gray-50', 'dark:bg-gray-800')
    const editarImg=document.createElement('img')
    editarImg.src='../img/edit_icon.png'
    editarImg.classList.add('h-deletarh', 'w-deletarw')
    const editarBtn=document.createElement('button')
    editarBtn.id=id
    editarBtn.onclick=editarAtor

    editarBtn.append(editarImg)
    editar.append(editarBtn)
    deletarBtn.append(deletarImg)
    deletar.append(deletarBtn)
    foto_capa_td.append(foto_capa)
    tr.append(nome, biografia, duracao, data_nascimento, data_falecimento, foto_capa_td, valor, deletar, editar)
   
    return tr
}

async function preencherTela(){
    const table=document.getElementById('tbody')
    const atores=await getAtores()
    atores.forEach(ator => {
        console.log(ator)
        const tr=criarTr(ator)
        table.append(tr)
    });
}

async function deletarAtor(){
    const idAtorDelete=this.id
    await deletarAtor(idAtorDelete)
    window.location.reload()
}

function editarAtor(){
    const idAtorEdit=this.id
    console.log(idAtorEdit)
}

console.log(getAtores())
preencherTela()