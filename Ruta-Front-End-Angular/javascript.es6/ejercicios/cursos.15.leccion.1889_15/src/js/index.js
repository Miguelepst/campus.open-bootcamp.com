/* 
- Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci(Por ejemplo: num = 6 => Resultado[1, 1, 2, 3, 5, 8])

- Ejecuta la depuración de VSCode para visualizar la ejecución de la función
*/


console.log('Fibonacci Series:');

const fibonacci = n => {
let    list = [];
    const number = n;
    let n1 = 0,
        n2 = 1,
        nextTerm;
    for (let i = 1; i <= number; i++) {
        console.log(n1);
        list[i - 1] = n1;
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return list;
}

console.log(fibonacci(6));
