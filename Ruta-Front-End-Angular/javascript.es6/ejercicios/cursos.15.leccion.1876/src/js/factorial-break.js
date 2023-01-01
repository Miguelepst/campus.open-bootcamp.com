/* - factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break */

console.log("Factorial Break de 10");
fact=10;
sum=1;
while (true){
    sum= sum*fact
    if (fact-1==0){
        break;
    }
    fact--;
}
console.log(sum); 