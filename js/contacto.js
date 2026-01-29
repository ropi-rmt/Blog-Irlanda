//Formulario Submit

const formulario = document.getElementById("miFormulario")

formulario.addEventListener("submit", function (event) {
    event.preventDefault();


    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;


    console.log(nombre);
    console.log(email);
    console.log(mensaje);

    localStorage.setItem("nombreUsuario", nombre);
    localStorage.setItem("emailUsuario", email);

    console.log("Datos guardados en localStorage");
    formulario.reset()
});

const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    respuesta.textContent = "Gracias por tu mensaje 😊";
});

//https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
//https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
