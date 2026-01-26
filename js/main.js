//ENTREGA 1

// la idea es armar un presupuesto de viaje
//se definen varias ciudades con un costo definido
//el usuario tendra que ingresar con que presupuesto cuenta y de esa forma se le daran las opciones posibles

/*function solicitarDatosUsuario() {
    let nombre = prompt("Ingrese Nombre: ");
    let genero = (prompt("Ingrese F para femenino, M para masculino o X para otros")).toLowerCase();
    let mensaje

    switch (genero) {
        case "f":
            mensaje = "Bienvenida " + nombre + "!";
            break;

        case "m":
            mensaje = "Bienvenido " + nombre + "!";
            break;

        case "x":
            mensaje = "Bienvenidx " + nombre + "!";
            break;

        default: alert("No ha introducido un genero válido, vuelva a intentarlo");
            break;


    }
    alert(mensaje);
}



function ciudadesDisponibles() {

    let elegirCiudad = prompt("¿Qué ciudad de Irlanda te gustaría visitar?\nCork \nDublin \nGalway").toLowerCase();
    let mensajeCiudad

    switch (elegirCiudad) {

        case "cork":
            mensajeCiudad = "Para Visitar Cork necesitarás un presupuesto de $1200";
            break;

        case "dublin":
            mensajeCiudad = "Para Visitar Dublin necesitarás un presupuesto de $2000";
            break;

        case "galway":
            mensajeCiudad = "Para Visitar Galway necesitarás un presupuesto de $1500";
            break;

            default: alert("No ha introducido una ciudad válida, vuelva a intentarlo");
            break;

    }

    alert(mensajeCiudad);

}

const ciudades =[
    {
        nombre: "cork",
        precio: 1200
    },
    {
        nombre: "dublin",
        precio: 2000
    },
    {
        nombre: "galway",
        precio: 1500
    },
]



function presupuestoCliente(){
    let presupuesto = parseFloat(prompt("¿Cuál es tu presupuesto para tu viaje? (en dolares)"));
    const filtrados = ciudades.filter(ciudad => ciudad.precio <=presupuesto)
    const nombresCiudades = filtrados.map(ciudad => ciudad.nombre);
    console.log(nombresCiudades)

  if (filtrados.length > 0) {
  console.log("Con tu presupuesto podés visitar: " + nombresCiudades.join(", "));
  alert("Con tu presupuesto podés visitar: " + nombresCiudades.join(", "));
} else {
  console.log("No tenés fondos suficientes");
  alert("No tenés fondos suficientes");
}
    
}

solicitarDatosUsuario();
ciudadesDisponibles();
presupuestoCliente();*/

//ENTREGA 2
//Agregar cards en la pagina principal de "lugares/que visitar", por si en un futuro quiero ir agregando mas ciudades
//lo mismo en curiosidades, porq ahi lo puedo hacer más como entradas de blog "h2/p/a" titulo, pequeño copete y q tenga el link al articulo

//CARD LUGARES

const ciudades = [
    {
        nombre: "Cork",
        descripcion: "Paseos junto al río, museos peculiares y un mercado gastronómico del siglo XVIII; lánzate a visitar la ciudad de Cork",
        link: "./lugares/cork.html",
        imagen: "../assets/Cork1.webp",
    },
    {
        nombre: "Dingle",
        descripcion: "Prepárate para que este cabo majestuoso en el tramo de la Ruta Costera del Atlántico del condado de Kerry te robe el corazón",
        link: "./lugares/dingle.html",
        imagen: "../assets/Dingle1.webp",
    },
    {
        nombre: "Galway",
        descripcion: "Esta ciudad portuaria de la Ruta Costera del Atlántico tiene un rico pasado medieval. Hoy es un animado centro rebosante de pubs tradicionales, calles coloridas y el encanto de la costa oeste.",
        link: "./lugares/galway.html",
        imagen: "../assets/Galway1.webp",

    },
]

function agregarCiudades(ciudades) {

    const contenedor = document.getElementById("card-lugares");

    for (const ciudad of ciudades) {
        const card = document.createElement("section");

        card.innerHTML = `
        <div class="cardCiudad">
        	<img src="${ciudad.imagen}" class="imagenCardCiudad">
					<a href="${ciudad.link}"><h4>${ciudad.nombre}</h></a>
                    <p class="descripcionCard">${ciudad.descripcion}
					<a href="${ciudad.link}"><button class="busqueda-form">Saber más</button></a>
                    </div>
        `

        contenedor.appendChild(card)

    }

}

agregarCiudades(ciudades)


