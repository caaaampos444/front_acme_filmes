'use strict'

import { getFilmeByID } from "./filmes.js"

const id=localStorage.getItem('idFilme')

async function preencherTela(){
    const filmeArray=await getFilmeByID(id)
    const filme=filmeArray[0]
    console.log(filme)
    document.title=filme.nome
    const body=document.querySelector('body')
    body.classList.add('h-bdyh', 'bg-background', 'p-bdypadding', 'flex', 'gap-bdygap')
    const poster=document.createElement('img')
    poster.src=filme.foto_capa
    const contents=document.createElement('div')
    contents.classList.add('flex', 'flex-col', 'justify-between')
    const header=document.createElement('div')
    header.classList.add('gap-divgap', 'flex-col', 'flex')
    const titles=document.createElement('div')
    const titulo=document.createElement('p')
    titulo.textContent=filme.nome
    titulo.classList.add('text-white', 'text-titulo')
    const sinopse=document.createElement('p')
    sinopse.textContent=filme.sinopse
    sinopse.classList.add('text-white', 'text-sinopse', 'w-sinopsew')
    const preco=document.createElement('p')
    preco.textContent=`R$${filme.valor_unitario}`
    preco.classList.add('text-green-600', 'text-sinopse')
    const btnAssistir=document.createElement('button')
    btnAssistir.textContent='Assistir'
    btnAssistir.classList.add('bg-btncolor', 'rounded-btnr', 'text-white', 'h-btnh', 'w-btnw', 'text-btn')
    const footer=document.createElement('div')
    footer.classList.add('flex', 'flex-row', 'gap-divgap')
    const duracao=document.createElement('p')
    duracao.textContent=`Duração: ${filme.duracao}`
    duracao.classList.add('text-white', 'text-sinopse')
    const lancamento=document.createElement('p')
    lancamento.textContent=`Lançado em: ${filme.data_lancamento}`
    lancamento.classList.add('text-white', 'text-sinopse')
    footer.append(duracao, lancamento)
    titles.append(titulo, sinopse)
    header.append(titles, preco, btnAssistir)
    contents.append(header, footer)
    body.append(poster, contents)
}

preencherTela()