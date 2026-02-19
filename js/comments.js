
const formulario = document.getElementById("formComentario");
const listaComentarios = document.getElementById("listaComentarios");

const comentariosGuardados = JSON.parse(localStorage.getItem("comentarios")) || [];

comentariosGuardados.forEach(com => {
    mostrarComentario(com.nombre, com.comentario);
});

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const comentario = document.getElementById("comentario").value;

    mostrarComentario(nombre, comentario);


    const comentariosGuardados = JSON.parse(localStorage.getItem("comentarios")) || [];

    comentariosGuardados.push({ nombre, comentario });

    localStorage.setItem("comentarios", JSON.stringify(comentariosGuardados));

    formulario.reset();

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

    Swal.fire({
        title: "Tu Comentario fue Enviado con Éxito!",
        text: "Gracias por visitar nuestra página!",
        icon: "success",
        draggable: true
    });
});

function mostrarComentario(nombre, comentario) {
    const card = document.createElement("div");
    card.classList.add("comentario-card");

    card.innerHTML = `
        <div class="comentario-nombre">${nombre}</div>
        <div class="comentario-texto">${comentario}</div>
    `;

    listaComentarios.appendChild(card);
}



