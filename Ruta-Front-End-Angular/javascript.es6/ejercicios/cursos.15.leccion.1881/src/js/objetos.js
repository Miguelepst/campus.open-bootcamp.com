// Enunciado del ejercicio 8: cursos.15.leccion.1881

// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales(nombre, apellido, edad, altura, eresDesarrollador)

datosPersonales = {
    nombre: "Miguel",
    apellido: "Gutierrez",
    edad: 44,
    altura: 1.80,
    eresDesarrollador: true
}

// - Una variable que obtenga tu edad a partir del objeto anterior

edad = datosPersonales.edad;
console.log(edad);


// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los 
//   datos personales de tus dos mejores amig @s
bestFriendsObj = {
    amigo1: { nombre: "Andres",
    apellido: "Herrera",
    edad: 35,
    "altura": 1.70,
    "eresDesarrollador": "no"
},
amigo2: {
    nombre: "Luis",
    apellido: "Sanchez",
    edad: 20,
    "altura": 1.72,
    "eresDesarrollador": "no"
}
}
listaObjetos = [datosPersonales, bestFriendsObj.amigo1, bestFriendsObj.amigo2];
console.log(listaObjetos);

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a 
//   menor

newlist = listaObjetos.sort((a, b) => a.edad - b.edad);
console.log("Orden por edad:", newlist);
