
//Construye una función que determine cuáles propiedades de una función son métodos

let objeto = {
    id: 1,
    name: 'Alejandra',
    login: function() {}, //¿En este ejemplo, qué es login:?
    logout: function() {}, // ¿Cuál es el nombre que reciben este tipo de funciones sin nombre?

}

function cualesMetodos(obj) {
    for(let llave in obj){ //¿Para qué sirve el for-in?
        if (typeof(obj[llave]) === 'function') { //¿Qué está haciendo el código de las líneas 14 a 16?
            console.log(llave);
        }
    } //¿Por qué esta función no tiene un return?
}

cualesMetodos(objeto);