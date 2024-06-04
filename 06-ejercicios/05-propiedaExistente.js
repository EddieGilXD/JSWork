

//Crea una función que evalue si un objeto tiene una propiedad en particular


let objeto = {
    id:1,
    name: 'Pedro',
    login: function () {},
    logout: function () {},
}

let propiedad = 'name'; // ¿Qué resultado obtenemos si cambiamos el valor de propiedad a 'nombre'?

function tieneProp(obj, propiedad) {
    let props = Object.keys(obj); //devuelve un array que es un objeto iterable
    console.log(props);

    for (let prop of props){
        console.log(prop) // ¿Para qué sirve for-of?   ¿Qué pasaría si utilizamos for-in en lugar de for-of?
        if(propiedad == prop){
            return true;
        }
    }
    return false;

}

console.log(tieneProp(objeto,propiedad)); // ¿Qué es "objeto", en esta línea?