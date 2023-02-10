/* Vincula un evento de tipo "click" */
document.getElementById("myButton").addEventListener("click", function () {
    alert("click en el botón");
});

/* por metodo */
function miFunc() {
    alert('click en el botón, evento onclick');
}

/* por jQUERY */
/* $(document).ready(function () { */
/* $(document).ready( () => {  */
/* $(() => { */
$(() => {
    $("#button1").click(function () {
        alert("Hola, estoy utilizando jQuery");
    });
});