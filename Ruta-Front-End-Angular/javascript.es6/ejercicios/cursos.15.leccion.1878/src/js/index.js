console.log("Ejercicio: https://campus.open-bootcamp.com/cursos/15/leccion/1878");


//-Una variable que contenga tu altura en centímetros(entero)
alturaCm = 180;
console.log("Altura: " + alturaCm + "cm");
//    -Una variable que contenga tu altura en metros(número de coma flotante)

//console.log( parseInt(alturaCm))

alturaM = alturaCm / 100;
console.log("Altura en metros: " + alturaM + "M");

//    -Una variable que contenga tu peso en kilogramos(número de coma flotante)
pesoKg = 81.50;

//    -Una variable que contenga tu altura en metros redondeada hacia arriba
alturaM = 1.813252;

console.log("Altura en metros: " + Math.ceil(alturaM) + "M");

//    -Una variable que contenga tu peso en kilogramos redondeado hacia abajo
pesoKg = 81.5234;
console.log(Math.floor(pesoKg));


// -Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1"
//  es igual al máximo valor que se puede obtener en Javascript

let max_valor_JS = Number.MAX_VALUE;
let min_valor_JS = Number.MIN_VALUE;


console.log(max_valor_JS);
console.log(min_valor_JS);
