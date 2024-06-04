//Crea una copia de un objeto sin utilizar ... ni Object.assing

//¿Qué es el operador ... ?

let obj1 = { id: 1, name: 'Cinthia'};
function crearCopia(obj) {
    let copia = {};         // ¿Para qué se realiza esta declaración?
    for (let llave in obj){ //¿Para qué sirve el for-in?
        for (let llave in obj) {
            copia[llave] = obj[llave]; //¿Qué realiza esta sentencia?
        }

        return copia;
    }
}

let obj2 = crearCopia(obj1);
console.log({ obj1, obj2 });