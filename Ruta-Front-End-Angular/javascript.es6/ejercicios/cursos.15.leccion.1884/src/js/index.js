 // - Una función sin parámetros que devuelva siempre "true"

 f = () => true
 console.log(f())

 // - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una 
 //  promesa" 5 segundos después de haberse ejecutado


 function greet(userName) {
     console.log('Soy una promesa 3 segundos depues de haberse ejecutado');
 }
 setTimeout(greet, 3000);


 // - Una función generadora de índices pares automáticos

 function* generaEvenIndex() {
     let id = 0;
     while (true) {
         id++
         //         if (id === 6) {  //limite 6
         //            return id
         //        }
         if (id % 2 == 0) {
             yield id // Esperando hasta que se vuelva a llamar
         }
     }
 }
 const evenNumber = generaEvenIndex();
 console.log(evenNumber.next().value)
 console.log(evenNumber.next().value)
 console.log(evenNumber.next().value)
 console.log(evenNumber.next().value)
