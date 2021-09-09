const USERS_URL = "https://nicolasgarin.github.io/api-alternativo/Jsons/Users.json"
const JUEGOS_URL = "https://nicolasgarin.github.io/api-alternativo/Jsons/Juegos.json"

function cargarlistadojuegos(url) {
    document.getElementById("tablajuegos").innerHTML = "";
    fetch(url)
        .then(respuesta => respuesta.json())

        .then(listado => {

            for (let i = 0; i < listado.length;i++) {

                let row = "";

                row = ` 
                    <tr>
                        <td>`  + listado[i].nombre + ` </td>
                        <td style="width: 50px;background-color: rgb(161, 155, 241);">`  + listado[i].anio + ` </td>
                        <td style="width: 400px;">`  + listado[i].descripcion + `
                        <br><button onclick="verjuego(${listado[i].id})">Ver Juego</button> </td>
                        <td style="width: 50px;background-color: rgb(161, 155, 241);">USD `  + listado[i].precio + ` </td>
                        <td><img style="height:150px;" src=` + listado[i].img + `></td>
                    </tr>
                    ` ;
                document.getElementById("tablajuegos").innerHTML += row;
            }
        })
        .catch(error => alert("Hubo un error: " + error));
}

function verjuego(id) {
    localStorage.setItem("Juego",JSON.stringify({juegoId: id}));
    window.location = "info-juego.html";
}