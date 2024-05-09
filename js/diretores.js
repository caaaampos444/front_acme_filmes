export async function getDiretores(){
    let url='http://localhost:8080/v2/acmefilmes/diretores'
    const response=await fetch(url)
    const data=await response.json()
    return data.diretores
}

export async function getDiretorByID(id){
    let url=`http://localhost:8080/v2/acmefilmes/diretor/${id}`
    const response=await fetch(url)
    const data=await response.json()
    return data.diretor
}

export async function postDiretor(diretor){
    const url='http://localhost:8080/v2/acmefilmes/diretor/insert'
    const options={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(diretor)
    }
    const response=await fetch(url,options)
    return response.ok
}

export async function putDiretor(diretor, id){
    const url=`http://localhost:8080/v2/acmefilmes/diretor/update/${id}`
    const options={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(diretor)
    }
    const response=await fetch(url,options)
    return response.ok
}

export async function deleteDiretor(id){
    const url=`http://localhost:8080/v2/acmefilmes/diretor/delete/${id}`
    const options={
        method:'DELETE'
    }
    const response=await fetch(url,options)
    return response.ok
}