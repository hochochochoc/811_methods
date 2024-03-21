const personas = [
    {
    nombre: "Juan",
    dni: "12345678",
    hobbies: ["leer", "bailar"]
    },
    {
    nombre: "María",
    dni: "87654321",
    hobbies: ["pintar", "correr", "viajar"]
    },
    {
    nombre: "Pedro",
    dni: "98765432",
    hobbies: ["cocinar", "ver películas"]
    },
    {
    nombre: "Laura",
    dni: "54321678",
    hobbies: ["hacer deporte", "viajar"]
    },
    {
    nombre: "Carlos",
    dni: "87651234",
    hobbies: ["tocar la guitarra", "hacer deporte"]
    }
    ];

function find(){
    let dniBuscado = prompt("Introduce el DNI de la Persona buscada.");

    let personaBuscada = personas.find(persona => persona.dni === dniBuscado);

    if(personaBuscada){
        alert("Persona dada de alta: " + personaBuscada.nombre);
    } else {
        alert("Persona no encontrada.");
    }
}


function findIndex() {
    let dniBuscado = prompt("Introduce el DNI de la persona buscada:");
    let posicion = personas.findIndex(persona => persona.dni === dniBuscado);

    if(posicion !== -1) {
        alert(`La posición de la persona dentro del array es: ${posicion}.`);
    } else {
        alert("Persona no encontrada.");
    }
}

function findHobby() {
    let hobbyBuscado = prompt("Introduce un hobby:");
    let personasHobby = personas.filter(persona => persona.hobbies.includes(hobbyBuscado));
    
    if(personasHobby.length > 0) {
        let mensaje = `Personas con el hobby ${hobbyBuscado}: `;
        personasHobby.forEach(persona => {
            mensaje += `${persona.nombre} `;
        });
        alert(mensaje);
    } else {
        alert("No se encontraron personas con ese hobby.");
    }
}

function reduce() {
    let dniBuscado = prompt("Introduce el DNI de la persona buscada:");
    let personaBuscada = personas.find(persona => persona.dni === dniBuscado);

    if(personaBuscada) {
        let totalHobbies = personaBuscada.hobbies.reduce((accumulator, hobby) => accumulator + 1, 0);
        alert(`Número de hobbies de ${personaBuscada.nombre}: ${totalHobbies}`);
    } else {
        alert("Person not found.");
    }
}

function findIncludes(){
    let hobbyBuscado = prompt("Introduce un hobby:");
    let tieneHobby = personas.some(persona => persona.hobbies.includes(hobbyBuscado));

    if(tieneHobby) {
        alert("Al menos una persona tiene el hobby " + hobbyBuscado);
    } else {
        alert("Ninguna persona tiene el hobby " + hobbyBuscado);
    }
}


function findIncludesDos(){
    let hobbyBuscado = prompt("Introduce un hobby:");
    let personaConHobby = personas.find(persona => persona.hobbies.includes(hobbyBuscado));

    if(personaConHobby) {
        alert(`La primera persona con el hobby ${hobbyBuscado} es: ${personaConHobby.nombre}`);
    } else {
        alert(`No se encontró ninguna persona con ese hobby.`);
    }
}

function crearNuevoArray(){
    let nombresMayusculas = [];
    personas.forEach(persona => {
        nombresMayusculas.push(persona.nombre.toUpperCase());
    });
    alert(`Nombres mayusculas: ${nombresMayusculas} `);
}