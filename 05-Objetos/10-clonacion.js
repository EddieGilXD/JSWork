

/**
 * La clonación de objetos en JavaScript se refiere al proceso de crear una copia exacta de un objeto existente. 
 * 
 *    Esto es útil cuando se necesita trabajar con una copia de un objeto para evitar modificar el objeto original. 
 *   
 *    Existen varias formas de clonar objetos en JavaScript, incluyendo el uso de la función `Object.assign()`, 
 *    el operador de propagación (`...`), y la serialización a través de JSON. Cada método tiene sus propias características y limitaciones.

1. **Usando `Object.assign()`:**

```javascript
const objetoOriginal = { nombre: "Pedro", edad: 30 };
const objetoClonado = Object.assign({}, objetoOriginal);


Utilizamos la clonación cuando  necesitamos que dos variables no se encuentren apuntando al mismo objeto
 */


let punto = {
    x: 10,
    y: 15,
};

console.log(punto);
Object.assign(punto, { z: 20}); //tomamos un objeto literal y se lo asignamos a punto, recuerda asignación de derecha a izquierda.
console.log(punto);

let clonePunto = Object.assign({}, punto, {z: 30});
console.log(clonePunto);

console.log(punto, clonePunto);

let copiaPunto = Object.assign({}, punto); //Para hacer una copia
console.log(copiaPunto, punto);

let copia2 = { ...punto }; // spread operator (...), esta es otra forma de clonar objetos
console.log(copia2);


//De la manera antigua

let copia3 = {};
for (let llave in punto) {
    copia3[llave] = punto[llave];
}
console.log(copia3);



