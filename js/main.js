// CARD LUGARES

function agregarCiudades(ciudades) {
    const contenedor = document.getElementById("card-lugares");

   contenedor.innerHTML = ""; 

    ciudades.forEach(ciudad => {
        const card = document.createElement("section");

        card.innerHTML = `
            <div class="cardCiudad">
                <img src="${ciudad.imagen}" class="imagenCardCiudad">
                <h4 class="tituloCard">${ciudad.nombre}</h4>
                <p class="descripcionCard">${ciudad.descripcion}</p>
                <a href="${ciudad.link}">
                    <button class="botonCard">Saber más</button>
                </a>
            </div>
        `;

        contenedor.appendChild(card);
    });
}

async function cargarCiudades() {
    try {
        const response = await fetch("../js/ciudades.json"); 

        if (!response.ok) {
            throw new Error("No se pudo cargar el archivo JSON");
        }
        const data = await response.json();
        agregarCiudades(data);

    } catch (error) {
        console.error("Error al cargar las ciudades:", error);
    }
};

cargarCiudades();

