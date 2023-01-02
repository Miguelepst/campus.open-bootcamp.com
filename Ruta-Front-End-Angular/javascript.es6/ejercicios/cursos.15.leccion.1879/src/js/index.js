console.log("Ejercicio 6 : https://campus.open-bootcamp.com/cursos/15/leccion/1879");

// -Una variable que contenga la lista de la compra(mínimo 5 elementos)
listaDecompra = ["Milk", "Sugar", "Tea"];
console.log(listaDecompra);

// -Modifica la lista de la compra y añádele "Aceite de Girasol"
console.log(listaDecompra.push("Aceite de Girasol"));
console.log(listaDecompra);


// -Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
console.log(listaDecompra.pop("Aceite de Girasol"));
console.log(listaDecompra);

// -Una lista de tus 3 películas favoritas(objetos con propiedades: titulo, director,     
//  fecha)

FavoriteMoviesList = [{
    titulo: "Titanic",
    director: "James Cameron",
    fecha: "1997"
}, {
    titulo: "El padrino",
    director: "Francis Ford Coppola",
    fecha: "1972"
}, {
    titulo: "Deadpool 2",
    director: "David Leitch",
    fecha: "2018"
}];

// -Una nueva lista que contenga las películas posteriores al 1 de enero de 2010//
// (utilizando filter)

newList = FavoriteMoviesList.filter((data) => data.fecha > 2010);
console.log(newList);

// -Una nueva lista que contenga los directores de la lista de películas original
//  (utilizando map)

titlesList = FavoriteMoviesList.map((data) => data.director);
console.log(titlesList);

// -Una nueva lista que contenga los títulos de la lista de películas original(utilizando 
//  map)
directorsList = FavoriteMoviesList.map((data) => data.titulo);
console.log(directorsList);

// -Una nueva lista que concatene la lista de directores y la lista de los títulos// 
// (utilizando concat)
newList = directorsList.concat(titlesList);
console.log(newList);

// -Una nueva lista que concatene la lista de directores y la lista de los títulos
//  (utilizando el factor de propagación)
newList = [...directorsList, ...titlesList];
console.log(newList);
