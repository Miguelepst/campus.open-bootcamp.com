console.log("Test de vinculo");

nombre = "Miguel";
apellido = "Gutierrez";

objetoPersona = { "nombre":"Miguel",  apellido : "Gutierrez"  }

/* --- sessionStorage */
sessionStorage.setItem("persona", JSON.stringify(objetoPersona))
//console.log(JSON.parse(sessionStorage.getItem("persona")))

/* --- localStorage */
localStorage.setItem("persona", JSON.stringify(objetoPersona))
//console.log(JSON.parse(localStorage.getItem("persona")))

/* --- cookies */
 document.cookie = "persona=" + encodeURIComponent (JSON.stringify(objetoPersona)) + ";max-age=120 " 















/* 

-Almacena el objeto anterior en la SessionStorage

    -
    Almacena el objeto anterior en la LocalStorage

    -
    Crea una cookie que caduque en 2 minutos con los datos del objeto anterior

    -
    Observa en Google Chrome cómo se almacenan los datos en la SessionStorage, LocalStorage y las cookies

    -
    Cierra el navegador, comenta las líneas que almacenan SessionStorage, LocalStorage y CookieStorage y vuelve a abrirlo

    -
    Observa cómo la SessionStorage está vacía

    -
    Observa cómo la LocalStorage sigue manteniendo el objeto que has almacenado antes de cerrar el navegador

    -
    Observa cómo la cookie sigue manteniendo el objeto que has almacenado antes, aunque ya está caducado


*/