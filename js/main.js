'use strict'

import { getFilmes, getFilmeByID } from "./filmes.js"

function criarCard(filme){
    const button=document.createElement('button')
    button.classList.add('bg-transparent')
    const card=document.createElement('div')
    const poster=document.createElement('img')
    poster.src=filme.foto_capa
    poster.classList.add('w-mdivposterw','h-mdivposterh')
    const titulo=document.createElement('h2')
    titulo.textContent=filme.nome
    titulo.classList.add('text-titulo','text-white','font-bold')
    card.append(poster, titulo)
    button.append(card)
    return button
}

async function preencherContainer(){
    const container=document.querySelector('main')
    const filmes=await getFilmes()
    filmes.forEach (filme=>{
        const card=criarCard(filme)
        container.appendChild(card)
        console.log(filme)
    })
}

preencherContainer()
criarCard()