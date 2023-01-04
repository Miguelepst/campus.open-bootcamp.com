//   Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

// - Un nuevo Set con los nombres de tu familia
const array = ["Miguel Gutierrez", "Luz vlez", "Liz Yaneth", "Alexandra Jimenez"];

const nameFamily = new Set(array);

console.log(array);
console.log(nameFamily);

// - Modifica el Set original añadiendo tu nombre(duplicado)(debería darte lo mismo)

nameFamily.add("Miguel Gutierrez");
console.log(nameFamily);

// - Modifica el Set original añadiendo el nombre "Javascript"(ya que empieza a formar  
//   parte de tu vida;)

nameFamily.add("Javascript");
console.log(nameFamily);
