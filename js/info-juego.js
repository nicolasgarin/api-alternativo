var juego

function mostrarjuego(juego) {
    let img = "";
    let info = "";
    
    info = `
                <h2>${juego.nombre}</h2>
                <p>${juego.descripcion}</p><br>
                <p>Año de lanzamiento: ${juego.año}. Precio: ${juego.precio}</p>
            `;
    img = `
                <img src="img/">
            `
    document.getElementById("contenido") = info;
    document.getElementById("imagen") = img;
}

document.addEventListener("DOMContentLoaded", function(e){
    fetch("https://nicolasgarin.github.io/api-alternativo/Jsons/"+ JSON.parse(localStorage.getItem("Juego")).juegoId + ".json")
        .then(respuesta => respuesta.json())

        .then( objeto => {
            juego = objeto
        });
});