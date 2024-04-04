'use strict'

import { getFilmes, deleteFilme, postFilme } from "./filmes.js"

function criarTr(filme){
    const table=document.getElementById('tbody')

    const tr=document.createElement('tr')
    tr.classList.add('bg-white', 'border-b', 'dark:bg-gray-800', 'dark:border-gray-700')

    const titulo=document.createElement('th')
    titulo.scope='row'
    titulo.classList.add('px-6', 'py-4', 'bg-gray-50', 'dark:bg-gray-900', 'font-medium', 'text-gray-900', 'whitespace-nowrap' ,'dark:text-white')
    titulo.textContent=filme.nome

    const sinopse=document.createElement('td')
    sinopse.classList.add('px-6', 'py-4', 'bg-white', 'max-w-sinopsemaxw')
    sinopse.textContent=filme.sinopse

    const duracao=document.createElement('td')
    duracao.classList.add('px-6', 'py-4', 'bg-gray-50', 'dark:bg-gray-800')
    const duracao_exemplo=filme.duracao
    duracao.textContent=duracao_exemplo.substring(11, 19)
    
    const data_lancamento=document.createElement('td')
    data_lancamento.classList.add('px-6', 'py-4', 'bg-white', 'max-w-sinopsemaxw')
    const data_lancamento_exemplo=filme.data_lancamento
    data_lancamento.textContent=data_lancamento_exemplo.substring(0, 10)

    const data_relancamento=document.createElement('td')
    data_relancamento.classList.add('px-6', 'py-4', 'bg-gray-50', 'dark:bg-gray-800')
    if(filme.data_relancamento==null)
        data_relancamento.textContent='Este filme não possui data de relançamento.'
    else{
        const data_relancamento_exemplo=filme.data_relancamento
        data_relancamento.textContent=data_relancamento_exemplo.substring(0, 10)
    }

    const foto_capa_td=document.createElement('td')
    foto_capa_td.classList.add('px-6', 'py-4', 'bg-white')
    const foto_capa=document.createElement('img')
    foto_capa.classList.add('h-posterh', 'w-posterw')
    foto_capa.src=filme.foto_capa

    const valor=document.createElement('td')
    valor.classList.add('px-6', 'py-4', 'bg-gray-50', 'dark:bg-gray-800')
    valor.textContent=filme.valor_unitario

    const id=filme.id
    const deletar=document.createElement('td')
    deletar.classList.add('px-6', 'py-4', 'bg-white')
    const deletarImg=document.createElement('img')
    deletarImg.classList.add('h-deletarh', 'w-deletarw')
    deletarImg.src='../img/delete_icon.png'
    const deletarBtn=document.createElement('button')
    deletarBtn.id=id
    deletarBtn.onclick=setIDFilmeDelete

    const editar=document.createElement('td')
    editar.classList.add('px-6', 'py-4', 'bg-gray-50', 'dark:bg-gray-800')
    const editarImg=document.createElement('img')
    editarImg.src='../img/edit_icon.png'
    editarImg.classList.add('h-deletarh', 'w-deletarw')
    const editarBtn=document.createElement('button')
    editarBtn.id=id
    editarBtn.onclick=setIDFilmeEdit

    editarBtn.append(editarImg)
    editar.append(editarBtn)
    deletarBtn.append(deletarImg)
    deletar.append(deletarBtn)
    foto_capa_td.append(foto_capa)
    tr.append(titulo, sinopse, duracao, data_lancamento, data_relancamento, foto_capa_td, valor, deletar, editar)
    return tr
}

async function preencherTela(){
    const table=document.getElementById('tbody')
    const filmes=await getFilmes()
    filmes.forEach(filme => {
        const tr=criarTr(filme)
        table.append(tr)
    });
}

function setIDFilmeDelete(){
    const idFilmeDelete=this.id
    console.log(idFilmeDelete)
    localStorage.setItem('idFilmeDelete', idFilmeDelete)
    deleteFilme(idFilmeDelete)
    window.location.reload()
}

function setIDFilmeEdit(){
    const idFilmeEdit=this.id
    console.log(idFilmeEdit)
    localStorage.setItem('idFilmeEdit', idFilmeEdit)
}

preencherTela()