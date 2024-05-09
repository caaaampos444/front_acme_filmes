export async function getAtores(){
    let url='http://localhost:8080/v2/acmefilmes/atores'
    const response=await fetch(url)
    const data=await response.json()
    return data.atores
}

export async function getAtorByID(id){
    let url=`http://localhost:8080/v2/acmefilmes/ator/${id}`
    const response=await fetch(url)
    const data=await response.json()
    return data.ator
}

export async function postAtor(ator){
    const url='http://localhost:8080/v2/acmefilmes/ator/insert'
    const options={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ator)
    }
    const response=await fetch(url,options)
    return response.ok
}

export async function putAtor(ator, id){
    const url=`http://localhost:8080/v2/acmefilmes/ator/update/${id}`
    const options={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ator)
    }
    const response=await fetch(url,options)
    return response.ok
}

export async function deleteAtor(id){
    const url=`http://localhost:8080/v2/acmefilmes/ator/delete/${id}`
    const options={
        method:'DELETE'
    }
    const response=await fetch(url,options)
    return response.ok
}