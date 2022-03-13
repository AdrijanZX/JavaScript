function Ejercicio1(cadena, _boolean, array, funcion) {
    let suma = 0;
    if(typeof cadena == "string" && typeof _boolean == "boolean" && typeof array == "object" && typeof funcion == "function") {
        if(_boolean == true) {
            array.forEach(num => suma+=num);
            (suma >= 100) ? (cadena.includes('a') ? alert("La letra a no esta permitida.") : 
            alert("Muy bien, no has usado la 'a'")) : alert("El resultado de tu array es insuficiente para comprobar la cadena")
        } else {
            funcion();
        }
    } else {
        alert("Parametros incorrectos.");
    }
}
Ejercicio1()
Ejercicio1("hola mundo",true,[1,2,3,4],() => {alert("Se acabo el juego")})
Ejercicio1("Si",true,[10,20,30,40],() => {alert("Se acabo el juego")})
Ejercicio1("Sí",false,[10,20,30,40],() => {alert("Se acabo el juego")})