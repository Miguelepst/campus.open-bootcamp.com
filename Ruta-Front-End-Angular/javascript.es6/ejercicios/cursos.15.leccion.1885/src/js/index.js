const logger = require('./logger')

console.log("Ejercicio 12: cursos.15.leccion.1885");

const miFuncionError = () => { throw new Error("Mensaje de error personalizado") }

try {
    miFuncionError()
   
} catch (e) {
    logger.error(`El valor de e es: ${e}`)
    logger.error("ERROR!")
} finally {
    console.log("Esto se va a ejecutar tanto si se produce algún error, como si no existe ninguno")
}

// Crea un nuevo proyecto de Node

// - Instala la dependencia Winston

// - En el archivo index.js crea una función que devuelva un error con un mensaje 
//   personalizado

// - Registra el error en un archivo a través de un
//  try...
//    catch
