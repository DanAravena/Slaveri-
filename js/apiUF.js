

let url = "https://mindicador.cl/api"


    .then(Response => Response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData = (data) => {
    console.log(data)
    let body = ''
    for (let i = 0; i<data.lenght; i++){
     body += <li><a>${data[i].valor}</a></li>  
    }
}

document.getElementById('UF').innerHTML = body