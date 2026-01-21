// la idea es armar un presupuesto de viaje
//se definen varias ciudades con un costo definido
//el usuario tendra que ingresar con que presupuesto cuenta y de esa forma se le daran las opciones posibles

//INTENTO 1 - USANDO ELSE IF

/*let ciudadElegida = prompt("¿Qué ciudad de Irlanda querés visitar?").toLowerCase();

let ciudad1 = "Cork";
let ciudad2 = "Dublin";
let ciudad3 = "Galway";

let costo1 = 1200;
let costo2 = 2000;
let costo3 = 1500;


if (ciudadElegida == "cork") {
    console.log("El presupuesto necesario para visitar esta ciudad es " + costo1)

} else if (ciudadElegida == "dublin") {
    console.log("El presupuesto necesario para visitar esta ciudad es " + costo2)

} else if (ciudadElegida == "galway") {
    console.log("El presupuesto necesario para visitar esta ciudad es " + costo3)

} else {
    console.log("Las ciudades que podés elegir son Cork, Dublin o Galway");
}

let presupuestoCliente = prompt("¿Con qué presupuesto contás?");

if (presupuestoCliente >= 1200 && presupuestoCliente < 1500) {
    console.log("Con tu presupuesto podés visitar la ciudad de " + ciudad1 )

} else if (presupuestoCliente >= 1200 && presupuestoCliente < 2000) {
    console.log("Con tu presupuesto podés visitar la ciudad de " + ciudad1 + " y la ciudad de " + ciudad3 )

} else if (presupuestoCliente >= 2000) {
    console.log("Con tu presupuesto podés visitar las ciudades de " + ciudad1 + ", " + ciudad2 + " y " + ciudad3 )

} else {
    console.log("No tenes fondos suficientes");
}*/

//INTENTO 2 - USANDO ARRAYS
/*let elegirCiudad = prompt("¿Qué ciudad de Irlanda querés visitar?");

const ciudades = [];
ciudades.push({nombre: "Cork", costo: 1200});
ciudades.push({nombre: "Dublin", costo: 2000});
ciudades.push({nombre: "Galway", costo: 1500});

const ciudadElegida = ciudades.find(ciudad => ciudad.nombre === "Cork");
console.log(ciudadElegida);

let presupuestoCliente = prompt("¿Con qué presupuesto contás?");*/

//INTENTO 3 - ARRAYS Y FUNCIONES

/*let ciudadElegida = prompt("¿Qué ciudad de Irlanda querés visitar?").toLowerCase();

const ciudades = {
    cork: 1200,
    dublin: 2000,
    galway: 1500
};

if (ciudades[ciudadElegida]) {
    console.log(
        "El presupuesto necesario para visitar esta ciudad es " + ciudades[ciudadElegida]);
} else {
    console.log("Las ciudades que podés elegir son Cork, Dublin o Galway");
}

let presupuestoCliente = Number(prompt("¿Con qué presupuesto contás?"));

function ciudadesDisponibles(presupuesto) {
  let resultado = [];

  for (let ciudad in ciudades) {
    if (presupuesto >= ciudades[ciudad]) {
      resultado.push(ciudad);
    }
  }

  return resultado;
}

let disponibles = ciudadesDisponibles(presupuestoCliente);

if (disponibles.length > 0) {
  console.log("Con tu presupuesto podés visitar: " + disponibles.join(", "));
} else {
  console.log("No tenés fondos suficientes");
}
*/

//INTENTO 4 - manual de practicas

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

function presupuestoCliente(){
    let presupuesto = parseFloat(prompt("¿Cuál es tu presupuesto para tu viaje? (en dolares)"));

    switch(presupuesto){}
}

solicitarDatosUsuario();
ciudadesDisponibles();
