'use strict'

function ejercicio3(datos) {
    let cadena = "";
    let aux = 0, aux2 = "";
        datos.forEach(dato => {
            if(isNaN(dato) != true) {
                cadena += dato + "-";
            }
            alert(cadena);
        });
    
}
ejercicio3([3, 4, 5, 2, 1]);