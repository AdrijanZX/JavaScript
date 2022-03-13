'use strict';

function verAsignaturas(...alumnos) {
    let array;
    alumnos.forEach(alumno => {
        alumno.forEach((datos, index) => {
            if(index<2)
                array += datos + "-";
            else if(index==2) {
                array += "asignaturas:";
                array += datos + "/";
            } else if(index==alumno.length-1)
                array += datos;
            else
                array += datos + "/";
        })
        console.log(array);
        array = "";
    });
}
verAsignaturas(["Jose","ASIR","BBDD","LM"],["Antonio","DAM","ED","Inglés"],["María","SEMI","FOL","PROG", "ED"]);

