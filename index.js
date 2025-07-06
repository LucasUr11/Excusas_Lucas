let quien = ["El perro", "Mi abuela", "El cartero", "El pájaro", "Mi amigo"];
let accion = ["se comió", "me orinó", "me aplastó", "me quebró", "me golpeó"];
let que = ["mi tarea", "mi celular", "el auto"];
let cuando = ["antes de clases.", "mientras dormia.", "mientras hacia ejercicio.", "mientras almorzaba.", "mientras oraba."];

function generadorDeExcusas(quien, accion, que, cuando) {
    let numQuien = Math.floor(Math.random() * quien.length);
    let numAccion = Math.floor(Math.random() * accion.length);
    let numQue = Math.floor(Math.random() * que.length);
    let numCuando = Math.floor(Math.random() * cuando.length);

    return `${quien[numQuien]} ${accion[numAccion]} ${que[numque]} ${cuando[numCuando]}`
}

function onLoad() {
    let excusa = document.getElementById("excuse");
    excusa.innerHTML = generadorDeExcusas(quien, accion, que, cuando);
}

window.onload = onload;