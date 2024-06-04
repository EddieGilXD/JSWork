//Construye una función que te permita saber si dos objetos son similares

function similares(obj1, obj2){ //asume que son iguales
    let distintos= false;   //¿Por qué deberiamos crear esta variable distintos?
    for(let llave in obj1){ // ¿En este ejemplo para qué sirve el for in?
        if(obj1[llave] !== obj2[llave]) {//¿Qué hace el if de la líneas 6-->8 de 06-ejercicios/03-objetosSimilares.js
            distintos = true;
        }
    }
    return !distintos; // ¿Por qué negamos la variable distintos en 06-ejercicios/03-objetosSimilares.js ?

}

let resultado = similares( //¿En este ejemplo que valor tomará resultado?
    {id:1, name: 'Anna'}, //¿En este ejemplo qué es {id:1, name: 'Anna'}
    {id:1, name: 'Cinthia'}, //Cambia el valor a 'Anna'
);

console.log(resultado);