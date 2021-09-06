let dado;
let posPl = 1;
let salud = 10;
let saludOrco = 6;
let saludToro = 5;

function rolldice() {
    dado = (Math.round(Math.random()*5))+1;
    document.getElementById("dadoresult").innerHTML = dado;
}

function advancePl() {
    posPl += dado;
}

function marcadorPos() {
    if (posPl >= 16) {
        document.getElementById("PosPlayer").innerHTML = 16;
    } else {
        document.getElementById("PosPlayer").innerHTML = posPl;
    }
}

function vidaActual() {
    if (salud <= 0) {
        alert("Te has quedado sin vida. Vuelve a empezar");
        resetAll();
    }
}

function marcadorSalud() {
    document.getElementById("Salud").innerHTML = salud;
}

function resetAll() {
    resettilePl();
    posPl = 1;
    salud = 10;
    execposPl();
    marcadorSalud();
    saludOrco = 6;
    saludToro = 5;
    document.getElementById("vidaOrco").innerHTML = saludOrco;
    document.getElementById("vidaToro").innerHTML = saludToro;
    document.getElementById("pantalla").src = "img/tierradeav/Pl.png"
}

function execposPl() {
    if (posPl === 1 || posPl === 2 || posPl === 5 || posPl === 7 || posPl === 10 || posPl === 12 || posPl === 14) {
        document.getElementById(posPl).src = "img/tierradeav/tilePl.png";
    }
    if (posPl === 4 || posPl === 13) {
        document.getElementById(posPl).src = "img/tierradeav/tile-firePl.png";
        document.getElementById("pantalla").src = "img/tierradeav/tile-firePl.png"
    }
    if (posPl === 3 || posPl === 6 || posPl === 11 || posPl === 15) {
        document.getElementById(posPl).src = "img/tierradeav/tile2Pl.png";
    }
    if (posPl === 8) {
        document.getElementById(posPl).src = "img/tierradeav/tile3Pl.png";
    }
    if (posPl === 9) {
        document.getElementById(posPl).src = "img/tierradeav/orcoPl.png";
        document.getElementById("pantalla").src = "img/tierradeav/orcoPl.png";
    }
    if (posPl === 16) {
        document.getElementById(posPl).src = "img/tierradeav/tile-campPl.png";
        document.getElementById("pantalla").src = "img/tierradeav/tile-campPl.png"
    }
    if (posPl === 17 || posPl === 26 || posPl === 22 || posPl === 23 || posPl === 27 || posPl === 21 || posPl === 19 || posPl === 31) {
        document.getElementById(posPl).src = "img/tierradeav/tilebPl.png";
    }
    if (posPl === 18 || posPl === 29) {
        document.getElementById(posPl).src = "img/tierradeav/tileb2Pl.png";
    }
    if (posPl === 20) {
        document.getElementById("20").src = "img/tierradeav/tileblavaPl.png";
        document.getElementById("pantalla").src = "img/tierradeav/tileblavaPl.png";
    }
    if (posPl === 25) {
        document.getElementById("25").src = "img/tierradeav/tilebangelPl.png";
        document.getElementById("pantalla").src = "img/tierradeav/tilebangelPl.png";
    }
    if (posPl === 24 || posPl === 28) {
        document.getElementById(posPl).src = "img/tierradeav/tileb3Pl.png";
    }
    if (posPl === 30) {
        document.getElementById("30").src = "img/tierradeav/torodelavaPl.png";
        document.getElementById("pantalla").src = "img/tierradeav/torodelavaPl.png";
    }
    if (posPl >= 32) {
        document.getElementById("32").src = "img/tierradeav/finishPl.png";
        document.getElementById("pantalla").src = "img/tierradeav/finishPl.png";
    }
}

function resettilePl() {
    if (posPl === 1 || posPl === 2 || posPl === 5 || posPl === 7 || posPl === 10 || posPl === 12 || posPl === 14) {
    document.getElementById(posPl).src = "img/tierradeav/tile.png";
    }
    if (posPl === 4 || posPl === 13) {
        document.getElementById(posPl).src = "img/tierradeav/tile-fire.png";
    }
    if (posPl === 3 || posPl === 6 || posPl === 11 || posPl === 15) {
        document.getElementById(posPl).src = "img/tierradeav/tile2.png";
    }
    if (posPl === 8) {
        document.getElementById(posPl).src = "img/tierradeav/tile3.png";
    }
    if (posPl === 9) {
        document.getElementById(posPl).src = "img/tierradeav/orco.png";
    }
    if (posPl === 16) {
    document.getElementById(16).src = "img/tierradeav/tile-camp.png";
    }
    if (posPl === 17 || posPl === 26 || posPl === 22 || posPl === 23 || posPl === 27 || posPl === 21 || posPl === 19 || posPl === 31) {
        document.getElementById(posPl).src = "img/tierradeav/tileb.png";
    }
    if (posPl === 18 || posPl === 29) {
        document.getElementById(posPl).src = "img/tierradeav/tileb2.png";
    }
    if (posPl === 20) {
        document.getElementById("20").src = "img/tierradeav/tileblava.png";
    }
    if (posPl === 25) {
        document.getElementById("25").src = "img/tierradeav/tilebangel.png";
    }
    if (posPl === 24 || posPl === 28) {
        document.getElementById(posPl).src = "img/tierradeav/tileb3.png";
    }
    if (posPl === 30) {
        document.getElementById("30").src = "img/tierradeav/torodelava.png";
    }
    if (posPl >= 32) {
        document.getElementById("32").src = "img/tierradeav/finish.png";
    }
}

function eventsPl() {
    if (posPl === 4 || posPl === 13) {
        posPl -= 3;
        salud -= 3;
        alert("Te has enfrentado al fuego, pero tuviste que volver a buscar agua. Vuelves 3 casilleros hacia atrás y pierdes 3 puntos de salud")
    }
    if (posPl === 9) {
        salud -=4;
        posPl -=2;
        saludOrco -=3;
        document.getElementById("vidaOrco").innerHTML = saludOrco;
        alert("Combates con el orco y debes regresar 2 casilleros, pierdes 4 de salud");
    } 
    if (posPl === 16) {
        salud = 10;
        alert("Llegas al campamento. Se restablece tu salud");
        boton();
    }
    if (posPl === 20) {
        salud -=3;
        posPl -=3;
        alert("Fuego! Pierdes 3 de salud y vuelves 3 casilleros hacia atrás");
    }
    if (posPl === 25) {
        salud +=5;
        alert("Has encontrado un ángel que te proporciona una poción de vida. Aumentas 5 de salud");
    }
    if (posPl === 30) {
        salud -=5;
        posPl -=3;
        saludToro -=2;
        document.getElementById("vidaToro").innerHTML = saludToro;
        alert("Te enfrentas al gran toro de lava. Le quitas 2 puntos de vida, pero pierdes 5 y retrocedes 3 lugares");
    }
    if (posPl >= 32) {
        alert("Ganaste!!");
        resetAll();
    }
}

function alleventPl() {
    resettilePl();
    eventsPl();
    execposPl();
}

function boton() {
    rolldice();
    resettilePl();
    advancePl();
    execposPl();
    marcadorPos();
    setTimeout(alleventPl,2000);
    setTimeout(marcadorPos,2000);
    setTimeout(marcadorSalud,2000);
    setTimeout(vidaActual,4000);
}
