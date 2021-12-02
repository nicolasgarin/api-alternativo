let numaleat;
let numselec;
let vidas = 5;
let intentados = [];

function generarNum() {
    numaleat = Math.round(Math.random() * 49);
}

function jugar() {
    numselec = document.getElementById("numeroingresado").value;
    if (numselec == numaleat) {
        document.getElementById("num").innerHTML = "Ganaste!!"
    } else if (numselec < numaleat) {
        document.getElementById("num").innerHTML = "El número aleatorio es Mayor. Intenta de nuevo";
        vidas -= 1;
        intentados.push(numselec);
        document.getElementById("intentados").innerHTML = intentados;
        document.getElementById("vidas").innerHTML = vidas;
    } else {
        document.getElementById("num").innerHTML = "El número aleatorio es Menor. Intenta de nuevo";
        vidas -= 1;
        intentados.push(numselec);
        document.getElementById("intentados").innerHTML = intentados;
        document.getElementById("vidas").innerHTML = vidas;
    }
    if (vidas < 1) {
        document.getElementById("resultado").innerHTML = "Perdiste.. El número oculto era " + numaleat;
    }
}

function reset() {
    generarNum();
    vidas = 5;
    document.getElementById("vidas").innerHTML = vidas;
    intentados = [];
    document.getElementById("intentados").innerHTML = [];
    document.getElementById("resultado").innerHTML = [];
}

document.addEventListener("DOMContentLoaded", function(e){
    generarNum();
});