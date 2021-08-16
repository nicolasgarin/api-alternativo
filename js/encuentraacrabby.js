let fich1
let fich2
let fich3
let fich4
let fich5
let fich6
let fich7
let fich8
let fich9
let ptscrabby = 0
let vidas = 10
let estado = true

function dispose() {
    fich1 = (Math.round(Math.random()*8))+1;
    fich2 = (Math.round(Math.random()*8))+1;
    while (fich2 === fich1) {
        muerte = (Math.round(Math.random()*8))+1  
    }  
    fich3 = (Math.round(Math.random()*8))+1;
    while (fich3 === fich1 || fich3 ===fich2) {
        fich3 = (Math.round(Math.random()*8))+1
    }
    fich4 = (Math.round(Math.random()*8))+1;
    while (fich4 === fich1 || fich4 === fich2 || fich4 === fich3) {
        fich4 = (Math.round(Math.random()*8))+1
    }
    fich5 = (Math.round(Math.random()*8))+1;
    while (fich5 === fich3 || fich5 === fich4 || fich5 === fich1 || fich5 === fich2) {
        fich5 = (Math.round(Math.random()*8))+1
    }
    fich6 = (Math.round(Math.random()*8))+1;
    while (fich6 === fich4 || fich6 === fich5 || fich6 === fich1 || fich6 === fich2 || fich6 === fich3) {
        fich6 = (Math.round(Math.random()*8))+1
    }
    fich7 = (Math.round(Math.random()*8))+1;
    while (fich7 === fich5 || fich7 === fich6 || fich7 === fich1 || fich7 === fich2 || fich7 === fich3 || fich7 === fich4) {
        fich7 = (Math.round(Math.random()*8))+1
    }
    fich8 = (Math.round(Math.random()*8))+1;
    while (fich8 === fich6 || fich8 === fich7 || fich8 === fich1 || fich8 === fich2 || fich8 === fich3 || fich8 === fich4 || fich8 === fich5) {
        fich8 = (Math.round(Math.random()*8))+1
    }
    fich9 = (Math.round(Math.random()*8))+1;
    while (fich9 === fich7 || fich9 === fich8 || fich9 === fich1 || fich9 === fich2 || fich9 === fich3 || fich9 === fich4 || fich9 === fich5 || fich9 === fich6) {
        fich9 = (Math.round(Math.random()*8))+1
    }
}

function reset() {
    let lados = document.getElementsByClassName("ladoA")
      for (lado of lados) {  
        lado.src = "img/ladoA.jpg";
      }
      estado = true;
      dispose();
}

function vuelta(ficha,cuadrado) {
    if (ficha === 1 && (estado)) {
        document.getElementById(cuadrado).src = "img/crabby.jpg";
        ptscrabby += 1;
        estado = false;
        document.getElementById("crabbysencontrados").innerHTML = ptscrabby       
    } else if (ficha === 2 && (estado)) {
        let lados = document.getElementsByClassName("ladoA")
      for (lado of lados) {  
        lado.src = "img/muerte.jpg";
      }
        vidas -= 1;
        estado = false;
        document.getElementById("vidas").innerHTML = vidas;
    } else if (estado) {
        document.getElementById(cuadrado).src = "img/ladoX.jpg";
    }
}

dispose()