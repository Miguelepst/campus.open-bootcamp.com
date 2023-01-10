console.log("Ejercicio 14: cursos.15.leccion.1888");

class Estudiante {
    constructor(nombre, listaAsignaturas) {
        this.nombre = nombre
        this.listaAsignaturas = listaAsignaturas;
    }
    obtenDatos() {
        return {
            nombre: this.nombre,
            listaAsignaturas: this.listaAsignaturas
        }

    }
}

const estudiante1 = new Estudiante("Miguel", ["Javascript", "HTML", "CSS"]);
console.log(estudiante1.obtenDatos());

/* 

-Una clase llamada "Estudiante"
que tenga:

    -Una variable llamada nombre

    -
    Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS

    -
    Un método "obtenDatos"
que devuelva un objeto con las propiedades nombre y asignaturas

    -
    Crea una nueva instancia de "Estudiante"

    -
    Haz la llamada al método obtenDatos


*/