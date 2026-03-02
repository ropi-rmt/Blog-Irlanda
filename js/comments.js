
const formulario = document.getElementById("formComentario");
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

    card.innerHTML = `
        <div class="comentario-nombre">${nombre}</div>
        <div class="comentario-fecha">${fecha}</div>
        <div class="comentario-texto">${comentario}</div>
        <button class="btn-eliminar">Eliminar</button>
    `;

    const botonEliminar = card.querySelector(".btn-eliminar");

    botonEliminar.addEventListener("click", function () {

        // Filtramos el array
        comentariosGuardados = comentariosGuardados.filter(com =>
            !(com.nombre === nombre &&
              com.comentario === comentario &&
              com.fecha === fecha)
        );

        // Actualizamos localStorage
        localStorage.setItem("comentarios", JSON.stringify(comentariosGuardados));

        // Eliminamos del DOM
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


