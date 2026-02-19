
const formulario = document.getElementById("formComentario");
const listaComentarios = document.getElementById("listaComentarios");

function mostrarComentario(nombre, comentario) {
    const nuevoComentario = document.createElement("p");
    nuevoComentario.textContent = `${nombre}: ${comentario}`;
    listaComentarios.appendChild(nuevoComentario);
}

document.addEventListener("DOMContentLoaded", function () {
    const comentariosGuardados = JSON.parse(localStorage.getItem("comentarios")) || [];

    comentariosGuardados.forEach(com => {
        mostrarComentario(com.nombre, com.comentario);
    });
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

