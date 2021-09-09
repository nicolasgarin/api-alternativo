var juego


function mostrarjuego(juego) {
    let img = "";
    let info = "";
    
    info += `
                <h2>${juego.nombre}</h2>
                <p>${juego.descripcion}</p><br>
                <p>Año de lanzamiento: ${juego.año}. Precio: ${juego.precio}</p>
            `;
    img += `
                <img src="img/${JSON.parse(localStorage.getItem("Juego")).juegoId}/1.jpg">
            `
    document.getElementById("contenido").innerHTML = info;
    document.getElementById("imagen").innerHTML = img;
}

document.addEventListener("DOMContentLoaded", function(e){
    fetch("https://nicolasgarin.github.io/api-alternativo/Jsons/"+ JSON.parse(localStorage.getItem("Juego")).juegoId + ".json")
        .then(respuesta => respuesta.json())

        .then(objeto => {
            juego = objeto;
            mostrarjuego(juego)
        });
});
