function traerDatosAPI() {
    fetch('https://randomuser.me/api')
        .then(datos => datos.json())
        .then(datos=> {
            console.log(datos)
            clientes_contenido.innerHTML+=
            `<div class="tarjeta">
                         <img src = "${datos.results[0].picture.large}"</img><br> 
                         ${datos.results[0].name.title}, ${datos.results[0].name.last}, ${datos.results[0].name.first}<br>
                         ${datos.results[0].email}<br>
                         ${datos.results[0].dob.age} años<br>`
        })

}


