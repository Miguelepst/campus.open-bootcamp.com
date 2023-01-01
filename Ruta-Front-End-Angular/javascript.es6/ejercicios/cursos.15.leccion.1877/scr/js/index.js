//- Una cadena de texto con tu Nombre
nombre = "Miguel";

//- Otra cadena de texto con tu Apellido
apellido = "Gutierrez";

//- Una cadena de texto que se llame "estudiante" 
//  concatenando tu Nombre y tu Apellido con un espacio entre medias 
//estudiante = "Estudiante " + nombre + " " + apellido;
estudiante = "Estudiante";
estudiante = estudiante.concat(" ", nombre, " ", apellido);
console.log(estudiante)

// - Una cadena de texto que se llame "estudianteMayus" 
//  que contenga la cadena estudiante pero todo en mayúsculas 
estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

//- Una cadena de texto que se llame "estudianteMinus" 
//  que contenga la cadena estudiante pero todo en minúsculas
estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

//- Una variable que contenga el número de letras 
//  de la cadena "estudiante" contando los espacios
numLetras = estudiante.length;
console.log(numLetras);

//- Una variable que contenga la primera letra del Nombre
primeraLetraNombre = nombre;
console.log(primeraLetraNombre.slice(0, 1));

//- Otra variable que contenga la última letra del Apellido
ultimaLetraApellido = apellido;
console.log(ultimaLetraApellido.slice(ultimaLetraApellido.length - 1, ultimaLetraApellido.length));

//- Una cadena de texto que elimine los espacios de la variable "estudiante"
sinEspaciosEstudiante = estudiante;
console.log(sinEspaciosEstudiante.replace(/ /g, ''));


//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
siEstacontenido = estudiante.includes("Miguel");
console.log(siEstacontenido);
