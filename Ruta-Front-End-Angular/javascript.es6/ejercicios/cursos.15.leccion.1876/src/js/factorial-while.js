/* - factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while */

console.log("Factorial While de 10");
fact=10;
acu=1;
while (fact>0) {
    acu=acu*fact;
    fact--;
}
console.log(acu); 