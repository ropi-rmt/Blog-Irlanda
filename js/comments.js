
/*const formulario = document.getElementById("formComentario");
const listaComentarios = document.getElementById("listaComentarios");

const comentariosGuardados = JSON.parse(localStorage.getItem("comentarios")) || [];

comentariosGuardados.forEach(com => {
    mostrarComentario(com.nombre, com.comentario, com.fecha);
});

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const comentario = document.getElementById("comentario").value.trim();


    if (nombre === "" || comentario === "") {
        Swal.fire({
            icon: "error",
            title: "Campos incompletos",
            text: "Por favor completa todos los campos"
        });
        return;
    }

    const fecha = new Date().toLocaleDateString();




    const comentariosGuardados = JSON.parse(localStorage.getItem("comentarios")) || [];

    comentariosGuardados.push({ nombre, comentario, fecha });

    localStorage.setItem("comentarios", JSON.stringify(comentariosGuardados));

    formulario.reset();

    Swal.fire({
        title: "Tu Comentario fue Enviado con Éxito!",
        text: "Gracias por visitar nuestra página!",
        icon: "success"
    });
});

function mostrarComentario(nombre, comentario, fecha) {
    const card = document.createElement("div");
    card.classList.add("comentario-card");

    const indice = comentariosGuardados.findIndex(com =>
        com.nombre === nombre &&
        com.comentario === comentario &&
        com.fecha === fecha
    );

    card.innerHTML = `
        <div class="comentario-nombre">${nombre}</div>
        <div class="comentario-fecha">${fecha}</div>
        <div class="comentario-texto">${comentario}</div>
        <button class="btn-eliminar">Eliminar</button>
    `;

    const botonEliminar = card.querySelector(".btn-eliminar");



    botonEliminar.addEventListener("click", function () {

        comentariosGuardados.splice(indice, 1);

        localStorage.setItem("comentarios", JSON.stringify(comentariosGuardados));

        card.remove();
    });

    listaComentarios.appendChild(card);
}

mostrarComentario(nombre, comentario, fecha);

/*LIBRERIAS
 https://youtu.be/EDIg8rqbrBM?si=M3ynjY0b4aoyv3JA
 *sweetalert
 *https://sweetalert2.github.io/
  * toastify
  *  https://apvarun.github.io/toastify-js/
  * Luxon
  *  https://moment.github.io/luxon/#/
  * ANIMATE ON SCROLL -> chequear!
  */

const formulario = document.getElementById("formComentario");
const listaComentarios = document.getElementById("listaComentarios");


// 🔹 Mostrar comentario en pantalla
function mostrarComentario(com) {

    const card = document.createElement("div");
    card.classList.add("comentario-card");
    card.setAttribute("data-id", com.id);

    card.innerHTML = `
         <div class="comentario-nombre">${com.nombre}</div>
         <div class="comentario-fecha">${com.fecha}</div>
         <div class="comentario-texto">${com.comentario}</div>
 
         <div class="comentario-acciones">
             <button class="like-btn">❤️ ${com.likes}</button>
             <button class="eliminar-btn">🗑 Eliminar</button>
         </div>
     `;

    listaComentarios.appendChild(card);
}


// 🔹 Cargar comentarios guardados
document.addEventListener("DOMContentLoaded", function () {

    const comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

    comentarios.forEach(com => mostrarComentario(com));
});


// 🔹 Evento submit
formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const comentarioTexto = document.getElementById("comentario").value;

    const fecha = new Date().toLocaleDateString();

    const nuevoComentario = {
        id: Date.now(),
        nombre: nombre,
        comentario: comentarioTexto,
        fecha: fecha,
        likes: 0
    };

    const comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

    comentarios.push(nuevoComentario);

    localStorage.setItem("comentarios", JSON.stringify(comentarios));

    mostrarComentario(nuevoComentario);

    formulario.reset();
});


// 🔹 Delegación de eventos (like y eliminar)
listaComentarios.addEventListener("click", function (event) {

    const comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

    const card = event.target.closest(".comentario-card");
    if (!card) return;

    const id = Number(card.getAttribute("data-id"));

   /* / // ❤️ LIKE
    if (event.target.classList.contains("like-btn")) {

        const comentario = comentarios.find(com => com.id === id);
        comentario.likes++;

        localStorage.setItem("comentarios", JSON.stringify(comentarios));

        card.querySelector(".like-btn").textContent = `❤️ ${comentario.likes}`;
    }
*/
    // 🗑 ELIMINAR
    if (event.target.classList.contains("eliminar-btn")) {

        const nuevosComentarios = comentarios.filter(com => com.id !== id);

        localStorage.setItem("comentarios", JSON.stringify(nuevosComentarios));

        card.remove();
    }
});

