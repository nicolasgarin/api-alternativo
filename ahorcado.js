let peliculas = ["EL REY LEON", "HOMBRES DE NEGRO", "SHREK 3", "BUSCANDO A NEMO", "TITANIC"];
let peli;
let letraspel;
let impresion = [];
let letraselec;
let vida = 6;
let fallidos = [];

function selecpelicula() {
    peli = peliculas[Math.round(Math.random() * 4)];
}

function separador() {
    letraspel = peli.split("");
}

function imprimir() {
    document.getElementById("impresion").innerHTML = "";
    impresion = [];
    for (let i = 0; i < letraspel.length; i++) {
        if (letraspel[i] == " ") {
            impresion.push("/");
        } else {
            impresion.push("_")
        }
    }
    for (let i = 0; i < impresion.length; i++) {
        document.getElementById("impresion").innerHTML += impresion[i] + " ";
    }
}

function vidas() {
    if (vida == 5) {
        document.getElementById("img").src = "h2.png"
    } else if (vida == 4) {
        document.getElementById("img").src = "h3.png"
    } else if (vida == 3) {
        document.getElementById("img").src = "h4.png"
    } else if (vida == 2) {
        document.getElementById("img").src = "h5.png"
    } else if (vida == 1) {
        document.getElementById("img").src = "h6.png"
    } else if (vida == 0) {
        document.getElementById("img").src = "h7.png"
        perdiste();
    } else if (vida == 6) {
        document.getElementById("img").src = "h1.png"
    }
}

function perdiste() {
    document.getElementById("mensaje").innerHTML = "Has morido! la película oculta era " + peli;
}

function ganaste() {
    let peliintentada;
    for (let i = 0; i < impresion.length; i++) {
        peliintentada += impresion[i];
    }
}

function restart() {
    vida = 6;
    vidas();
    selecpelicula();
    separador();
    imprimir();
    document.getElementById("intentados").innerHTML = "";
    document.getElementById("mensaje").innerHTML = "";
    fallidos = []
}

function intento() {
    let flag = false;
    letraselec = document.getElementById("letra").value;
    letraselec = letraselec.toUpperCase();
    for (let i = 0; i < letraspel.length; i++) {
        if (letraselec == letraspel[i]) {
            impresion[i] = letraselec;
            flag = true;
        }
    }
    document.getElementById("impresion").innerHTML = "";
    for (let i = 0; i < impresion.length; i++) {
        document.getElementById("impresion").innerHTML += impresion[i] + " ";
    }
    if (flag == false) {
        vida -= 1;
        fallidos.push(" " + letraselec)
        document.getElementById("intentados").innerHTML = "";
        document.getElementById("intentados").innerHTML = "Intentos fallados: " + fallidos;
    }
    vidas()
}

document.addEventListener("DOMContentLoaded", function(e){
    selecpelicula();
    separador();
    imprimir();
});