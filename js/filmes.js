export async function getFilmes(){
    let url='http://localhost:8080/v2/acmefilmes/filmes'
    const response=await fetch(url)
    const data=await response.json()
    return data.filmes
}

export async function getFilmeByID(id){
    let url=`http://localhost:8080/v2/acmefilmes/filme/${id}`
    const response=await fetch(url)
    const data=await response.json()
    return data.filme
}

export async function postFilme(filme){
    const url='http://localhost:8080/v2/acmefilmes/filme'
    const options={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filme)
    }
    const response=await fetch(url,options)
    return response.ok
}

export async function deleteFilme(id){
    const url=`http://localhost:8080/v2/acmefilmes/deletefilme/${id}`
    const options={
        method:'DELETE'
    }
    const response=await fetch(url,options)
    return response.ok
}