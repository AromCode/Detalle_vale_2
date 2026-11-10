
// ===================================
// 1. CORAZONES FLOTANTES
// ===================================

const fondoCorazones = document.getElementById("fondoCorazones");

function crearCorazon() {

    const corazon = document.createElement("span");

    corazon.classList.add("corazon-flotante");

    corazon.textContent = Math.random() > 0.5 ? "♥" : "♡";

    corazon.style.left = Math.random() * 100 + "%";

    corazon.style.fontSize = (Math.random() * 20 + 12) + "px";

    const duracion = Math.random() * 5 + 6;

    corazon.style.animationDuration = duracion + "s";

    fondoCorazones.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, duracion * 1000);
}

setInterval(crearCorazon, 500);


// ===================================
// 2. ABRIR EL SOBRE
// ===================================

const sobre = document.getElementById("sobre");
const sobreContenedor = document.getElementById("sobreContenedor");
const mensajeOculto = document.getElementById("mensajeOculto");
const instruccion = document.getElementById("instruccion");

let sobreAbierto = false;

sobreContenedor.addEventListener("click", () => {

    if (sobreAbierto) return;

    sobreAbierto = true;

    sobre.classList.add("abierto");

    instruccion.textContent = "¡Espero que te guste! 💗";

    setTimeout(() => {
        mensajeOculto.classList.add("visible");
    }, 900);

});


// ===================================
// 3. FRASES ALEATORIAS
// ===================================

const frases = [

    "Tu sonrisa tiene algo bonito ✨",

    "Hay personas que hacen más bonito un día cualquiera 🌷",

    "Nunca dejes de brillar a tu manera 💖",

    "Tienes una forma especial de alegrar los momentos ☀️",

    "Que nunca te falten motivos para sonreír 🌸",

    "El mundo necesita más personas con tu esencia 💗",

    "Hoy también es un buen día para ser feliz 🦋",

    "Ojalá la vida te sorprenda con cosas maravillosas ✨",

    "Eres el puente entre los primeros pasos y los grandes sueños ✨",

    "En tus manos, cada pequeño encuentra seguridad y ganas de aprender 💖"

];

const fraseDinamica = document.getElementById("fraseDinamica");
const botonFrase = document.getElementById("botonFrase");

let ultimaFrase = -1;

botonFrase.addEventListener("click", () => {

    let nuevaFrase;

    do {
        nuevaFrase = Math.floor(Math.random() * frases.length);
    } while (nuevaFrase === ultimaFrase);

    ultimaFrase = nuevaFrase;

    fraseDinamica.style.opacity = "0";

    setTimeout(() => {

        fraseDinamica.textContent = frases[nuevaFrase];

        fraseDinamica.style.opacity = "1";

    }, 250);

});
