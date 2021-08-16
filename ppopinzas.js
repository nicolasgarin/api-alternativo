let Elementos = ["Piedra", "Papel", "Tijera"]
let ptsPlayer = 0;
let ptsJuego = 0;
let elemJuego = 0;
let elemPlayer;

function generarElemento() {
  elemJuego = Elementos[Math.round(Math.random() * 2)];
}

function esMejor(elemP,elemJ) {
  return (elemP === "Piedra" && elemJ === "Tijera") || (elemP === "Papel" && elemJ === "Piedra") || (elemP === "Tijera" && elemJ === "Papel")
}

function sumaPts(elemPlayer,elemJuego) {
  if (esMejor(elemPlayer,elemJuego)) {
    ptsPlayer += 1;
    document.getElementById("fox").src = "img/fox3.jpg";
    document.getElementById("bmo").src = "img/bmo2.png";
    setTimeout(restablececharacter,2000);   
  } else if (esMejor(elemJuego,elemPlayer)) {
    ptsJuego += 1;
    document.getElementById("fox").src = "img/fox2.jpg";
    document.getElementById("bmo").src = "img/bmo3.png";
    setTimeout(restablececharacter,2000);
  }
}

function restablece() {
    document.getElementById("ElecPl").src = "img/pregunta.png";
    document.getElementById("ElecJ").src = "img/pregunta.png";
}

function restablececharacter() {
  document.getElementById("fox").src = "img/fox1.jpg";
  document.getElementById("bmo").src = "img/bmo1.jpg"
}
function ganador() {
  if (ptsPlayer === 5) {
    alert("Ganaste!!");
    resetmarcador();
  }
  if (ptsJuego === 5) {
    alert("Perdiste!");
    resetmarcador();
  }
}

function resetmarcador() {
  ptsPlayer = 0;
  ptsJuego = 0;
  document.getElementById("marcadorpl").innerHTML = ptsPlayer;
  document.getElementById("marcadorpc").innerHTML = ptsJuego;
}

  function piedra() {
    elemPlayer = "Piedra";
    generarElemento();
    sumaPts(elemPlayer,elemJuego);
    document.getElementById("ElecPl").src = "img/Piedra.png";
    document.getElementById("ElecJ").src = "img/" + elemJuego + ".png";
    document.getElementById("marcadorpl").innerHTML = ptsPlayer;
    document.getElementById("marcadorpc").innerHTML = ptsJuego;
    setTimeout(restablece,2000);
    setTimeout(ganador,2000);
  }

  function papel() {
    elemPlayer = "Papel";
    generarElemento();
    sumaPts(elemPlayer,elemJuego);
    document.getElementById("ElecPl").src = "img/Papel.png"
    document.getElementById("ElecJ").src = "img/" + elemJuego + ".png"
    document.getElementById("marcadorpl").innerHTML = ptsPlayer;
    document.getElementById("marcadorpc").innerHTML = ptsJuego;
    setTimeout(restablece,2000);
    setTimeout(ganador,2000);
  }

  function tijera() {
    elemPlayer = "Tijera";
    generarElemento();
    sumaPts(elemPlayer,elemJuego);
    document.getElementById("ElecPl").src = "img/Tijera.png"
    document.getElementById("ElecJ").src = "img/" + elemJuego + ".png";
    document.getElementById("marcadorpl").innerHTML = ptsPlayer;
    document.getElementById("marcadorpc").innerHTML = ptsJuego;
    setTimeout(restablece,2000);
    setTimeout(ganador,2000);
  }