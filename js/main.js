// la idea es armar un presupuesto de viaje
//se definen varias ciudades con un costo definido
//el usuario tendra que ingresar con que presupuesto cuenta y de esa forma se le daran las opciones posibles

//INTENTO 4 - manual de practicas y clase funciones de orden superior

function solicitarDatosUsuario() {
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
presupuestoCliente();
