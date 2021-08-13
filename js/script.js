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
                        <td>`  + listado[i].anio + ` </td>
                        <td>`  + listado[i].descripcion + ` </td>
                        <td>`  + listado[i].precio + ` </td>
                        <td> </td>
                    </tr>
                    ` ;
                document.getElementById("tablajuegos").innerHTML += row;
            }
        })
        .catch(error => alert("Hubo un error: " + error));
    }